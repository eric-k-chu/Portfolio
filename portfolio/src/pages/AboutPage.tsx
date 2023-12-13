import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";

export function AboutPage() {
  return (
    <motion.div
      className="mx-auto mt-40 flex max-w-6xl flex-col items-center justify-center gap-y-12 px-6 md:flex-row md:gap-x-12"
      initial="disappear"
      animate="appear"
      variants={showAndHide}
    >
      <img src="/profile.jpg" className="w-60 rounded-lg shadow-md md:w-80" />
      <section className="flex flex-col gap-y-4">
        <h1 className="text-medium font-semibold md:text-xl">
          Hi There <span>&#128075;</span>
        </h1>
        <h2 className="text-sm font-normal md:text-lg">I'm Eric.</h2>
        <p className="text-sm font-normal leading-loose">
          I'm a junior level full-stack software engineer, currently living in
          California. I graduated from{" "}
          <a
            className="text-orange after:content-['_↗'] hover:cursor-pointer dark:text-blue"
            target="_blank"
            href="https://www.fullerton.edu/"
          >
            California State University, Fullerton
          </a>{" "}
          in August 2022, where I received my bachelors in Computer Science. I
          initially wanted to specialize in game development, which was why all
          the projects I worked on were focused on building games. After about a
          year, I decided to try something new, and attended{" "}
          <a
            className="text-orange after:content-['_↗'] hover:cursor-pointer dark:text-blue"
            target="_blank"
            href="https://learningfuze.com/full-immersion"
          >
            LearningFuze's full-stack web development bootcamp.
          </a>{" "}
          Not only did I learn about technologies such as React and Node.js, I
          also gained skills in communication and interviewing.
        </p>
      </section>
    </motion.div>
  );
}
