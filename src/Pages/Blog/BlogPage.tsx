import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  description: string;
  photo: string;
}

const BlogPage: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosPublic.get("/getblogposts");
        setBlogs(response.data.blogPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [axiosPublic]);

  console.log({blogs});
  
  return (
    <div className="container mx-auto mt-10 my-16">
      <div className="px-5">
        <h2 className="text-4xl font-bold mb-8 text-center">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={blog.photo}
                alt={blog.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">
                {blog.description.slice(0, 50)}
              </p>
              <Link
                to={`/blog/${blog._id}`}
                className="block text-blue-500 hover:underline text-sm"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
