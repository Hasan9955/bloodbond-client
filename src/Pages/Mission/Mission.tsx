import banner from "../../assets/mission bg.jpg"
import img1 from '../../assets/img1111.png'
import img2 from '../../assets/img2.png'

const Mission = () => {
    return (
        <div className="p-5">
            <div className="hero h-[200px] md:h-[350px] bg-fixed" style={{ backgroundImage: `url("${banner}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content ">
                    <div className="max-w-2xl text-center ">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">Mission Vision & Values</h1>
                        <p className="mb-5 text-xl md:text-3xl  text-white">Donate Blood, Share Life!</p>
                    </div>
                </div>

            </div>


            <div className="text-center text-xl my-10 p-8 pt-0">
                {/* our mission */}
                <div className="flex justify-between  flex-col lg:flex-row-reverse text-center lg:text-left gap-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-5 lg:my-10">Our Mission</h1>
                        <p className="text-sm md:text-lg lg:max-w-lg">To enhance the well being of patients in our service area by assuring a reliable and economical supply of the safest possible blood, by providing innovative hemotherapy services, and by promoting research and education programs in transfusion medicine.</p>
                    </div>
                    <img className="rounded-xl shadow-xl" src={img2} alt="" />
                </div>

                {/* our vision */}
                <div className="flex justify-between  flex-col lg:flex-row text-center lg:text-left gap-10 my-10">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 lg:my-10">Our Vision</h1>
                        <p className="text-sm md:text-lg">We envision a world where no one faces a health crisis alone. Through the generosity of donors like you, we aspire to create a ripple effect of positive change, where the simple act of donating blood becomes a catalyst for greater community well-being.</p>
                    </div>
                    <img className="rounded-xl shadow-xl" src={img1} alt="" />
                </div>

                {/* what we value */}
                <h1 className="text-3xl md:text-4xl font-bold my-5 underline">What We Value</h1>
                <ul className="text-start list-decimal">
                    <li><span className="font-bold ">Integrity:</span> We believe we must always be open and honest in each of our personal and corporate relationships. We will adhere to the policies, procedures, regulations and guidelines of all applicable federal, state and local agencies.</li>
                    <li><span className="text-lg font-bold ">Personal Responsibility:</span> We believe we are accountable for the quality of our own work and for the total quality of our center's performance.</li>
                    <li><span className="text-lg font-bold ">Continuous Quality Improvement: </span> We believe we must continually improve our systems and processes in order to maintain the safety of our products and increase the efficiency of our operations.</li>
                    <li><span className="text-lg font-bold ">Teamwork: </span>We believe each person is important to the success of our center. We believe cooperation, temperate behavior and open communication are the appropriate tools for conducting our business.</li>
                    <li><span className="text-lg font-bold ">Fairness: </span>We believe tolerance and respect for individual differences are essential to a caring, sharing workplace.</li>
                    <li><span className="text-lg font-bold ">Innovation:</span>We believe the pursuit of new ideas and new technologies is vital to our success. We encourage creativity and innovation.</li>
                    <li><span className="text-lg font-bold ">Growth:</span>We believe as our center grows, we must provide opportunity for our people to grow personally and professionally.</li>
                </ul>

                {/* How We Measure Our Success */}
                <h1 className="text-2xl md:text-4xl font-bold my-5 underline">How We Measure Our Success</h1>
                <ul className="text-start list-decimal">
                    <li><span className="font-bold ">Self Sufficiency:</span> We will supply the total blood-service needs of the communities we serve. We will be a source of blood, blood components and blood services for other communities in need.</li>
                    <li><span className="text-lg font-bold ">Stability:</span> We will be good stewards of the resources entrusted to us. We will remain financially sound.</li>
                    <li><span className="text-lg font-bold ">Compliance: </span> We will adhere to the policies, procedures, regulations and guidelines of the Code of Federal Regulations, the AABB (formerly the American Association of Blood Banks), the States of Ohio, Kentucky and Indiana, the University of Cincinnati, and other agencies as required.</li>
                    <li><span className="text-lg font-bold ">Safety: </span>We will provide safe and healthful working conditions, equipment and work methods for all our personnel.</li>
                    <li><span className="text-lg font-bold ">Leadership:</span>We will be involved in local, national and international organizations and associations where our talents and abilities can advance the practice of transfusion medicine.</li>
                </ul>


                {/* To Achieve Our Goals */}
                <h1 className="text-3xl md:text-4xl font-bold my-5 underline">To Achieve Our Goals</h1>
                <ul className="text-start list-decimal">
                    <li>We will increase our active donor base and collection levels.</li>
                    <li>We will conduct regular in-service training, evaluation and continuous education programs to improve the professional skill of our personnel.</li>
                    <li>We will manage our resources effectively and responsibly.</li>
                    <li>We will provide outstanding service by exceeding the expectations of our donors, our peers and the hospitals and patients in our region.</li>
                    <li>We will make the work process better through employee-centered continuous improvement teams.</li>
                    <li>We will develop joint ventures, partnerships and other regional alliances that will strengthen our institution's position, protect the safety and quality of our products and maintain cost effectiveness.</li>
                    <li>We will expand and improve our research activities.</li>
                    <li>We will encourage contributions to scholarly literature.</li>
                </ul>
            </div>
        </div>
    );
};

export default Mission;