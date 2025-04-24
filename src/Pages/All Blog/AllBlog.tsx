import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


interface Blog {
    description: string,
    photo: string,
    title: string,
    _id: string
}
const AllBlog = () => {

    const axiosPublic = useAxiosPublic();

    const { data: Blogs, refetch } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            const res = await axiosPublic.get("/getblogposts")
            return res.data.blogPosts
        }
    })

    console.log({Blogs});

    const handleDeleteBlog = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/deleteblogpost/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.message) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }
    return (
        <div className="bg-white p-5 border rounded-lg ">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Manage Blogs</h2>
                <Link to="/dashboard/createBlog" className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">New Blog</Link>
            </div>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                {/* <th>Donation</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Blogs?.map((blog: Blog) => <tr key={blog?._id}>
                                    <td className="text-lg font-semibold">
                                        <div className="">
                                            <img className="max-w-24 w-full rounded-xl " src={blog?.photo} alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        {blog?.title}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteBlog(blog?._id)} className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"><RiDeleteBin6Line className="text-xl" /> Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;