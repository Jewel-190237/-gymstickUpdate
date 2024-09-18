import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';

interface TeamCardProps {
    team?: any;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="relative shadow-md flex flex-col justify-between w-full  sc rounded overflow-hidden transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={team?.image} width={312} height={290} alt="Trainer" className="w-full h-[290px]" />
            <div
                className={`flex p-6 flex-col justify-between transition-colors duration-500 ${isHovered ? 'bg-[#E67529] text-white' : 'bg-white text-black'
                    }`}
            >
                <div className="flex items-center justify-between">

                    <div className="text-lg">
                        <p> {team?.name}</p>
                        <p className="mt-3 text-[16px]">{team?.role}</p>
                    </div>
                    <button className="text-2xl rounded-lg">
                        <GoArrowRight />
                    </button>
                </div>
            </div>

            {isHovered && (
                <div className="transition-colors duration-500  absolute bottom-[115px] flex items-center justify-center rounded-lg">
                    <div className="flex flex-col items-end ml-6 space-y-7 bg-[#E6752933] py-5 px-4 text-white rounded">
                        <Link href="#" className="hover:text-primary transition-colors">
                            <FaXTwitter size={24} />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamCard;