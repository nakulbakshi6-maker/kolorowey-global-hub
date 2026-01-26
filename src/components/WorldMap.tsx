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
  { id: "nyc", coordinates: [-74.006, 40.7128] as [number, number], tone: "accent" },
  { id: "la", coordinates: [-118.2437, 34.0522] as [number, number], tone: "accent" },
  { id: "chicago", coordinates: [-87.6298, 41.8781] as [number, number], tone: "accent" },
  { id: "toronto", coordinates: [-79.3832, 43.6532] as [number, number], tone: "accent" },
  { id: "seattle", coordinates: [-122.3321, 47.6062] as [number, number], tone: "accent" },
  // Europe
  { id: "london", coordinates: [-0.1276, 51.5074] as [number, number], tone: "highlight" },
  { id: "frankfurt", coordinates: [8.6821, 50.1109] as [number, number], tone: "highlight" },
  { id: "amsterdam", coordinates: [4.9041, 52.3676] as [number, number], tone: "highlight" },
  { id: "paris", coordinates: [2.3522, 48.8566] as [number, number], tone: "highlight" },
  { id: "stockholm", coordinates: [18.0686, 59.3293] as [number, number], tone: "highlight" },
  // Asia Pacific
  { id: "tokyo", coordinates: [139.6917, 35.6895] as [number, number], tone: "accent" },
  { id: "singapore", coordinates: [103.8198, 1.3521] as [number, number], tone: "accent" },
  { id: "sydney", coordinates: [151.2093, -33.8688] as [number, number], tone: "highlight" },
  { id: "mumbai", coordinates: [72.8777, 19.076] as [number, number], tone: "accent" },
  { id: "hongkong", coordinates: [114.1694, 22.3193] as [number, number], tone: "accent" },
  { id: "seoul", coordinates: [126.978, 37.5665] as [number, number], tone: "accent" },
  // Other regions
  { id: "saopaulo", coordinates: [-46.6333, -23.5505] as [number, number], tone: "highlight" },
  { id: "dubai", coordinates: [55.2708, 25.2048] as [number, number], tone: "highlight" },
  { id: "johannesburg", coordinates: [28.0473, -26.2041] as [number, number], tone: "accent" },
];

const WorldMap = memo(() => {
  return (
    <div className="w-full aspect-[2/1] relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [10, 25],
        }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(230 45% 28%)"
                stroke="hsl(230 45% 20%)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "hsl(230 45% 32%)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker, i) => (
          <Marker key={marker.id} coordinates={marker.coordinates}>
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
            >
              {/* Pulse ring */}
              <motion.circle
                r={8}
                fill="none"
                stroke={marker.tone === "accent" ? "hsl(325 80% 55%)" : "hsl(188 80% 50%)"}
                strokeWidth={1.5}
                opacity={0.4}
                animate={{
                  r: [6, 14, 6],
                  opacity: [0.5, 0.1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
              {/* Main dot */}
              <circle
                r={4}
                fill={marker.tone === "accent" ? "hsl(325 80% 55%)" : "hsl(188 80% 50%)"}
                stroke="white"
                strokeWidth={1}
              />
            </motion.g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Connection lines overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(325 80% 55%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(188 80% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(325 80% 55%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGradient)" strokeWidth="0.15" strokeDasharray="1 1" fill="none">
          {/* NA to Europe */}
          <path d="M 25 22 Q 37 18, 48 20" />
          {/* Europe to Asia */}
          <path d="M 52 20 Q 62 18, 75 22" />
          {/* Asia to Australia */}
          <path d="M 78 26 Q 82 32, 84 38" />
          {/* NA to South America */}
          <path d="M 26 28 Q 28 32, 30 38" />
          {/* Europe to Africa */}
          <path d="M 50 24 Q 50 28, 52 34" />
        </g>
      </svg>
    </div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
