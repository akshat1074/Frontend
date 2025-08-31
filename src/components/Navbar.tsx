'use client';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggleButton } from './ui/theme-toggle-button';
import { Filter, Search } from 'lucide-react';

const NavItems = [
    { title: 'Home', href: '/home' },
    { title: 'Languages', href: '/languages' },
    { title: 'Tutors', href: '/tutors' },
    { title: 'Community', href: '/community' },
    { title: 'Chat with tutor', href: '/chat-with-tutor' },
];

export default function Navbar() {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center h-16">
            <div className="flex items-center space-x-2 mr-64">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">e</span>
              </div>
              <span className="text-xl font-bold text-gray-900">d3hub</span>
            </div>
            <nav className="hidden md:flex space-x-6 mr-64">
              <a href="/home" className="text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Languages</a>
              <a href="/tutors" className="text-gray-600 hover:text-gray-900">Tutors</a>
              <a href="/community" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Chat with tutor</a>
              
            <Search className="w-5 h-5 text-gray-600 "/>
            <Filter className="w-5 h-5 text-gray-600"/>
          
            </nav>
           
          </div>
        </div>
    );
}