import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    content: "React Hooks provide a powerful way to use state and lifecycle features...",
    image: "https://source.unsplash.com/600x400/?technology",
  },
  {
    id: 2,
    title: "How to Optimize Performance in React",
    content: "Performance optimization is crucial for a seamless user experience...",
    image: "https://source.unsplash.com/600x400/?coding",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="rounded-lg w-full my-4" />
      <p>{blog.content}</p>
    </motion.div>
  );
};

export default BlogDetail;
