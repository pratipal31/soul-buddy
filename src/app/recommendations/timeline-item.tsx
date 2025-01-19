import React from 'react';

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, description, icon }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-red-50 transition-colors duration-300">
    <div className="flex-shrink-0 w-20 text-red-800 font-medium">{time}</div>
    <div className="flex-shrink-0 p-2 rounded-lg bg-red-50">{icon}</div>
    <div>
      <h3 className="font-semibold text-red-900 mb-1">{title}</h3>
      <p className="text-red-700">{description}</p>
    </div>
  </div>
);

