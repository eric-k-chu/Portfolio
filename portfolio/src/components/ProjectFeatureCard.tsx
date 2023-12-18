import { Feature } from "../lib/constants";
import { motion } from "framer-motion";

type Props = {
  feature: Feature;
};

export function ProjectFeatureCard({ feature }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-4 odd:md:flex-row-reverse even:md:flex-row">
      <motion.div
        className="h-96 w-full md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/*img placeholder*/}
        <img
          className="h-full w-full rounded-md object-cover shadow-sm"
          src={feature.imgSrc}
        />
      </motion.div>
      <motion.div
        className="flex w-full flex-col gap-y-4 p-2 md:w-1/2 md:gap-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-base font-semibold italic md:text-xl">
          {feature.feat}
        </h2>
        <h3 className="text-sm font-light md:text-lg">{feature.desc}</h3>
      </motion.div>
    </div>
  );
}
