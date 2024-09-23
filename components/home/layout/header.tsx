"use client";
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IoMdCloseCircle } from 'react-icons/io';
import Link from 'next/link';

const links = [
  { name: 'Home', dropdownItems: [{ name: 'Home 1', href: '/' }, { name: 'Home 2', href: '/home2' }, { name: 'Home 3', href: '/home3' }] },
  { name: 'About', path: '/about' },
  { name: 'Service', path: '/service' },
  { name: 'Shop', path: '/shop' },
  { name: 'Blogs', path: '/blog' },
  { name: 'More', dropdownItems: [{ name: 'Contact', href: '/contact' }, { name: 'FAQ', href: '/faq' }, { name: 'Price Plan', href: '/allprice' }] },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItem = links.find(link => link.path === currentPath || (link.dropdownItems && link.dropdownItems.some(item => item.href === currentPath)));
    if (activeItem) {
      setActiveLink(activeItem.name);
    }
  }, [router]);

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
              className={`flex items-center space-x-1 ${activeLink === link.name ? 'text-[#E67529]' : 'text-white'}`}
            >
              <Space>{link.name}<DownOutlined className='text-lg' /></Space>
            </a>
          </Dropdown>
        ) : (
          <a
            href={link.path}
            className={`font-noto text-[18px] font-medium ${activeLink === link.name ? 'text-[#E67529]' : 'text-white'}`}
            onClick={() => handleLinkClick(link.name, link.path)}
          >
            {link.name}
          </a>
        )}
      </div>
    ));

  return (
    <nav className="relative z-10 pt-8 dark:bg-[#2B2B2B]">
      <div className="max-w-[1320px] mx-auto px-4 pb-8 flex items-center justify-between">
        <a href="/" className="lg:mr-80">
          <Image src="/logo.png" height={47} width={298} alt="logoImage" className='w-56 h-12' />
        </a>
        <div className="lg:hidden relative left-10">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <IoMdCloseCircle className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center text-[18px] font-medium text-white space-x-10">
          {renderLinks()}
        </div>
        <div className="ml-16">
          <Link href='/login'>
            <button className="border-2 border-[#E67529] px-4 md:px-8 py-4 rounded-[4px] hover:bg-[#E67529] hover:text-white text-primary transition">
              Join Us
            </button>
          </Link>
        </div>
      </div>
      <div className='h-[1px] w-full relative bottom-[11px] bg-[#D9D9D933]'></div>
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-0 w-full z-50 flex flex-col text-[18px] font-medium px-4 space-y-4 text-white">
          {renderLinks(true)}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
