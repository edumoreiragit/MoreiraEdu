
import React from 'react';
import type { Education } from '../types';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{education.degree}</h3>
      <p className="text-md text-gray-600">{education.institution}</p>
      <p className="text-sm text-gray-500">{education.period}</p>
    </div>
  );
};

export default EducationItem;
