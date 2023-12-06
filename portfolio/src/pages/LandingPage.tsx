import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <main className="mx-auto mt-20 max-w-6xl px-6">
      <motion.h3
        className="text-2xl font-light"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Hi, I'm Eric
      </motion.h3>
      <motion.h1
        className="mt-8 text-4xl font-medium"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Full-Stack Web Developer
      </motion.h1>
      <motion.div
        className="mt-10 text-lg font-medium"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.ul
          variants={skillVariants}
          className="flex max-w-[50%] flex-wrap gap-4"
          animate="visible"
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.3,
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="text-sm underline"
              variants={skillVariants}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div 
        className="flex items-center gap-x-8" 
        initial="hidden" animate="visible" 
        variants={containerVariants}>
        <motion.button 
          className="mt-10 rounded-md text-black p-2 w-fit dark:bg-blue bg-orange" 
          whileHover={{scale: 1.1}} 
          onClick={() => navigate('/projects')}>
          My Projects
        </motion.button>
        <motion.button 
          className="mt-10 rounded-md text-black p-2 w-fit dark:bg-blue bg-orange" 
          whileHover={{scale: 1.1}} 
          onClick={() => navigate('/contact')}>
          Contact Me
        </motion.button>
      </motion.div>
    </main>
  );
}
