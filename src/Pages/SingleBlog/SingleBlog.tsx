import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  photo: string;
}

const SingleBlog: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosPublic.get(`/getblogpost/${id}`);
        setBlog(response.data.blogPost);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [axiosPublic, id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 py-5 px-20">
      <div className=" bg-white p-5 rounded-lg shadow-md">
        <img
          src={blog.photo}
          alt={blog.title}
          className="w-full h-64 object-cover mb-6 rounded-md"
        />
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-6">{blog.description}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default SingleBlog;
