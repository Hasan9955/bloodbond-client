import ServiceCard from "../ServiceCard/ServiceCard";
import useBioMedicalServices from "../../../hooks/useBioMedicalServices";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  _id: string;
  testId: string;
  testName: string;
  testDescription: string;
  testPrice: string;
  imageUrl: string;
}

interface shouldAnimation {
  shouldAnimate: boolean;
}

const Services: React.FC<shouldAnimation> = ({ shouldAnimate }) => {
  const [allBioMedicalServices, isLoading] = useBioMedicalServices();
  console.log({allBioMedicalServices});
  
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.05,
  });

  return (
    <div>
      <motion.div
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto my-24"
      >
        <motion.h3
          ref={ref}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={shouldAnimate && { x: inView ? 0 : "-100vw", opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.1,
            type: "spring",
            stiffness: 120,
          }}
          className="font-bold text-center text-4xl mb-16 mx-4"
        >
          Our Bio-Medical Services
        </motion.h3>

        {/* services */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={shouldAnimate && { opacity: inView ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.4, type: "spring" }}
        >
          {isLoading ? (
            <div className="container mx-auto py-8">
              <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-white"></span>
              </div>
            </div>
          ) : (
            <div>
              {allBioMedicalServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-6 px-2">
                  {allBioMedicalServices?.map((service: Service) => (
                    <ServiceCard
                      key={service._id}
                      service={service}
                    ></ServiceCard>
                  ))}
                </div>
              ) : (
                <div>
                  <h2 className="text-center font-semibold text-white">
                    No Services Available
                  </h2>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
