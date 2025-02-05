import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Share2, Eye, ThumbsUp } from "lucide-react";
import Header from './Header'; 

const Home = () => (
  <motion.div 
    className="flex items-center justify-center min-h-screen bg-gray-800 p-6" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
  >
    <div className="w-full">
      <Header /> 
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Blogs I'm Following</h2>
        <div className="space-y-6">
          {/* Blog 1 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">The Science of Innovation</h3>
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
              <Link to="/blog/1" target="_blank" className="text-blue-500">Read More</Link>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Artistic Expressions</h3>
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
              <Link to="/blog/2" target="_blank" className="text-blue-500">Read More</Link>
            </div>
          </div>
          
          {/* Blog 3 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Health and Wellness</h3>
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
              <Link to="/blog/3" target="_blank" className="text-blue-500">Read More</Link>
            </div>
          </div>
          
          {/* Blog 4 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Business Trends</h3>
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
              <Link to="/blog/4" target="_blank" className="text-blue-500">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Home;
