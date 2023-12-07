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
    <main className="mx-auto mt-20 flex max-w-6xl items-center px-6">
      <div className="w-8/12">
        <motion.h3
          className="text-base font-light md:text-lg lg:text-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          Hi, I'm Eric
        </motion.h3>
        <motion.h1
          className="mt-4 text-xl font-medium md:text-2xl lg:text-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          Full-Stack Web Developer
        </motion.h1>
        <motion.div
          className="mt-6 text-sm font-medium md:text-base lg:text-lg"
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
                className="select-none underline"
                variants={skillVariants}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="flex items-center gap-x-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.button
            className="mt-10 w-fit rounded-md bg-orange p-2 text-black dark:bg-blue"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/projects")}
          >
            My Projects
          </motion.button>
          <motion.button
            className="mt-10 w-fit rounded-md bg-orange p-2 text-black dark:bg-blue"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      <div className="flex w-4/12 items-center justify-center">
        <img
          src="/profile.jpg"
          alt="profile pic"
          className="h-40 w-40 rounded-full object-cover sm:h-60 sm:w-60 lg:h-80 lg:w-80"
        />
      </div>
    </main>
  );
}
