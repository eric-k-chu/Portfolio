import { motion } from "framer-motion";
import { GITHUB, LINKEDIN, PROJECTS } from "../lib/constants";
import { GitHubIcon, LinkedInIcon } from "../components";

export function LandingPage() {
  const animVariants = {
    disappear: { opacity: 0 },
    appear: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <div className="mx-auto mt-20 flex max-w-7xl flex-col-reverse items-center justify-start px-6 lg:mt-40 lg:flex-row lg:justify-evenly">
        <div className="w-fit">
          <motion.h1
            className="text-xl font-medium md:text-2xl lg:text-4xl"
            initial="disappear"
            animate="appear"
            variants={animVariants}
          >
            Hi, I'm Eric
          </motion.h1>
          <motion.h3
            className="mt-4 text-base font-light md:text-lg lg:text-2xl"
            initial="disappear"
            animate="appear"
            variants={animVariants}
          >
            A <span className="text-orange dark:text-blue">Full-Stack</span> Web
            Developer
          </motion.h3>
          <motion.div
            className="mt-8 flex items-center gap-x-4"
            initial="disappear"
            animate="appear"
            variants={animVariants}
          >
            <motion.a href={GITHUB} target="_blank" whileHover={{ scale: 1.1 }}>
              <GitHubIcon className="h-8 w-8 fill-black dark:fill-white/90" />
            </motion.a>
            <motion.a
              href={LINKEDIN}
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <LinkedInIcon className="h-8 w-8 fill-black dark:fill-white/90" />
            </motion.a>
          </motion.div>
          <motion.button
            initial="disappear"
            animate="appear"
            variants={animVariants}
            whileHover={{ scale: 1.1 }}
            className="mt-8 rounded-md bg-orange p-2 px-6 text-sm text-black shadow-md dark:bg-blue md:text-base lg:text-lg"
          >
            Hire Me
          </motion.button>
        </div>
        <motion.div
          className="mb-10 flex w-4/12 items-center justify-center lg:mb-0"
          initial="disappear"
          animate="appear"
          variants={animVariants}
        >
          <img
            src="/profile.jpg"
            alt="profile pic"
            className="h-40 w-40 rounded-full object-cover sm:h-60 sm:w-60 lg:h-80 lg:w-80"
          />
        </motion.div>
      </div>
      <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center px-6 lg:mt-40">
        <h2 className="w-full border-b border-black/25 text-center leading-[0.1rem] text-black/25 dark:border-white/60 dark:text-white/60">
          <span className="bg-light-1 px-4 transition-colors dark:bg-dark-1">
            My Latest Projects
          </span>
        </h2>
        <motion.div
          className="mt-20 flex w-full flex-wrap justify-around gap-8"
          initial="disappear"
          animate="appear"
          variants={animVariants}
        >
          {PROJECTS.map((n, i) => (
            <motion.img
              src={n.imgSrc}
              key={i}
              className="h-80 w-80 rounded-lg object-cover shadow-md hover:cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </section>
      <div className="h-20" />
    </>
  );
}
