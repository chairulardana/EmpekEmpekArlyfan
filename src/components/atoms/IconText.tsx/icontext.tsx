import { motion } from "framer-motion";

interface IconTextProps {
  icon: string;
  text: string;
  align?: "left" | "right";
}

export function IconText({ icon, text, align = "left" }: IconTextProps) {
  return (
    <motion.div
      whileHover={{ x: align === "right" ? -5 : 5 }}
      className={`flex items-start space-x-3 text-white/80 ${
        align === "right" ? "justify-end lg:justify-end" : "justify-start"
      }`}
    >
      {align === "left" && (
        <span className="text-lg mt-0.5 flex-shrink-0">{icon}</span>
      )}
      <span
        className={`flex-1 leading-tight ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {text}
      </span>
      {align === "right" && (
        <span className="text-lg mt-0.5 flex-shrink-0">{icon}</span>
      )}
    </motion.div>
  );
}
