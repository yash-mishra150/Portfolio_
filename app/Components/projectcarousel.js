"use client";
import React from 'react';
import data from './Projectdata';
import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Image from 'next/image';
import { Carousel } from "flowbite-react";

const ProjectCarousel = () => {
    return (
        <div className="h-[80vh] sm:h-[105vh] xl:h-[60vh] 2xl:h-[60vh]">
        <Carousel pauseOnHover>
            {data.map((item, i) => (
                    <div key={item.id} className="border  backdrop-blur-xl border-gray-300 place-content-center rounded-lg p-4  sm:h-[90vh] md:h-[50vh] text-center">
                        <p className='poppins text-5xl my-2'>{item.title}</p>
                        <p className='poppins'>{item.desc}</p>
                        <div className='flex flex-row justify-center gap-2 mt-[1vh]'>
                            <a className='hover:underline text-red-200 active:text-white font-semibold' href={item.githuburl} target='_blank'><FaGithub size={25} /></a>
                            {item.demo? <a className='hover:underline inline text-red-200 active:text-white font-semibold' href={item.demo} target='_blank' ><FaCirclePlay size={25}/></a>: null}
                        </div>
                        <Image src={item.preview} alt={item.title} className={item.id%2==0? 'w-[10vh] max-h-[20vh] m-auto mt-[2vh] object-cover': 'w-[41vh] max-h-[20vh] m-auto mt-[2vh] object-cover' } />
                    </div>
            ))}
        </Carousel>
        </div>
    );
};

export default ProjectCarousel;
