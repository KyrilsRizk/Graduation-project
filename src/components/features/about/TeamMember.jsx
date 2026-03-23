import React from 'react';
import { Users } from 'lucide-react';

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-beige-dark border-4 border-gold flex items-center justify-center mb-4">
        <Users className="w-16 h-16 text-gold" />
      </div>
      <h3 className="text-slate text-lg font-bold mb-1">{member.name}</h3>
      <p className="text-gold font-medium mb-2">{member.role}</p>
      <p className="text-textGray text-sm">{member.description}</p>
    </div>
  );
};

export default TeamMember;
