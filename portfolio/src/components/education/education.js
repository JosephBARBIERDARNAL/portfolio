
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './education.css';
import degrees from '../degree';

const EducationComponent = () => {
    const [selectedDegree, setSelectedDegree] = useState(null);


    const toggleDescription = (id) => {
        if (selectedDegree === id) {
            setSelectedDegree(null);
        } else {
            setSelectedDegree(id);
        }
    };

    return (
        <div className="education-container">
            {degrees.map((degree) => (
                <motion.div
                    key={degree.id}
                    className="degree-card"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }}
                    onClick={() => toggleDescription(degree.id)}
                >
                    <h3>{degree.level} in {degree.field}</h3>
                    <p>{degree.institution}</p>
                    <p>{degree.period}</p>
                    {selectedDegree === degree.id && <p className="degree-description">{degree.description}</p>}
                </motion.div>
            ))}
        </div>
    );
};

export default EducationComponent;