"use client";

import React from 'react'
import Particles from './particles';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import logo from '../../assests/logo-no-background.svg';
import MyPhoto from '../../assests/Photo1.jpeg';
import rectangle from '../../assests/rectangle.svg';
import skillsrest from '../../assests/skillsrest.svg';

function MainPage() {
    return (
        <div className='px-[10vw]'>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            
            <nav>
                <ul className='poppins mt-[5vh] flex justify-around'>

                    <li>About Me</li>
                    <li>Skills</li>
                    <li><Image src={logo} alt="logo" className='-mt-[7vh]' /></li>
                    <li>Projects</li>
                    <li>Contact me</li>

                </ul>
            </nav>
            <Particles
                className="absolute top-[100vh] inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <section className='text-start px-[2vw] leading-none'>
                <div className=" flex flex-row justify-center katarina mt-[3vh] text-[55vh]">
                    YASH<span className='ml-10'>{" "}MISHRA</span>
                </div>
                <div className='-mt-[4vh]'>
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
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                        className='roboto'
                    />
                </div>
            </section>
            <Particles
                className="absolute top-[200vh] inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <section className='mt-[30vh]'>
                <h1 className='poppins font-normal text-5xl'>About Me</h1>
                <div className='mt-[3vh] flex justify-around gap-10 place-items-center'>
                    <div className='roboto text-3xl '>
                        I&apos;m a passionate <p className='inline text-red-300'>Computer Science student</p> at Ajay Kumar Garg Engineering College, excelling in <div className='inline text-red-300'>competitive programming <p className=' inline text-white'>and</p> full-stack development</div>. Skilled in <p className='inline text-red-300'>C++</p>, <p className='inline text-red-300'>Java</p>, and <p className='inline text-red-300'>Python</p>, I love solving tough problems and creating innovative apps to make a big impact in tech.
                    </div>
                    <Image className='h-[40vh] w-[40vh]  rounded-full border-2 border-white' src={MyPhoto} alt='photo' />
                </div>
            </section>
            <section className='mt-[30vh] flex -mx-[10vw] '>
                <Image className='m-auto mx-0' src={rectangle} alt="skills"/>
                <h1 className='katarina mx-[2vw] text-[18vw]'>SKILLS</h1>
                <Image className='w-[100vh]' src={skillsrest} alt="skills"/>
            </section>
        </div>
    )
}

export default MainPage