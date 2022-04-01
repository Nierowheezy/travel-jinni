import React from 'react';
import styles from '../../styles/Home.module.css';

const Header = () => {
    return (
        <>
            <div className="sm:flex md:flex lg:flex sm:justify-between w-11/12 m-auto pb-1 pt-2">
                <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
                    <p className="text-sm">Remaining Days to my Trip</p>

                    <div className="flex">
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-sm py-5">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500"></div>
        </>
    );
};

export default Header;
