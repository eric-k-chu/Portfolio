import { Feature } from "../lib/constants";
import { motion } from "framer-motion";

type Props = {
  feature: Feature;
};

export function ProjectFeatureCard({ feature }: Props) {
  return (
    <div className="flex w-full items-center py-4">
      <motion.div
        className="h-96 w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/*img placeholder*/}
        <motion.div className="h-full w-full rounded-md bg-black shadow-sm" />
      </motion.div>
      <motion.div
        className="flex w-1/2 flex-col gap-y-8 pl-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="font-semibold italic">{feature.feat}</h2>
        <h3 className="font-light">{feature.desc}</h3>
      </motion.div>
    </div>
  );
}
