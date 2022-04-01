import React from 'react';
import LeftHeroSection from './LeftHeroSection';
import RightHeroSection from './RightHeroSection';

const Hero = () => {
    return (
        <div className="sm:flex md:flex lg:flex px-14 py-4">
            <LeftHeroSection />
            <RightHeroSection />
        </div>
    );
};

export default Hero;
