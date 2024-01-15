import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";

export function AboutPage() {
  return (
    <motion.div
      className="mx-auto mb-96 mt-10 flex w-full max-w-4xl flex-col items-center gap-y-12 p-8"
      initial="disappear"
      animate="appear"
      variants={showAndHide}
    >
      <div className="flex h-[20%] w-full flex-col items-center justify-center md:h-96 md:flex-row md:items-center md:justify-start">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          className="h-full max-h-[452px] rounded-lg rounded-b-none md:rounded-l-lg md:rounded-r-none"
        />
        <section className="hidden h-full w-full flex-col justify-center gap-y-4 rounded-r-lg border-y border-r border-gray-300 pl-8 shadow-sm shadow-light-s dark:border-cm-gray md:flex">
          <h1 className="text-l font-semibold">
            Hi There <span>&#128075;</span>
          </h1>
          <h2 className="text-lg font-normal">I'm Eric.</h2>
          <ul className="list-inside list-disc space-y-6 text-lg font-normal">
            <li>Full-Stack Software Engineer</li>
            <li>Web Development</li>
            <li>Game Development</li>
          </ul>
        </section>
        <section className="flex w-full max-w-[339px] flex-col rounded-b-lg border-x border-b border-gray-300 p-6 shadow-sm shadow-light-s dark:border-cm-gray md:hidden">
          <h1 className="text-sm font-semibold">
            Hi There <span>&#128075;</span>
          </h1>
          <h2 className="text-xs font-normal">I'm Eric.</h2>
          <ul className="list-inside list-disc space-y-6 text-xs font-normal">
            <li>Full-Stack Software Engineer</li>
            <li>Web Development</li>
            <li>Game Development</li>
          </ul>
        </section>
      </div>

      <div className="flex w-full max-w-[339px] flex-col md:max-w-[100%]">
        <h2 className="mb-4 w-full text-lg font-semibold leading-3 md:text-xl">
          Experience
        </h2>
        <div className="flex flex-col rounded-lg border border-gray-300 shadow-sm shadow-light-s dark:border-cm-gray">
          <div className="-m-1.5 overflow-x-auto">
            <div className="inline-block min-w-full p-8 align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-cm-gray">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        POSITION
                      </th>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        COMPANY
                      </th>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        START
                      </th>
                      <th className="px-6 py-3 text-end text-sm font-semibold text-cm-gray">
                        END
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 dark:divide-cm-gray">
                    <tr className="transition-colors hover:bg-dark-1/10 dark:hover:bg-dark-2">
                      <td className="px-6 py-4 text-sm font-medium">
                        Teaching Assistant
                      </td>
                      <td className="px-6 py-4 text-sm">Learning Fuze</td>
                      <td className="px-6 py-4 text-sm">08 / 2023</td>
                      <td className="px-6 py-4 text-end text-sm">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[339px] flex-col md:max-w-[100%]">
        <h2 className="mb-4 w-full text-lg font-semibold leading-3 md:text-xl">
          Education
        </h2>
        <div className="flex flex-col rounded-lg border border-gray-300 shadow-sm shadow-light-s dark:border-cm-gray">
          <div className="-m-1.5 overflow-x-auto">
            <div className="inline-block min-w-full p-8 align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-cm-gray">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        School / Program
                      </th>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        Degree / Certification
                      </th>
                      <th className="px-6 py-3 text-start text-sm font-semibold text-cm-gray">
                        START
                      </th>
                      <th className="px-6 py-3 text-end text-sm font-semibold text-cm-gray">
                        END
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 dark:divide-cm-gray">
                    <tr className="transition-colors hover:bg-dark-1/10 dark:hover:bg-dark-2">
                      <td className="px-6 py-4 text-sm font-medium dark:text-gray-200">
                        Learning Fuze Bootcamp
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-gray-200">
                        Web Development
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-gray-200">
                        08 / 2023
                      </td>
                      <td className="px-6 py-4 text-end text-sm dark:text-gray-200">
                        12 / 2023
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-dark-1/10 dark:hover:bg-dark-2">
                      <td className="px-6 py-4 text-sm font-medium dark:text-gray-200">
                        California State University - Fullerton
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-gray-200">
                        B.S in Computer Science
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-gray-200">
                        08 / 2018
                      </td>
                      <td className="px-6 py-4 text-end text-sm dark:text-gray-200">
                        08 / 2022
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
