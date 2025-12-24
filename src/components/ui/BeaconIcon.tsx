import { motion } from "framer-motion";

interface BeaconIconProps {
  className?: string;
  animate?: boolean;
}

export const BeaconIcon = ({ className = "", animate = true }: BeaconIconProps) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Outer glow rings */}
      {animate && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-secondary/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-secondary/10"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </>
      )}
      
      {/* Sun/Beacon core */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Light rays */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="20"
              x2="50"
              y2="10"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 50 50)`}
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: [0.4, 1, 0.4], pathLength: 1 }}
              transition={{
                opacity: { duration: 2, repeat: Infinity, delay: i * 0.1 },
                pathLength: { duration: 1, delay: 0.5 + i * 0.05 },
              }}
            />
          ))}
        </motion.g>
        
        {/* Central sun */}
        <motion.circle
          cx="50"
          cy="35"
          r="12"
          fill="hsl(var(--secondary))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Mountain silhouette */}
        <motion.path
          d="M20 80 L50 45 L80 80 Z"
          fill="hsl(var(--primary))"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
        
        {/* Winding path */}
        <motion.path
          d="M50 80 Q45 70 50 60 Q55 50 50 45"
          stroke="hsl(var(--foreground))"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};
