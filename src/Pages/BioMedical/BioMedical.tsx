import { useEffect, useState } from "react";
import Banner from "../../Component/BioMedical/Banner/Banner";
import Services from "../../Component/BioMedical/Services/Services";

const BioMedical = () => {
  const [bannerAnimationComplete, setBannerAnimationComplete] = useState(false);

  useEffect(() => {
    const bannerAnimationDuration = 1500;
    const timer = setTimeout(() => {
      setBannerAnimationComplete(true);
    }, bannerAnimationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Services shouldAnimate={bannerAnimationComplete}></Services>
    </div>
  );
};

export default BioMedical;
