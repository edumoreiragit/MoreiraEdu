
import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-semibold text-gray-800">
          {experience.company}
          {experience.location && <span className="text-base font-normal text-gray-500 ml-2">{experience.location}</span>}
        </h3>
        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{experience.period}</span>
      </div>
      <p className="text-lg font-medium text-teal-700 mt-1">{experience.title}</p>
      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
