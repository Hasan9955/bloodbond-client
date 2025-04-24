import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[url('https://i.ibb.co/K0Qpzgw/Executing-plan-of-care-q5ky1iueec0wzgcq3p3oef6l8hh0oyqd3malnjjvx4.jpg')] bg-no-repeat bg-cover bg-center"
    >
      <div className="bg-black bg-opacity-60">
        <div className="container mx-auto py-28 flex flex-col items-center">
          <div className="space-y-6 lg:space-y-4 mx-4">
            <motion.h2
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                delay: 2,
                stiffness: 80,
                duration: 0.4,
                type: "spring",
              }}
              className="font-medium text-2xl text-white text-center lg:text-left"
            >
              Biomedical Services for a Healthier Tomorrow
            </motion.h2>
            <motion.h1
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                delay: 1.5,
                stiffness: 80,
                duration: 0.4,
                type: "spring",
              }}
              className="font-bold text-6xl text-white text-center lg:text-left"
            >
              Take Control of Your Health
            </motion.h1>
            <motion.h3
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                stiffness: 80,
                duration: 0.4,
                type: "spring",
              }}
              className="text-lg text-white max-w-[720px] text-center lg:text-left mx-3 lg:mx-0"
            >
              Be a healthcare hero! Your involvement in our biomedical services
              is a lifeline to breakthroughs. Join us, be a part of something
              extraordinary, and help us reach new heights in medical
              innovation.
            </motion.h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
