// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-card-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in building 
              scalable web applications using modern technologies. My journey in software development started with a curiosity 
              to solve real-world problems through code.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With strong proficiency in <span className="text-secondary font-semibold">React.js, Django, Python, and MongoDB</span>, 
              I've successfully delivered multiple projects that focus on user experience and performance. I believe in writing 
              clean, maintainable code and continuously learning new technologies to stay ahead in this fast-paced industry.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or mentoring aspiring developers. I'm passionate about creating solutions that make a difference and 
              solving complex real-world problems through innovative approaches.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { value: '10+', label: 'Projects Completed' },
                { value: '2+', label: 'Years Experience' },
                { value: '15+', label: 'Happy Clients' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;