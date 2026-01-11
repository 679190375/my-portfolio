#!/bin/bash
# Update technologies in Home.jsx
sed -i "s/\['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'AWS'\]/['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn']/" src/pages/Home.jsx

# Also update the subtitle to mention Data Science
sed -i "s/I build modern web applications with React, Node.js, and cloud technologies./I build data-driven solutions with Python, Machine Learning, and AI technologies./" src/pages/Home.jsx

# Update the "modern web applications" text
sed -i "s/modern web applications/data-driven solutions/g" src/pages/Home.jsx

echo "Technologies updated to Data Science stack!"
