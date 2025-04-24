import { Link } from "react-router-dom";
import img from "../../assets/404 page.jpg"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 md:my-0 mb-10">
            <div className="relative">
                <img className="rounded-xl" src={img} alt="" />
                <Link to='/'><button className="btn bg-[#DC0000] border-none text-white w-full  absolute  md:rounded-b-xl rounded-none md:-mt-2 btn-sm md:btn-md">Go Home</button></Link> 
            </div>
        </div> 
    );
};

export default ErrorPage;