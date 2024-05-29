import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import data from './data';
import './scroll.css';

const SkillsCarousel = () => {

  return (
    <div className='scroll flex flex-row justify-center px-[10vw] gap-[5vh] ' style={{ '--time': 20 }}>
      {data.map((item) => (
        <div key={item.id}>
          <span className='inner_div mt-5 bg-white h-[10vh] w-[10vh] md:h-[21vh] md:w-[21vh] rounded-full md:p-10 items-center flex justify-center'>
            <Image src={item.icon} alt="skills" style={{ width: '5vh' }} />
          </span>
        </div>
        
      ))}
    </div>
  );
};

export default SkillsCarousel;
