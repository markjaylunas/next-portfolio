import React from 'react';

interface SkillProps {
    logo: React.ReactNode | string;
    name: string;
    exp: string;
}

const Skill: React.FC<SkillProps> = ({ logo, name, exp }) => {
    return (
        <div className="flex   justify-start items-center  py-1 gap-1 laptop:px-8 tablet:px-3 mobileMD:px-8 px-3 w-14">
            <span className="hover:animate-pulse hover:scale-105 hover:drop-shadow-md flex items-center pr-1 text-3xl text-main-teal-light">
                {logo}
            </span>
            <p className="flex flex-col items-start justify-center">
                <span className="text-base font-medium">{name}</span>
                <span className="text-xs text-gray-500">{exp}</span>
            </p>
        </div>
    );
};

export default Skill;
