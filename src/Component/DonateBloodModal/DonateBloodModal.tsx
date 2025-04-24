import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

interface donateBloodModalProps {
    singleData: {
        _id: string,
        bloodGroup: string,
        patientName: string,
        bloodBag: string,
        time: string,
        location: string,
        phone: string
    },
    closeModal: () => void
}

const DonateBloodModal: React.FC<donateBloodModalProps> = ({
    singleData,
    closeModal
}) => {

    const axiosPublic = useAxiosPublic()
    const auth = useAuth();
    const navigate = useNavigate();
    const modalBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (modalBtnRef.current) {
            modalBtnRef.current.click();
        }
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [closeModal]);


    if (!auth) {
        return null
    }
    const { user } = auth;

    if (!auth || !user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }

    const handleBloodDonate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        // const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        // const phone = formData.get("phone") as string;
        const bloodBag = formData.get("donateBag") as string;
        const donateTime = formData.get("donateTime") as string;
        const bloodreqId = singleData._id;
        const donateData = { email, bloodreqId, bloodBag, date: donateTime }


        console.log(donateData)
        axiosPublic.post('/donateonbloodreq', donateData)
            .then(res => {
                closeModal();
                if (res.data) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulation!!!",
                        text: "We sent an email to the patient.",
                    });
                }
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                console.log(error.response.data.message === 'User did not register as a donor')
                if (error) {
                    closeModal();
                    if (error.response.data.message === 'User did not register as a donor') {
                    Swal.fire({
                            icon: "error",
                            title: "You have to register as a donor.",
                            text: "You are not register as a donor!",
                        });
                        navigate("/donorRegistration")
                    }

                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Something Went Wrong!",
                        });
                    }
                }
                closeModal();
            })
        e.currentTarget.reset();
    }


    return (
        <div>
            <button className="btn btnStyle hidden"
                ref={modalBtnRef}
                onClick={() => {
                    const modal = document.getElementById('my_modal_3') as HTMLDialogElement || null;
                    if (modal) {
                        modal.showModal()
                    }
                }}>Donate Blood</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                        Donate Blood
                    </h3>
                    <form onSubmit={handleBloodDonate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                name="name"
                                required
                                defaultValue={user?.displayName || ""}
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                defaultValue={user?.email || ""}
                                name="email"
                                required
                                readOnly
                                type="email"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                required
                                name="phone"
                                type="text"
                                placeholder="+880 18XXXXXXXX"
                                className="input input-bordered w-full"
                            />{" "}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number of Donate Bags</span>
                            </label>
                            <input
                                required
                                name="donateBag"
                                type="number"
                                className="input input-bordered w-full"
                                min={1}
                                defaultValue={1}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donation Date</span>
                            </label>
                            <input
                                readOnly
                                required
                                name="donateTime"
                                type="date"
                                className="input input-bordered w-full"
                                defaultValue={singleData.time}
                            />
                        </div>
                        <button className="w-full mt-5 btn btnStyle">
                            Donate
                        </button>
                    </form>
                    <form method="dialog">
                        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default DonateBloodModal;