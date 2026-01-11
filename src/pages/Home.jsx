import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1v94jvqiC5t7O-u-LJqYc7yAokdluHT9i/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'My_Portfolio_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
          animate={{
            background: [
              'linear-gradient(45deg, #eff6ff 0%, #fdf4ff 50%, #f0f9ff 100%)',
              'linear-gradient(135deg, #f0f9ff 0%, #eff6ff 50%, #fdf4ff 100%)',
              'linear-gradient(225deg, #fdf4ff 0%, #f0f9ff 50%, #eff6ff 100%)',
              'linear-gradient(315deg, #eff6ff 0%, #fdf4ff 50%, #f0f9ff 100%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-25"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Hero Section with Picture */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side: Text content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Animated "Hi, I'm Data Scientist" */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 0.8,
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm{' '}
                  <motion.span
                    className="text-blue-600 dark:text-blue-400 inline-block"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                  >
                    Data Scientist
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Moving subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8"
              >
                <motion.p
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
                  animate={{
                    x: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  I build{' '}
                  <motion.span
                    className="font-semibold text-blue-500 inline-block"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    data-driven solutions
                  </motion.span>{' '}
                  with React, Node.js, and cloud technologies.
                </motion.p>
              </motion.div>
              
              {/* Buttons with hover animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/projects">
                    <button className="btn btn-primary w-full sm:w-auto flex items-center gap-2">
                      <span>View My Work</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <button className="btn bg-gray-800 text-white hover:bg-gray-900 w-full sm:w-auto">
                      Get In Touch
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={handleDownloadCV}
                    className="btn border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                    Download CV
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side: Profile Picture */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative"
              >
                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border-4 border-purple-200 dark:border-purple-800 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Profile image */}
                  <img
                    src="/images/pic1.JPG" // CHANGE THIS TO YOUR ACTUAL FILENAME
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%233B82F6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='white' text-anchor='middle' dy='.3em'%3EYour Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    <span className="font-bold">Available for Work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Stats with hover effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '50+', label: 'Projects Completed', color: 'text-blue-600 dark:text-blue-400' },
                { number: '3+', label: 'Years Experience', color: 'text-green-600 dark:text-green-400' },
                { number: '100%', label: 'Client Satisfaction', color: 'text-purple-600 dark:text-purple-400' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20 dark:border-gray-700/50">
                    <motion.div
                      className={`text-4xl font-bold ${stat.color} mb-3`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-lg text-gray-700 dark:text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section with floating effect */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Technologies I Use
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  y: [0, -5, 0]
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center border border-white/20 dark:border-gray-700/50"
              >
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
