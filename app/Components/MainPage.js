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
function MainPage() {

    return (
        <div className=''>
            <Particles
                className=" fixed inset-0 -z-10 animate-fade-in"
                quantity={100}
            />

            
            <Navbar logo={logo} about='about' skills='skills' projects='projects'/>
            <section className='text-start leading-none px-[10vw]'>
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
            <section  className='mt-[30vh] px-[10vw] '>
                <h1 className='poppins justify-center flex  lg:block lg:justify-start  tracking-widest font-normal text-5xl '>About Me</h1>
                <div className='mt-[3vh] lg:flex justify-around gap-10 place-items-center'>
                    <div className='roboto text-center lg:text-left text-2xl md:text-3xl '>
                        I&apos;m a passionate <p className='inline text-red-300'>Computer Science student</p> at Ajay Kumar Garg Engineering College, excelling in <div className='inline text-red-300'>competitive programming <p className=' inline text-white'>and</p> full-stack development</div>. Skilled in <p className='inline text-red-300'>C++</p>, <p className='inline text-red-300'>Java</p>, and <p className='inline text-red-300'>Python</p>, I love solving tough problems and creating innovative apps to make a big impact in tech.
                    </div>
                    <div className='lg:block lg:mt-auto mt-[5vh] flex lg:justify-start justify-center'><Image className='lg:max-h-[40vh] lg:max-w-[40vh] max-h-[50vh] max-w-[50vw]  rounded-full border-2 border-white' src={MyPhoto} alt='photo' /></div>
                </div>
            </section>
            <section id='skills' className='mt-[20vh] justify-center flex  '>
                <h1 className='katarina mx-[2vw] tracking-widest text-[18vw]'>SKILLS</h1>
            </section>
            <SkillsCarousel />
            
            <section id='projects'  className='mt-[20vh] flex justify-center px-[10vw] '>
                <h1   className='katarina mx-[2vw] tracking-widest text-[18vw]'>PROJECTS</h1>
                
            </section>
            
            <div  className='px-[10vw]'>
                <ProjectCarousel />
            </div>


            <footer className='bg-white mt-[5vh] p-[5vh] text-black'>
                <Image src={logo_dark} alt="logo" className='-mt-[7vh]' />
                <div className="flex justify-around">
                    <div>
                        <h1 className='poppins'>Certifications:</h1>
                        <ul className='roboto text-neutral-500'>
                            <li><a href='https://drive.google.com/file/d/1d5yKE4UwbYigsO0Fd9GJd0BeKyYLuPu4/view?usp=sharing' target="_blank">Java Course</a></li>
                            <li><a href='https://drive.google.com/file/d/19_XCF8vg_B_mTR6dFfjQTcgxikhpqMN4/view?usp=sharing' target="_blank">React Native Course</a></li>
                        </ul>
                    </div>
                    <div>
                        <Socials/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainPage