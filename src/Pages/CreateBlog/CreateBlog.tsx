import axios from "axios";
import { Field, Form, Formik } from "formik";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialValue = {
  title: "",
  description: "",
  photo: "",
};

const CreateBlog: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  //   const navigate = useNavigate();

  const handleSubmit = async (
    values: typeof initialValue,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { title, description } = values;

    const fileInput = document.getElementById("photo") as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const photo = fileInput.files[0];

    const img = new FormData();
    img.append("image", photo);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const imgUploadResponse = await axios.post(image_hosting_api, img);

    const imageUrl = imgUploadResponse.data.data.url;

    const blog = {
      title,
      description,
      photo: imageUrl,
    };

    axiosPublic.post("/createblogpost", blog).then((res) => {
      if (res.data.message) {
        Swal.fire({
          title: "Good job!",
          text: "Blog is Created",
          icon: "success",
        });
        resetForm();
        // navigate("/blogs");
      }
    });
  };

  return (
    <div className="bg-white p-5 border rounded-lg">
      <h2 className="text-3xl font-bold text-center py-4">Create New Blog</h2>

      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className="max-w-3xl mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Blog Title
            </label>
            <Field
              type="text"
              name="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Blog Title"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <Field
              name="description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              rows={5}
              placeholder="Blog Description"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium dark:text-white">
              Photo
            </label>
            <Field
              type="file"
              id="photo"
              name="photo"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"
          >
            Create Blog
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlog;
