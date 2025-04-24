/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface District {
    id: string;
    division_id: string;
    name: string;
    bn_name: string;
    lat: string;
    lon: string;
    url: string;
}

interface Upazila {
    id: string;
    district_id: string;
    name: string;
    bn_name: string;
    url: string;
}
interface FinalUpazila {
    id: string;
    district_id: string;
    name: string;
    bn_name: string;
    url: string;
}

const DonorRegistration = () => {



    const [dist, setDist] = useState<District[]>([]);
    const [totalUpa, setTotalUpa] = useState<Upazila[]>([]);
    const [upazilas, setUpazilas] = useState<FinalUpazila[]>([]);
    const navigate = useNavigate();



    useEffect(() => {
        fetch('/District.json')
            .then(res => res.json())
            .then(data => setDist(data))
            .catch(error => console.error('Error fetching District data:', error));

        fetch('/Upazila.json')
            .then(res => res.json())
            .then(data => setTotalUpa(data))
            .catch(error => console.error('Error fetching Upazila data:', error));

    }, [])



    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const auth = useAuth();
    if (!auth) {
        return;
    }

    const { user } = auth;

    const onSubmit = (data: any) => {
        const { email, phone, lastDonationDate, upazila, district, bloodGroup, address } = data;

        const donorInfo = {
            email,
            phone,
            bloodGroup,
            district,
            upazila,
            address,
            lastDonationDate,
        }
        console.log(donorInfo)
        axios.post('https://bloodbond-server.vercel.app/donorcreate', donorInfo)
            .then((res) => {
                console.log(res)
                if (res.status === 201) {
                    Swal.fire({
                        title: "Registration Successful",
                        icon: "success",
                    });
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error(error)
                Swal.fire({
                    title: 'This is an Error !!!',
                    icon: "error",
                });
            });


    }

    const handleDistrict = (e: any) => {
        const disName = e.target.value;
        const disId: any = dist.find(dis => dis.name === disName)
        const getUpa = totalUpa.filter(upa => upa.district_id === disId.id)
        setUpazilas(getUpa)


    }

    return (
        <div className="mx-auto container px-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-300 shadow-xl w-full mx-auto lg:w-3/4 p-5 my-5 rounded-lg ">
                <h2 className="text-3xl font-bold text-center">Donor Registration</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Name</span>
                        </label>
                        <input defaultValue={user?.displayName || ''} type="text" className="input input-bordered"
                            {...register("name", { required: true })}

                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Name is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Email</span>
                        </label>
                        <input readOnly defaultValue={user?.email || ''} type="email" className="input input-bordered"
                            {...register("email", { required: true })}
                        />
                        {errors.firstName?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Email is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Phone Number</span>
                        </label>
                        <input placeholder="+880 1XXXXXXXXX" type="number" className="input input-bordered"
                            {...register("phone", { required: true })}

                        />
                        {errors.phone?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Phone number is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Blood Group</span>
                        </label>
                        <select className="select select-bordered text-lg text-black"
                            {...register("bloodGroup", { required: true })}
                        >
                            <option value=""></option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {errors.bloodGroup?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Blood Group is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your District</span>
                        </label>
                        <select className="select select-bordered text-lg text-black"
                            {...register("district", { required: true })}
                            onChange={handleDistrict}
                        >
                            <option value=""></option>
                            {
                                dist?.map(dis => <option key={dis?.id} value={dis?.name}>{dis?.name}</option>)
                            }
                        </select>
                        {errors.district?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* District is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Upazila</span>
                        </label>
                        <select className="select select-bordered text-lg text-black"
                            {...register("upazila", { required: true })}
                        >
                            <option value=""></option>
                            {
                                upazilas?.map(upa => <option key={upa?.id} value={upa?.name}>{upa?.name}</option>)
                            }
                        </select>
                        {errors.upazila?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Upazila is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Address</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("address", { required: true })}

                        />
                        {errors.address?.type === "required" && (
                            <p className="text-red-400 font-bold text-center mt-1" role="alert">* Address is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Last Donation Date</span>
                        </label>
                        <input type="date" className="input input-bordered"
                            {...register("lastDonationDate")}

                        />
                    </div>
                </div>
                <input className="w-full mt-4 btn secondary_bg text-white border-[#ea062b] hover:text-[#ea062b] hover:border-[#ea062b] duration-300" type="submit" value="REGISTER" />
            </form>
        </div>
    );
};

export default DonorRegistration;

