import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  // North America
  { id: "nyc", coordinates: [-74.006, 40.7128] as [number, number], city: "New York", tone: "accent" },
  { id: "la", coordinates: [-118.2437, 34.0522] as [number, number], city: "Los Angeles", tone: "accent" },
  { id: "chicago", coordinates: [-87.6298, 41.8781] as [number, number], city: "Chicago", tone: "accent" },
  { id: "toronto", coordinates: [-79.3832, 43.6532] as [number, number], city: "Toronto", tone: "accent" },
  { id: "seattle", coordinates: [-122.3321, 47.6062] as [number, number], city: "Seattle", tone: "accent" },
  // Europe
  { id: "london", coordinates: [-0.1276, 51.5074] as [number, number], city: "London", tone: "highlight" },
  { id: "frankfurt", coordinates: [8.6821, 50.1109] as [number, number], city: "Frankfurt", tone: "highlight" },
  { id: "amsterdam", coordinates: [4.9041, 52.3676] as [number, number], city: "Amsterdam", tone: "highlight" },
  { id: "paris", coordinates: [2.3522, 48.8566] as [number, number], city: "Paris", tone: "highlight" },
  { id: "stockholm", coordinates: [18.0686, 59.3293] as [number, number], city: "Stockholm", tone: "highlight" },
  // Asia Pacific
  { id: "tokyo", coordinates: [139.6917, 35.6895] as [number, number], city: "Tokyo", tone: "accent" },
  { id: "singapore", coordinates: [103.8198, 1.3521] as [number, number], city: "Singapore", tone: "accent" },
  { id: "sydney", coordinates: [151.2093, -33.8688] as [number, number], city: "Sydney", tone: "highlight" },
  { id: "mumbai", coordinates: [72.8777, 19.076] as [number, number], city: "Mumbai", tone: "accent" },
  { id: "hongkong", coordinates: [114.1694, 22.3193] as [number, number], city: "Hong Kong", tone: "accent" },
  { id: "seoul", coordinates: [126.978, 37.5665] as [number, number], city: "Seoul", tone: "accent" },
  // Other regions
  { id: "saopaulo", coordinates: [-46.6333, -23.5505] as [number, number], city: "São Paulo", tone: "highlight" },
  { id: "dubai", coordinates: [55.2708, 25.2048] as [number, number], city: "Dubai", tone: "highlight" },
  { id: "johannesburg", coordinates: [28.0473, -26.2041] as [number, number], city: "Johannesburg", tone: "accent" },
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
                stroke="hsl(230 45% 22%)"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker, i) => {
          const accentColor = "hsl(325 80% 55%)";
          const highlightColor = "hsl(188 80% 50%)";
          const color = marker.tone === "accent" ? accentColor : highlightColor;

          return (
            <Marker key={marker.id} coordinates={marker.coordinates}>
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.5, ease: "easeOut" }}
              >
                {/* Outer glow pulse - large */}
                <motion.circle
                  r={12}
                  fill={color}
                  opacity={0.15}
                  animate={{
                    r: [10, 18, 10],
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
                  r={7}
                  fill={color}
                  opacity={0.3}
                  animate={{
                    r: [6, 11, 6],
                    opacity: [0.35, 0.1, 0.35],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
                {/* Core dot with glow filter */}
                <circle
                  r={4}
                  fill={color}
                  style={{
                    filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 10px ${color})`,
                  }}
                />
                {/* Bright center */}
                <circle r={1.5} fill="white" opacity={0.9} />
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
