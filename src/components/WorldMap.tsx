import { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Region colors matching the legend below the map
const regionColors = {
  northAmerica: "hsl(325 80% 55%)", // Magenta/Accent
  europe: "hsl(188 80% 50%)",       // Cyan/Highlight
  asiaPacific: "hsl(142 70% 45%)",  // Emerald/Green
  restOfWorld: "hsl(38 90% 55%)",   // Amber/Orange
};

// Country codes for each region (ISO 3166-1 numeric codes)
const regionMapping: Record<string, keyof typeof regionColors> = {
  // North America
  "840": "northAmerica", // USA
  "124": "northAmerica", // Canada
  "484": "northAmerica", // Mexico
  "192": "northAmerica", // Cuba
  "332": "northAmerica", // Haiti
  "214": "northAmerica", // Dominican Republic
  "388": "northAmerica", // Jamaica
  "44": "northAmerica",  // Bahamas
  "630": "northAmerica", // Puerto Rico
  
  // Europe
  "826": "europe", // UK
  "276": "europe", // Germany
  "250": "europe", // France
  "380": "europe", // Italy
  "724": "europe", // Spain
  "528": "europe", // Netherlands
  "56": "europe",  // Belgium
  "756": "europe", // Switzerland
  "40": "europe",  // Austria
  "616": "europe", // Poland
  "752": "europe", // Sweden
  "578": "europe", // Norway
  "208": "europe", // Denmark
  "246": "europe", // Finland
  "372": "europe", // Ireland
  "620": "europe", // Portugal
  "300": "europe", // Greece
  "203": "europe", // Czech Republic
  "642": "europe", // Romania
  "804": "europe", // Ukraine
  "348": "europe", // Hungary
  "643": "europe", // Russia (European part)
  
  // Asia Pacific
  "392": "asiaPacific", // Japan
  "156": "asiaPacific", // China
  "356": "asiaPacific", // India
  "410": "asiaPacific", // South Korea
  "360": "asiaPacific", // Indonesia
  "764": "asiaPacific", // Thailand
  "704": "asiaPacific", // Vietnam
  "458": "asiaPacific", // Malaysia
  "608": "asiaPacific", // Philippines
  "702": "asiaPacific", // Singapore
  "36": "asiaPacific",  // Australia
  "554": "asiaPacific", // New Zealand
  "586": "asiaPacific", // Pakistan
  "50": "asiaPacific",  // Bangladesh
  "144": "asiaPacific", // Sri Lanka
  "158": "asiaPacific", // Taiwan
  "344": "asiaPacific", // Hong Kong
  "496": "asiaPacific", // Mongolia
  
  // Rest of World (South America, Africa, Middle East)
  "76": "restOfWorld",  // Brazil
  "32": "restOfWorld",  // Argentina
  "152": "restOfWorld", // Chile
  "170": "restOfWorld", // Colombia
  "604": "restOfWorld", // Peru
  "862": "restOfWorld", // Venezuela
  "710": "restOfWorld", // South Africa
  "818": "restOfWorld", // Egypt
  "566": "restOfWorld", // Nigeria
  "404": "restOfWorld", // Kenya
  "682": "restOfWorld", // Saudi Arabia
  "784": "restOfWorld", // UAE
  "376": "restOfWorld", // Israel
  "792": "restOfWorld", // Turkey
  "364": "restOfWorld", // Iran
  "12": "restOfWorld",  // Algeria
  "504": "restOfWorld", // Morocco
  "834": "restOfWorld", // Tanzania
  "800": "restOfWorld", // Uganda
};

const markers = [
  // North America
  { id: "nyc", coordinates: [-74.006, 40.7128] as [number, number], city: "New York", region: "northAmerica" as const },
  { id: "la", coordinates: [-118.2437, 34.0522] as [number, number], city: "Los Angeles", region: "northAmerica" as const },
  { id: "chicago", coordinates: [-87.6298, 41.8781] as [number, number], city: "Chicago", region: "northAmerica" as const },
  { id: "toronto", coordinates: [-79.3832, 43.6532] as [number, number], city: "Toronto", region: "northAmerica" as const },
  // Europe
  { id: "london", coordinates: [-0.1276, 51.5074] as [number, number], city: "London", region: "europe" as const },
  { id: "frankfurt", coordinates: [8.6821, 50.1109] as [number, number], city: "Frankfurt", region: "europe" as const },
  { id: "amsterdam", coordinates: [4.9041, 52.3676] as [number, number], city: "Amsterdam", region: "europe" as const },
  { id: "paris", coordinates: [2.3522, 48.8566] as [number, number], city: "Paris", region: "europe" as const },
  // Asia Pacific
  { id: "tokyo", coordinates: [139.6917, 35.6895] as [number, number], city: "Tokyo", region: "asiaPacific" as const },
  { id: "singapore", coordinates: [103.8198, 1.3521] as [number, number], city: "Singapore", region: "asiaPacific" as const },
  { id: "sydney", coordinates: [151.2093, -33.8688] as [number, number], city: "Sydney", region: "asiaPacific" as const },
  { id: "mumbai", coordinates: [72.8777, 19.076] as [number, number], city: "Mumbai", region: "asiaPacific" as const },
  { id: "hongkong", coordinates: [114.1694, 22.3193] as [number, number], city: "Hong Kong", region: "asiaPacific" as const },
  // Rest of World
  { id: "saopaulo", coordinates: [-46.6333, -23.5505] as [number, number], city: "São Paulo", region: "restOfWorld" as const },
  { id: "dubai", coordinates: [55.2708, 25.2048] as [number, number], city: "Dubai", region: "restOfWorld" as const },
  { id: "johannesburg", coordinates: [28.0473, -26.2041] as [number, number], city: "Johannesburg", region: "restOfWorld" as const },
];

const WorldMap = memo(() => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const getCountryColor = (geoId: string, isHovered: boolean) => {
    const region = regionMapping[geoId];
    if (region) {
      const baseColor = regionColors[region];
      if (isHovered || hoveredRegion === region) {
        return baseColor;
      }
      // Dimmed version when not hovered
      return baseColor.replace(/\d+%\)$/, "30%)");
    }
    // Default for unmapped countries
    return isHovered ? "hsl(230 35% 40%)" : "hsl(230 35% 28%)";
  };

  return (
    <div className="w-full relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-background">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 145,
          center: [15, 20],
        }}
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "2/1",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const geoId = geo.id || geo.properties?.["ISO_A3_EH"];
              const region = regionMapping[geoId];
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountryColor(geoId, false)}
                  stroke="hsl(230 45% 18%)"
                  strokeWidth={0.4}
                  onMouseEnter={() => region && setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  style={{
                    default: { 
                      outline: "none",
                      transition: "fill 0.3s ease",
                    },
                    hover: { 
                      outline: "none",
                      fill: getCountryColor(geoId, true),
                      cursor: "pointer",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {markers.map((marker, i) => {
          const color = regionColors[marker.region];
          const isRegionHovered = hoveredRegion === marker.region;

          return (
            <Marker key={marker.id} coordinates={marker.coordinates}>
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: isRegionHovered ? 1.3 : 1,
                }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.5, ease: "easeOut" }}
              >
                {/* Outer glow pulse */}
                <motion.circle
                  r={isRegionHovered ? 14 : 10}
                  fill={color}
                  opacity={0.15}
                  animate={{
                    r: isRegionHovered ? [12, 20, 12] : [8, 14, 8],
                    opacity: [0.25, 0.05, 0.25],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
                {/* Middle glow pulse */}
                <motion.circle
                  r={isRegionHovered ? 8 : 6}
                  fill={color}
                  opacity={0.35}
                  animate={{
                    r: isRegionHovered ? [6, 12, 6] : [5, 9, 5],
                    opacity: [0.4, 0.1, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                />
                {/* Core dot with glow */}
                <circle
                  r={isRegionHovered ? 5 : 3.5}
                  fill={color}
                  style={{
                    filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 10px ${color})`,
                    transition: "r 0.3s ease",
                  }}
                />
                {/* Bright center */}
                <circle r={isRegionHovered ? 2 : 1.2} fill="white" opacity={0.9} />
              </motion.g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
