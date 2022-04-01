import React from 'react';
import Image from 'next/image';

const RightHeroSection = () => {
    return (
        <>
            <div className="flex-col sm:flex sm:pt-16">
                <div className="flex flex-col justify-center sm:justify-start items-center sm:flex-row sm:p-4 sm:pl-40 pt-16">
                    <div className="rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={55}
                            height={55}
                            className="rounded-full"
                        />
                    </div>
                    <div className="sm:ml-4 sm:mt-4 mt-8 text-center border border-white">
                        <h1 className="head-t font-bold font-mono tracking-wide px-3">
                            HILTON HOTEL
                        </h1>
                        <h2 className="bg-white text-black text-xl pb-1">
                            POWERED BY TRAVEL JINNI
                        </h2>
                    </div>
                </div>
                <div className="div-w ml-40 sm:ml-40 text-center border-white border mt-8 sm:mt-2 sm:pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                    <h1 className="text-5xl font-serif font-bold pb-5 px-4">
                        Your Trip Awaits You!
                    </h1>
                    <p className="text-sm pb-5">
                        We have taken some time to help plan your trip to make it a memmorable one.
                        Access your calender for even more things you can do on your trip.
                    </p>
                    <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">
                        ACCESS CALENDAR
                    </button>
                </div>
            </div>
        </>
    );
};

export default RightHeroSection;
