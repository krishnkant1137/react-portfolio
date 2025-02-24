import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
<img
  src="/krishna.4.png"
  alt="krishnkant malviya"
  className="w-full h-full object-cover rounded-2xl transform scale-90"
/>


          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Krishnkant Malviya, a passionate MERN Stack Developer.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            I enjoy building interactive and scalable web applications using modern technologies like React, Node.js, and MongoDB. I recently completed an internship where I worked on a CRM project, and I’m always eager to learn and improve. Looking forward to growing as a developer and contributing to impactful projects!
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2.5 Monsths</h3>
                <p className="text-gray-600">Fresher</p>
              </div>
              {/* <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">125K+</h3>
                <p className="text-gray-600">YouTube Subscribers</p>
              </div> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
