import "./Header.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <motion.div
          className="header-content"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="header-title">
            Empowering Business Growth Through Integrated Solutions
          </h1>
          <button type="button" className="btn btn-primary">
            get started
          </button>
        </motion.div>
      </div>
    </header>
  );
}
