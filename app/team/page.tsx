'use client'
import React, { useState } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  phone: string;
  education: string[];
  expertise: string[];
}

interface DepartmentMap {
  [key: string]: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

interface TeamMemberDetailProps {
  member: TeamMember;
  onClose: () => void;
}

interface GroupedTeam {
  [key: string]: TeamMember[];
}

// Sample team data structure
const teamData: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Chief Executive Officer",
    department: "Executive",
    image: "/api/placeholder/400/400",
    bio: "20+ years of experience in insurance and risk management...",
    email: "john.smith@company.com",
    linkedin: "https://linkedin.com/in/johnsmith",
    phone: "+1234567890",
    education: [
      "MBA, Harvard Business School",
      "BS in Economics, Yale University"
    ],
    expertise: ["Strategic Planning", "Risk Management", "Digital Transformation"]
  },
];

// Group leaders by department
const departments: DepartmentMap = {
  "Executive": "Leadership Team",
  "Sales": "Sales Team",
  "Technical": "Technical Team",
  "Support": "Support Team"
};

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<string>('all');

  const groupedTeam: GroupedTeam = teamData.reduce((acc: GroupedTeam, member) => {
    const dept = member.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(member);
    return acc;
  }, {});

  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-4 group">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{member.name}</h3>
      <p className="text-gray-600 mb-3 text-center font-medium">{member.position}</p>
      
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => window.location.href = `mailto:${member.email}`}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </button>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <button
          onClick={() => window.location.href = `tel:${member.phone}`}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          aria-label="Phone"
        >
          <Phone className="w-5 h-5" />
        </button>
      </div>

      <button
        onClick={() => setSelectedMember(member)}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
      >
        View Profile
      </button>
    </div>
  );

  const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({ member, onClose }) => (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="mb-6 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          ← Back to Team
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-full overflow-hidden bg-gray-100 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.position}</p>
                <p className="text-gray-500">{member.department}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => window.location.href = `mailto:${member.email}`}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 bg-gray-100 rounded-full"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </button>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 bg-gray-100 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={() => window.location.href = `tel:${member.phone}`}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 bg-gray-100 rounded-full"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">About</h2>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Education</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {member.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-title text-4xl sm:text-5xl md:text-6xl mb-6 text-gold-500 bg-clip-text leading-relaxed pt-3 pb-1">
          Our Team
        </h2>

        {/* Department Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveDepartment('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
              ${activeDepartment === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Teams
          </button>
          {Object.keys(departments).map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
                ${activeDepartment === dept
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {departments[dept]}
            </button>
          ))}
        </div>

        {selectedMember ? (
          <TeamMemberDetail
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        ) : (
          <div className="space-y-16">
            {activeDepartment === 'all' ? (
              Object.entries(groupedTeam).map(([dept, members]) => (
                <div key={dept}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{departments[dept]}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {members.map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupedTeam[activeDepartment]?.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;