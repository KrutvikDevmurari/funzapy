'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Modal from 'react-modal';

const Sidebar = ({ modalIsOpen, toggleModal }: any) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            className={"inline"}
            contentLabel="Sidebar Modal "
        >
            <div className="fixed inset-y-0 left-0 w-[340px]  bg-[#f1f5f9] border-r dark:bg-gray-800 dark:border-gray-600 overflow-y-auto lg:block">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <div className="flex justify-center">
                        <Link href="#" className="flex items-center">
                            <img
                                className=" w-[230px]  lazy h-16 rounded-md drop-shadow-xl dark:hidden loaded"
                                src="/images/funzapy_logo_blue.png"
                                alt="Funzapy"
                            />
                        </Link>

                        <div className="float-right mt-4 flex">
                            <label htmlFor="toggleDark" className="float-right cursor-pointer select-none items-center">
                                <div className="relative">
                                    <input type="checkbox" id="toggleDark" className="sr-only" />
                                    <div className="block h-8 w-14 rounded-full border border-gray-800 bg-gray-50 dark:border-gray-50 dark:bg-gray-800"></div>
                                    <div className="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 transition dark:translate-x-[20px]">
                                        <span className="inactive text-black dark:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 -rotate-90 transform">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                            </svg>
                                        </span>
                                        <span className="active hidden text-black dark:block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </label>
                            <Link href="#" className="mx-2 text-white" onClick={() => toggleModal()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-black hover:rotate-90 dark:fill-white" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64" style={{ display: 'inline' }}>
                                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="text-center">
                            <Link className="text-center text-xs font-semibold" href="/login">Please login &amp; Keep your 0 coins safe.</Link>
                        </div>
                        <div className="h- mt-2 w-full border-b-2"></div>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link href="/login" type="button" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">Quiz Rules</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" type="button" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                                </Link>
                            </li>
                            <li>
                                <hr />
                                <div className="m-2 font-bold">Contact</div>
                                <div className="flex justify-center">
                                    <Link data-mdb-ripple="true" data-mdb-ripple-color="light" href="mailto:priyeshm@funzapy.com" className="mb-2 inline-block cursor-pointer rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#ea4335' }}>
                                        <Image src="/images/GoogleIcon.svg" alt="instagram" width={"14"} height={"14"} />
                                    </Link>
                                    <Link data-mdb-ripple="true" data-mdb-ripple-color="light" href="mailto:priyeshm@funzapy.com" className=" ml-5 mb-2 inline-block cursor-pointer  rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#c13584' }}>
                                        <Image src="/images/instagram.svg" alt="instagram" width={"14"} height={"14"} />
                                    </Link>
                                    <Link data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.facebook.com/funzapy/" className="ml-5 mr-5 mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#1877f2' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4">
                                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                        </svg>
                                    </Link>
                                    <Link data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/company/funzapy/" className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#0077b5' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4">
                                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="text-center text-xs">Version 1.912</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </Modal >
    );
};

export default Sidebar;

