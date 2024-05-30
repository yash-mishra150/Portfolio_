"use client";

import React from 'react'
import Particles from './particles';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import logo from '../../assests/logo-no-background.svg';
import MyPhoto from '../../assests/Photo1.jpeg';
import SkillsCarousel from './scroller';
import ProjectCarousel from './projectcarousel';
import logo_dark from '../../assests/logo_dark.svg';
import Socials from './socials';
import Navbar from './Navbar';
import usePageVisibility from './backsoon';
import { motion } from 'framer-motion';
import { IoIosArrowDropupCircle } from "react-icons/io";

function MainPage() {
    const sentence = "SKILLS";
    const text = "PROJECTS";
    const letters = Array.from(sentence);
    const letters1 = Array.from(text);
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    usePageVisibility('Portfolio', 'Come Back :(');
    return (
        <div className=''>
            <div id='home'/>
            <Particles
                className=" fixed inset-0 -z-10 animate-fade-in"
                quantity={100}
            />


            <Navbar logo={logo} about='about' skills='skills' projects='projects' />
            <section  className='text-start leading-none px-[10vw]'>
                <div className=" flex flex-row justify-center katarina mt-[3vh] text-[27vw]">
                    YASH<span className='ml-10'>{" "}MISHRA</span>
                </div>
                <div className='xl:-mt-[4vh] lg:block flex justify-center text-[2.5vh] lg:text-3xl  px-[10vw]'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'I am Web developer',
                            1000,
                            'I am App developer',
                            1000,
                            'I am Programmer',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='roboto text-[]'
                    />
                </div>
            </section>
            <div id='about'></div>
            <motion.section
                className="mt-[30vh] px-[10vw]"

            >
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.1 }}
                    transition={{ duration: 1 }}
                    className="poppins justify-center flex lg:block lg:justify-start tracking-widest font-normal text-5xl">
                    About Me
                </motion.h1>
                <div
                    className="mt-[3vh] lg:flex justify-around gap-10 place-items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.1 }}
                        transition={{ duration: 1 }}
                        className="roboto text-center lg:text-left text-2xl md:text-3xl">
                        I&apos;m a passionate{' '}
                        <p className="inline text-red-300">Computer Science student</p> at Ajay
                        Kumar Garg Engineering College, excelling in{' '}
                        <div className="inline text-red-300">
                            competitive programming <p className="inline text-white">and</p> full-stack development
                        </div>
                        . Skilled in <p className="inline text-red-300">C++</p>,{' '}
                        <p className="inline text-red-300">Java</p>, and{' '}
                        <p className="inline text-red-300">Python</p>, I love solving tough
                        problems and creating innovative apps to make a big impact in tech.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.1 }}
                        transition={{ duration: 1 }}
                        className="lg:block lg:mt-auto mt-[5vh] flex lg:justify-start justify-center">
                        <Image
                            className="lg:max-h-[40vh] lg:max-w-[40vh] max-h-[50vh] max-w-[50vw] rounded-full border-2 border-white"
                            src={MyPhoto}
                            alt="photo"
                        />
                    </motion.div>
                </div>
            </motion.section>
            <section id="skills" className="mt-[20vh] justify-center flex">
                <motion.h1
                    className="katarina mx-[2vw] tracking-widest text-[18vw]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                >
                    {letters.map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
            </section>
            <SkillsCarousel />
            
            
            <section id='projects' className='mt-[20vh] flex justify-center px-[10vw] '>
                <motion.h1 className='katarina mx-[2vw] tracking-widest text-[18vw]'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}>
                    {letters1.map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

            </section>

            <div className='px-[10vw]'>
                <ProjectCarousel />
            </div>
            <a href={`#home`} className='flex justify-end mr-[5vw] h-[5vh]'>
                <IoIosArrowDropupCircle size={35} fill='white' />
            </a>

            <footer className='bg-white mt-[5vh] p-[5vh] text-black'>
                <Image src={logo_dark} alt="logo" className='-mt-[7vh]' />
                <div className="md:flex justify-around">
                    <div>
                        <h1 className='poppins'>Certifications:</h1>
                        <ul className='roboto text-neutral-500'>
                            <li><a href='https://drive.google.com/file/d/1d5yKE4UwbYigsO0Fd9GJd0BeKyYLuPu4/view?usp=sharing' target="_blank">Java Course</a></li>
                            <li><a href='https://drive.google.com/file/d/19_XCF8vg_B_mTR6dFfjQTcgxikhpqMN4/view?usp=sharing' target="_blank">React Native Course</a></li>
                        </ul>
                    </div>
                    <div>
                        <Socials />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainPage