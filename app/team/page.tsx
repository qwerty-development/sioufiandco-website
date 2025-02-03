'use client'
import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Nicolas Sioufi",
    position: "Chairman and managing partner",
    image: "/team/nicolassioufi.png",
  },
  {
    id: 2,
    name: "Linda Sioufi Hayek",
    position: "General manager and managing partner",
    image: "/team/lindasioufi.png",
  },
  {
    id: 3,
    name: "Gregoire Ahmarani",
    position: "Head of technical department",
    image: "/team/gregoire.png",
  },
  {
    id: 4,
    name: "Joelle Abi Mansour",
    position: "Manager, customer care and colletion department",
    image: "/team/joelle.png",
  },
  {
    id: 5,
    name: "Carla Ghanem",
    position: "Manager, customer care and medical claims department",
    image: "/team/carla.png",
  },
  {
    id: 6,
    name: "Ibrahim Chehade",
    position: "Customer care and claims department",
    image: "/team/ibrahim.png",
  },
  {
    id: 7,
    name: "Jihanne Kassen",
    position: "Account and executive medical, claims and accounting",
    image: "/team/jihane.png",
  },
  {
    id: 9,
    name: "Mohammed Salloum",
    position: "Courrier",
    image: "/team/mohammedsalloum.png",
  },





];

const TeamSection: React.FC = () => {
  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="relative mb-6">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-[#1B365D]/50 to-[#1B365D] ring-4 ring-white/10 dark:ring-white/5 shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent">
          {member.name}
        </h3>
        <p className="text-sm md:text-base text-text-secondary dark:text-text-muted font-medium px-4 leading-relaxed">
          {member.position}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-title text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent leading-relaxed pt-3 pb-1">
            Our Team
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-text-secondary dark:text-text-muted">
            Meet the dedicated professionals behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;