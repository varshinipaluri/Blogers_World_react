import { useParams } from "react-router-dom";
import { Eye, ThumbsUp, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  const blogDetails = {
    1: {
      title: "The Science of Innovation",
      content: "A deep dive into the latest technological advancements and their impact on our daily lives. In this article, we will explore various innovations...",
      image: "https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/3c181c44-eb52-4aca-bd54-8cb9b294e2a5/image/image1_0.jpg?Expires=1738775657&Signature=XibX7L4BzrKumfhriqqjmXDiLTirmlHm2CLExgptUVpxQ6v~5l89CPUe3BffKByCI-o9Xuxt5Kv6Q1dJQVReprrxx-GeOHiLLnDOno-m7l9T2t15rdsrT~-~XoiJ2ID9szPJOJnRhNVL3tFbdywOn-i-kF3BQ56G~PrjMZiWMkPrzMu0oKtjrUHPoVaaiU~HOn~OfAEaMKLfxt6iuBh19xdApK5DwbQADk~H0fAaJ7bzGvg3p7UBfS31zLPNl~gMlaKApGqYpUOKyyevAwb-MhpefwCIyGQ81x9IIJdmXvE78lQ-6EdEgV0NK5iMWcJxbp8-2xW5ACd7-fzJt2r~-g__&Key-Pair-Id=K3RDDB1TZ8BHT8",
      views: 250,
      likes: 150,
      extraContent: "This section covers in-depth how these technological innovations will change our future, focusing on advancements in AI, robotics, and the Internet of Things (IoT)."
    },
    2: {
      title: "Artistic Expressions",
      content: "Exploring the beauty of creative arts and how they shape our culture and society. Art has always been a mirror of our civilization's evolution...",
      image: "https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/97d7d550-5c5a-4663-a947-adffc049467b/image/image0_0.jpg?Expires=1738776101&Signature=IM4kopb~YXaZrBzrB39lskZPDnvFBtQxYdYDK1sbtVPYi9dF3yVt7Fdyo4coRKwdLnI4IYd-zTZ98fL~BNKNVdgcvzEFze~ciMUPtoYMPPLIdLbgvFuCIjjygNJdV~UrsSgkwaYYsDK9Tasyolo7bappzC2bQ9il~G8CNMRP3XBq7IYo-DWKToGNr8pZySM~GGaBdtJwC4P43Bi8fnEXyDC9MIwOMtXWH4DLtwNbwc1M82cnNHIVOFs6N5ZykufkYbp0ZpITNbGLtWI7vjyo7JPv5yxg5~Mzj33pgMBByAE14WZA3vkIO-Dlfr0qqkyBTSaS51LIfrw6yF615VkRLA__&Key-Pair-Id=K3RDDB1TZ8BHT8",
      views: 320,
      likes: 200,
      extraContent: "In this section, we dive deeper into specific art forms like painting, sculpture, and modern digital arts that are influencing today's culture."
    },
    3: {
      title: "Health and Wellness",
      content: "Tips on maintaining physical and mental health through mindful living and exercise. It's important to strike a balance between body and mind...",
      image: "https://api.deepai.org/job-view-file/10aabdba-85f2-4280-9615-354c6b2be787/outputs/output.jpg",
      views: 410,
      likes: 230,
      extraContent: "Learn about the various exercises and mental health techniques that can help you achieve a better work-life balance and holistic well-being."
    },
    4: {
      title: "Business Trends",
      content: "Insights into the latest trends in the business world and tips for aspiring entrepreneurs. The business world is constantly evolving with new trends...",
      image: "https://api.deepai.org/job-view-file/cf551df3-faa4-452b-8f59-de3864dba941/outputs/output.jpg",
      views: 320,
      likes: 180,
      extraContent: "This section will cover important trends like sustainability in business, remote work, and the rise of social entrepreneurship."
    }
  };

  const blog = blogDetails[id];

  if (!blog) return <div>Blog not found</div>;

  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
        <img src={blog.image} alt={blog.title} className="rounded-lg mb-4 h-auto object-cover w-40" />
        <p className="text-gray-600 mb-4">{blog.content}</p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Additional Insights</h3>
        <p className="text-gray-600">{blog.extraContent}</p>
        
        <div className="flex justify-between mt-6">
          <div className="flex space-x-2">
            <button className="flex items-center text-gray-600">
              <Eye size={16} className="mr-1" /> {blog.views}
            </button>
            <button className="flex items-center text-gray-600">
              <ThumbsUp size={16} className="mr-1" /> {blog.likes}
            </button>
            <button className="flex items-center text-gray-600">
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Related Articles</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li><a href="/blog/2" className="text-blue-500">Exploring the Role of Art in Society</a></li>
          <li><a href="/blog/3" className="text-blue-500">Tips for Improving Your Mental Health</a></li>
          <li><a href="/blog/4" className="text-blue-500">Current Business Trends to Watch</a></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
