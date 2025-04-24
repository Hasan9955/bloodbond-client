import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h3 className="font-bold bg-[#850000] text-center text-white py-5 text-3xl mb-5">
          Our Mission
        </h3>
        <div className="text-justify">
          <p className="text-lg mb-8 font-semibold">
            BloodBond is dedicated to saving lives through voluntary blood
            donation. Our mission is to bridge the gap between blood supply and
            demand, ensuring that every patient in need receives timely and
            quality care. We strive to cultivate a culture of compassion and
            community, where individuals unite to contribute to a safer and
            healthier society. Join us in our mission to make a lasting impact,
            one drop at a time. Your support not only saves lives but also
            inspires a movement towards a more caring and connected world.
          </p>
          <p className="text-lg mb-8 font-semibold">
            Join us in our mission to save lives through blood donation. Every
            drop counts, and your contribution can make a significant impact.
            Together, we can create a healthier and safer community.
          </p>
        </div>
        <Link to="/donate">
          <button className="btn btn-outline px-4 py-2 bg-[#DC0000] text-white">
            Donate Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Mission;
