import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const regionColors: Record<string, string> = {
  "North America": "hsl(325, 80%, 55%)",
  "Europe": "hsl(188, 80%, 50%)",
  "Asia Pacific": "hsl(142, 70%, 45%)",
  "Rest of World": "hsl(38, 90%, 55%)",
};

const popLocations = [
  // North America
  { name: "New York", coordinates: [-74.006, 40.7128], region: "North America" },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522], region: "North America" },
  { name: "Chicago", coordinates: [-87.6298, 41.8781], region: "North America" },
  { name: "Dallas", coordinates: [-96.797, 32.7767], region: "North America" },
  { name: "Miami", coordinates: [-80.1918, 25.7617], region: "North America" },
  { name: "Toronto", coordinates: [-79.3832, 43.6532], region: "North America" },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], region: "North America" },
  { name: "Seattle", coordinates: [-122.3321, 47.6062], region: "North America" },
  { name: "Atlanta", coordinates: [-84.388, 33.749], region: "North America" },
  { name: "Mexico City", coordinates: [-99.1332, 19.4326], region: "North America" },
  // Europe
  { name: "London", coordinates: [-0.1278, 51.5074], region: "Europe" },
  { name: "Frankfurt", coordinates: [8.6821, 50.1109], region: "Europe" },
  { name: "Amsterdam", coordinates: [4.9041, 52.3676], region: "Europe" },
  { name: "Paris", coordinates: [2.3522, 48.8566], region: "Europe" },
  { name: "Stockholm", coordinates: [18.0686, 59.3293], region: "Europe" },
  { name: "Madrid", coordinates: [-3.7038, 40.4168], region: "Europe" },
  { name: "Milan", coordinates: [9.19, 45.4642], region: "Europe" },
  { name: "Warsaw", coordinates: [21.0122, 52.2297], region: "Europe" },
  // Asia Pacific
  { name: "Tokyo", coordinates: [139.6917, 35.6895], region: "Asia Pacific" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], region: "Asia Pacific" },
  { name: "Sydney", coordinates: [151.2093, -33.8688], region: "Asia Pacific" },
  { name: "Mumbai", coordinates: [72.8777, 19.076], region: "Asia Pacific" },
  { name: "Hong Kong", coordinates: [114.1694, 22.3193], region: "Asia Pacific" },
  { name: "Seoul", coordinates: [126.978, 37.5665], region: "Asia Pacific" },
  { name: "Jakarta", coordinates: [106.8456, -6.2088], region: "Asia Pacific" },
  { name: "Melbourne", coordinates: [144.9631, -37.8136], region: "Asia Pacific" },
  { name: "Delhi", coordinates: [77.1025, 28.7041], region: "Asia Pacific" },
  { name: "Bangkok", coordinates: [100.5018, 13.7563], region: "Asia Pacific" },
  // Rest of World
  { name: "Dubai", coordinates: [55.2708, 25.2048], region: "Rest of World" },
  { name: "Johannesburg", coordinates: [28.0473, -26.2041], region: "Rest of World" },
  { name: "Lagos", coordinates: [3.3792, 6.5244], region: "Rest of World" },
  { name: "Nairobi", coordinates: [36.8219, -1.2921], region: "Rest of World" },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505], region: "Rest of World" },
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037], region: "Rest of World" },
  { name: "Bogotá", coordinates: [-74.0721, 4.711], region: "Rest of World" },
  { name: "Santiago", coordinates: [-70.6693, -33.4489], region: "Rest of World" },
];

const glowFilters: Record<string, string> = {
  "North America": "drop-shadow(0 0 6px hsl(325, 80%, 55%)) drop-shadow(0 0 14px hsl(325, 80%, 55%))",
  "Europe": "drop-shadow(0 0 6px hsl(188, 80%, 50%)) drop-shadow(0 0 14px hsl(188, 80%, 50%))",
  "Asia Pacific": "drop-shadow(0 0 6px hsl(142, 70%, 45%)) drop-shadow(0 0 14px hsl(142, 70%, 45%))",
  "Rest of World": "drop-shadow(0 0 6px hsl(38, 90%, 55%)) drop-shadow(0 0 14px hsl(38, 90%, 55%))",
};

const GlobalInfrastructureMap = memo(() => {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(230, 45%, 12%), hsl(230, 45%, 20%), hsl(230, 40%, 16%))",
      }}
    >
      <ComposableMap
        projectionConfig={{ scale: 170, center: [0, 5] }}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
        width={900}
        height={420}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rpiKey || geo.properties?.name}
                geography={geo}
                fill="hsl(230, 45%, 26%)"
                stroke="hsl(230, 40%, 33%)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "hsl(230, 45%, 30%)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {popLocations.map((pop, i) => (
          <Marker key={pop.name} coordinates={pop.coordinates as [number, number]}>
            <motion.circle
              r={5}
              fill={regionColors[pop.region]}
              opacity={0.85}
              style={{ filter: glowFilters[pop.region] }}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                delay: i * 0.05,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            <circle r={2.5} fill="white" opacity={0.9} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
});

GlobalInfrastructureMap.displayName = "GlobalInfrastructureMap";

export default GlobalInfrastructureMap;
