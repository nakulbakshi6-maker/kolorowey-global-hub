import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const popLocations = [
  // North America
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Dallas", coordinates: [-96.797, 32.7767] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "Toronto", coordinates: [-79.3832, 43.6532] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Atlanta", coordinates: [-84.388, 33.749] },
  { name: "Mexico City", coordinates: [-99.1332, 19.4326] },
  // Europe
  { name: "London", coordinates: [-0.1278, 51.5074] },
  { name: "Frankfurt", coordinates: [8.6821, 50.1109] },
  { name: "Amsterdam", coordinates: [4.9041, 52.3676] },
  { name: "Paris", coordinates: [2.3522, 48.8566] },
  { name: "Stockholm", coordinates: [18.0686, 59.3293] },
  { name: "Madrid", coordinates: [-3.7038, 40.4168] },
  { name: "Milan", coordinates: [9.19, 45.4642] },
  { name: "Warsaw", coordinates: [21.0122, 52.2297] },
  // Asia Pacific
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Mumbai", coordinates: [72.8777, 19.076] },
  { name: "Hong Kong", coordinates: [114.1694, 22.3193] },
  { name: "Seoul", coordinates: [126.978, 37.5665] },
  { name: "Jakarta", coordinates: [106.8456, -6.2088] },
  { name: "Melbourne", coordinates: [144.9631, -37.8136] },
  { name: "Delhi", coordinates: [77.1025, 28.7041] },
  { name: "Bangkok", coordinates: [100.5018, 13.7563] },
  // Middle East & Africa
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "Johannesburg", coordinates: [28.0473, -26.2041] },
  { name: "Lagos", coordinates: [3.3792, 6.5244] },
  { name: "Nairobi", coordinates: [36.8219, -1.2921] },
  // South America
  { name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  { name: "Bogotá", coordinates: [-74.0721, 4.711] },
  { name: "Santiago", coordinates: [-70.6693, -33.4489] },
];

const GlobalInfrastructureMap = memo(() => {
  return (
    <div className="relative">
      <ComposableMap
        projectionConfig={{ scale: 147, center: [0, 10] }}
        className="w-full h-auto"
        style={{ aspectRatio: "2/1" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rpiKey || geo.properties?.name}
                geography={geo}
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "hsl(var(--muted-foreground) / 0.2)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {popLocations.map((pop, i) => (
          <Marker key={pop.name} coordinates={pop.coordinates as [number, number]}>
            <motion.circle
              r={3}
              fill="hsl(var(--accent))"
              opacity={0.9}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                delay: i * 0.05,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            <circle r={1.5} fill="hsl(var(--accent))" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
});

GlobalInfrastructureMap.displayName = "GlobalInfrastructureMap";

export default GlobalInfrastructureMap;
