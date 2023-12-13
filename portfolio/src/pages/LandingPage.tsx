import { motion } from "framer-motion";
import { GITHUB, LINKEDIN, PROJECTS } from "../lib/constants";
import { GitHubIcon, LinkedInIcon } from "../components";
import { showAndHide } from "../lib/animations";

export function LandingPage() {
  return (
    <>
      <div className="mx-auto mt-20 flex max-w-7xl flex-col-reverse items-center justify-start px-6 md:mt-40 md:flex-row md:justify-evenly">
        <div className="w-fit">
          <motion.h1
            className="text-xl font-medium md:text-2xl lg:text-4xl"
            initial="disappear"
            animate="appear"
            variants={showAndHide}
          >
            Hi, I'm Eric
          </motion.h1>
          <motion.h3
            className="mt-4 text-base font-light md:text-lg lg:text-2xl"
            initial="disappear"
            animate="appear"
            variants={showAndHide}
          >
            A <span className="text-orange dark:text-blue">Full-Stack</span> Web
            Developer
          </motion.h3>
          <motion.div
            className="mt-8 flex items-center gap-x-4"
            initial="disappear"
            animate="appear"
            variants={showAndHide}
          >
            <motion.a href={GITHUB} target="_blank" whileHover={{ scale: 1.1 }}>
              <GitHubIcon className="h-6 w-6 fill-dark-1 dark:fill-light-1 lg:h-8 lg:w-8" />
            </motion.a>
            <motion.a
              href={LINKEDIN}
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <LinkedInIcon className="h-6 w-6 fill-dark-1 dark:fill-light-1 lg:h-8 lg:w-8" />
            </motion.a>
          </motion.div>
          <motion.button
            initial="disappear"
            animate="appear"
            variants={showAndHide}
            whileHover={{ scale: 1.1 }}
            className="mt-8 rounded-md bg-orange p-2 px-6 text-sm text-dark-1 shadow-md dark:bg-blue md:text-base lg:text-lg"
          >
            Hire Me
          </motion.button>
        </div>
        <motion.div
          className="mb-10 flex w-1/2 items-center justify-center lg:mb-0 lg:w-4/12"
          initial="disappear"
          animate="appear"
          variants={showAndHide}
        >
          <img
            src="/Portfolio/profile.jpg"
            alt="profile pic"
            className="h-40 w-40 rounded-full object-cover shadow-md md:h-60 md:w-60 lg:h-80 lg:w-80"
          />
        </motion.div>
      </div>
      <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center px-6 lg:mt-40">
        <h2 className="w-full border-b border-dark-1/25 text-center leading-[0.1rem] text-dark-1/25 dark:border-light-1/60 dark:text-light-1/60">
          <span className="bg-light-1 px-4 transition-colors dark:bg-dark-1">
            My Latest Projects
          </span>
        </h2>
        <motion.div
          className="mt-20 flex w-full flex-wrap justify-around gap-8"
          initial="disappear"
          animate="appear"
          variants={showAndHide}
        >
          {PROJECTS.map((n, i) => (
            <div className="flex flex-col items-center gap-y-4" key={i}>
              <motion.img
                src={n.imgSrc}
                className="h-60 w-60 rounded-lg object-cover shadow-md hover:cursor-pointer lg:h-80 lg:w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ ease: "easeInOut" }}
              />
              <h2 className="font-medium italic">{n.title}</h2>
            </div>
          ))}
        </motion.div>
      </section>
      <div className="h-20" />
    </>
  );
}
