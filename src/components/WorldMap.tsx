import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Region colors for glowing dots - matching the legend
const regionColors = {
  northAmerica: "hsl(325 80% 55%)", // Magenta
  europe: "hsl(188 80% 50%)",       // Cyan
  asiaPacific: "hsl(142 70% 45%)",  // Emerald
  restOfWorld: "hsl(38 90% 55%)",   // Amber
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
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(230 45% 26%)"
                stroke="hsl(230 45% 18%)"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "hsl(230 45% 32%)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker, i) => {
          const color = regionColors[marker.region];

          return (
            <Marker key={marker.id} coordinates={marker.coordinates}>
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.5, ease: "easeOut" }}
              >
                {/* Outer glow pulse */}
                <motion.circle
                  r={10}
                  fill={color}
                  opacity={0.15}
                  animate={{
                    r: [8, 16, 8],
                    opacity: [0.2, 0.05, 0.2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                />
                {/* Middle glow pulse */}
                <motion.circle
                  r={6}
                  fill={color}
                  opacity={0.3}
                  animate={{
                    r: [5, 10, 5],
                    opacity: [0.35, 0.1, 0.35],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
                {/* Core dot with glow */}
                <circle
                  r={3.5}
                  fill={color}
                  style={{
                    filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 10px ${color})`,
                  }}
                />
                {/* Bright center */}
                <circle r={1.2} fill="white" opacity={0.9} />
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
