import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Python/R Programming', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'SQL & Databases', level: 85 },
    { name: 'Data Visualization', level: 88 },
    { name: 'Statistical Analysis', level: 92 },
    { name: 'Deep Learning', level: 80 },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      role: 'Data Scientist',
      company: 'Tech Analytics Inc.',
      description: 'Building predictive models and AI solutions for business intelligence.'
    },
    {
      year: '2025 - 2026',
      role: 'Machine Learning Engineer',
      company: 'Data Insights Corp',
      description: 'Developed ML pipelines and deployed models to production.'
    },
    {
      year: '2025 - 2026',
      role: 'Data Analyst',
      company: 'Business Intelligence Ltd',
      description: 'Analyzed datasets and created data visualizations for stakeholders.'
    },
  ];

  const education = [
    {
      year: '2023 - 2025',
      degree: 'M.Sc. Data Science',
      school: 'AIMS University',
      description: 'Specialized in machine learning, statistics, and big data technologies.'
    },
    {
      year: '2020 - 2023',
      degree: 'Mathematics $ Computer Science B.Sc.',
      school: 'Bamenda University',
      description: 'Focused on algorithms, data structures, and software engineering.'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About Me
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              I'm a passionate Data Scientist with over 3 years of experience building data-driven solutions. 
              I love turning complex data into actionable insights and predictive models.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl mb-12 max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                "When I'm not analyzing data, you can find me exploring new ML algorithms, 
                contributing to open-source data projects, or participating in Kaggle competitions."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
              My Skills
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-4" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center md:text-left">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600 rounded-full" />
                    <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-blue-600" />
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">{exp.company}</div>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center md:text-left">
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 bg-green-600 rounded-full" />
                    <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-green-600" />
                    <div className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">{edu.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">{edu.school}</div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
