import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";

export function AboutPage() {
  return (
    <motion.div
      className="mx-auto mb-96 mt-20 flex w-full max-w-4xl flex-col items-center gap-y-12 p-8"
      initial="disappear"
      animate="appear"
      variants={showAndHide}
    >
      <div className="flex flex-wrap items-center gap-12">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          className="w-60 rounded-lg shadow-md md:w-80"
        />
        <section className="flex flex-col gap-y-4">
          <h1 className="text-xl font-semibold md:text-xl">
            Hi There <span>&#128075;</span>
          </h1>
          <h2 className="text-base font-normal md:text-lg">I'm Eric.</h2>
          <ul className="list-inside list-disc space-y-6 text-lg font-normal">
            <li>Full-Stack Software Engineer</li>
            <li>Web Development</li>
            <li>Game Development</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
