import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, Eye, ThumbsUp } from 'lucide-react';
import Header from './Header';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);  

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-gray-800 p-6" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="w-full">
        <Header />
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md w-full space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Blogs I'm Following</h2>
          <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg">
             <h3 className="text-lg font-semibold text-gray-800">The Science of Innovation</h3>
             <img src="https://cdn.gencraft.com/prod/user/ba31788e-4880-47e5-8de5-37acc97e6613/3c181c44-eb52-4aca-bd54-8cb9b294e2a5/image/image1_0.jpg?Expires=1738775657&Signature=XibX7L4BzrKumfhriqqjmXDiLTirmlHm2CLExgptUVpxQ6v~5l89CPUe3BffKByCI-o9Xuxt5Kv6Q1dJQVReprrxx-GeOHiLLnDOno-m7l9T2t15rdsrT~-~XoiJ2ID9szPJOJnRhNVL3tFbdywOn-i-kF3BQ56G~PrjMZiWMkPrzMu0oKtjrUHPoVaaiU~HOn~OfAEaMKLfxt6iuBh19xdApK5DwbQADk~H0fAaJ7bzGvg3p7UBfS31zLPNl~gMlaKApGqYpUOKyyevAwb-MhpefwCIyGQ81x9IIJdmXvE78lQ-6EdEgV0NK5iMWcJxbp8-2xW5ACd7-fzJt2r~-g__&Key-Pair-Id=K3RDDB1TZ8BHT8" className="w-40 h-auto"></img>
             <p className="text-gray-600">A deep dive into the latest technological advancements and their impact on our daily lives.</p>
             <div className="flex justify-between mt-4">
               <div className="flex space-x-2">
                 <button className="flex items-center text-gray-600">
                   <Eye size={16} className="mr-1" /> 250
                 </button>
                 <button className="flex items-center text-gray-600">
                   <ThumbsUp size={16} className="mr-1" /> 150
                 </button>
                 <button className="flex items-center text-gray-600">
                  <Share2 size={16} />
                 </button>
               </div>
               <Link to="/blog/1"  className="text-blue-500">Read More</Link>
             </div>
           </div>
           <div className="bg-gray-100 p-4 rounded-lg">
             <h3 className="text-lg font-semibold text-gray-800">Artistic Expressions</h3>
             <img src="https://th.bing.com/th/id/OIP.PEuhfi_1blF7TZGBXIaRagHaJL?w=146&h=181&c=7&r=0&o=5&pid=1.7" className="w-40 h-40"></img>
             <p className="text-gray-600">Exploring the beauty of creative arts and how they shape our culture and society.</p>
             <div className="flex justify-between mt-4">
               <div className="flex space-x-2">
                 <button className="flex items-center text-gray-600">
                   <Eye size={16} className="mr-1" /> 320
                 </button>
                 <button className="flex items-center text-gray-600">
                   <ThumbsUp size={16} className="mr-1" /> 200
                 </button>
                 <button className="flex items-center text-gray-600">
                   <Share2 size={16} />
                 </button>
               </div>
               <Link to="/blog/2"  className="text-blue-500">Read More</Link>
             </div>
           </div>
           <div className="bg-gray-100 p-4 rounded-lg">
             <h3 className="text-lg font-semibold text-gray-800">Health and Wellness</h3>
             <img src="https://th.bing.com/th/id/OIP.PEuLhZHikHJl7NzRMEoVygHaE7?w=254&h=180&c=7&r=0&o=5&pid=1.7" className="w-40 h-40"></img>
             <p className="text-gray-600">Tips on maintaining physical and mental health through mindful living and exercise.</p>
             <div className="flex justify-between mt-4">
               <div className="flex space-x-2">
                 <button className="flex items-center text-gray-600">
                   <Eye size={16} className="mr-1" /> 410
                 </button>
                 <button className="flex items-center text-gray-600">
                   <ThumbsUp size={16} className="mr-1" /> 230
                 </button>
                 <button className="flex items-center text-gray-600">
                   <Share2 size={16} />
                 </button>
               </div>
               <Link to="/blog/3"  className="text-blue-500">Read More</Link>
             </div>
           </div>
          <div className="bg-gray-100 p-4 rounded-lg">
             <h3 className="text-lg font-semibold text-gray-800">Business Trends</h3>
             <img src="https://th.bing.com/th/id/OIP.-T0ID-UJy_dBKiy-cEzyKwHaFR?w=265&h=189&c=7&r=0&o=5&pid=1.7" className="w-40 h-40"></img>
            <p className="text-gray-600">Insights into the latest trends in the business world and tips for aspiring entrepreneurs.</p>
             <div className="flex justify-between mt-4">
               <div className="flex space-x-2">
                 <button className="flex items-center text-gray-600">
                   <Eye size={16} className="mr-1" /> 320
                 </button>
                <button className="flex items-center text-gray-600">
                   <ThumbsUp size={16} className="mr-1" /> 180
                 </button>
                 <button className="flex items-center text-gray-600">
                   <Share2 size={16} />
                 </button>
               </div>
               <Link to="/blog/4"  className=" text-blue-500">Read More</Link>
            </div> 
           </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;



