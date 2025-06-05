'use client';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggleButton } from './ui/theme-toggle-button';
import { Filter, Search } from 'lucide-react';

const NavItems = [
    { title: 'Home', href: '/' },
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
        <div className="text-black dark:text-white border">
            <motion.nav
                animate={{
                    boxShadow: scrolled ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none',
                    width: scrolled ? '84%' : '90vw',
                    y: scrolled ? 3 : 0,
                    borderRadius: scrolled ? '50px' : '15px',
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className="z-50 fixed inset-x-0 top-2 px-3 pr-5 py-0.5 mx-auto flex items-center justify-between bg-white/5 backdrop-blur-sm"
            >
                <Image
                    src="/logo/ed3hub-dark-1.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="size-13 rounded-full object-cover"
                />
                <div className="flex items-center gap-8">
                    {NavItems.map((item, idx) => (
                        <Link
                            href={item.href}
                            key={idx}
                            className="text-xs relative px-2 py-1 font-medium uppercase tracking-wide"
                            onMouseEnter={() => setIsHovered(idx)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {isHovered === idx && (
                                <motion.div
                                    layoutId="hovered-span"
                                    className=""
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{item.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                <ThemeToggleButton className="size-4 cursor-pointer" variant="circle-blur" start="top-right" />
                    <Search className="size-4 cursor-pointer" />
                    <Filter className="size-4 cursor-pointer" />
                </div>
            </motion.nav>
        </div>
    );
}