"use client";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import { IoMdCloseCircle } from 'react-icons/io';
import { FiArrowDown } from 'react-icons/fi';
import Button from '../../common/button';
import Link from 'next/link';
const links = [
  { name: 'Home', dropdownItems: [{ name: 'Home 1', href: '/' }, { name: 'Home 2', href: '/home2' }] },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'More', dropdownItems: [{ name: 'More 1', href: '/home1' }, { name: 'More 2', href: '/home2' }] },
];
const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLinkClick = (linkName: string, path?: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
    if (path) {
      router.push(path);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const renderLinks = (isMobile: boolean = false) =>
    links.map((link, index) => (
      <div key={index}>
        {link.dropdownItems ? (
          <Dropdown
            menu={{ items: link.dropdownItems.map(({ name, href }) => ({ label: <a href={href}>{name}</a>, key: name })) }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className={`flex items-center space-x-1 ${activeLink === link.name ? 'text-primary' : 'text-white'}`}
            >
              <Space>{link.name}<FiArrowDown /></Space>
            </a>
          </Dropdown>
        ) : (
          <a
            href={link.path}
            className={`font-noto text-[18px] font-medium ${activeLink === link.name ? 'text-primary' : 'text-white'}`}
            onClick={() => handleLinkClick(link.name, link.path)}
          >
            {link.name}
          </a>
        )}
      </div>
    ));

  return (
    <nav className="border-b border-white/20 absolute z-50 w-full  ">
      <div className="container lg:py-8 py-4 flex items-center justify-between gap-4 ">
        <Link href="/" >
          <Image src="/logo.png" height={200} width={300} alt="logoImage" className='h-[47px] w-full   ' />
        </Link>
        <div className='flex items-center gap-20'>
          <div className='flex items-center gap-5'>
            <div className="lg:hidden">
              <Button className=' text-white'>Join Us</Button>
            </div>
            <div className="lg:hidden flex">
              <button onClick={toggleMenu} className=" text-white focus:outline-none">
                {isOpen ? <IoMdCloseCircle size={25} /> : <GiHamburgerMenu size={25} />}
              </button>
            </div>
            <div className="hidden lg:flex items-center text-[18px] font-medium text-white space-x-10">
              {renderLinks()}
            </div>
          </div>
          <div className="lg:block hidden">
            <Button className=' text-white'>Join Us</Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full flex flex-col text-[18px] font-medium bg-textMain px-4 space-y-4 text-white pt-10 pb-5">
          {renderLinks(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;