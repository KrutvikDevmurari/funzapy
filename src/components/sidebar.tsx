'use client'
import React from 'react';

const Sidebar = () => (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-y-auto lg:block">
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <div className="flex justify-center">
                <a href="/" className="flex items-center">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="/img/logo.png"
                        alt="Funzapy"
                    />
                    <span className="ml-2 text-xl font-bold">Funzapy</span>
                </a>
            </div>
            <div className="mt-6">
                <div className="text-center">
                    <a className="text-center text-xs font-semibold" href="/login">Please login &amp; Keep your 0 coins safe.</a>
                </div>
                <div className="h- mt-2 w-full border-b-2"></div>
                <ul className="mt-2 space-y-2">
                    <li>
                        <a href="https://www.funzapy.com/web/quizrules" type="button" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Quiz Rules</span>
                        </a>
                    </li>
                    <li>
                        <a href="/privacy" type="button" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <svg className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Privacy Policy</span>
                        </a>
                    </li>
                    <li>
                        <a href="/login" className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                    <li>
                        <hr />
                        <div className="m-2 font-bold">Contact</div>
                        <div className="flex justify-center">
                            <a type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" href="mailto:priyeshm@funzapy.com" className="mb-2 inline-block cursor-pointer rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#ea4335' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="h-4 w-4">
                                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.6 156.9 154.7 156.9 85.1 0 154.7-70.5 154.7-156.9 0-48.1-20-91.9-52.5-123.8l67.5-64.9C463.3 139.5 488 195.2 488 261.8zM276.2 313.2c-.9.9-2.3 1.3-3.5 1.3-1.2 0-2.6-.4-3.5-1.3L88.4 155.6c-6.6-6.6-6.6-17.4 0-23.9l15.9-15.9c2-2 4.6-3.1 7.4-3.1 2.8 0 5.4 1.1 7.4 3.1l50.7 50.7c1.9 1.9 5.1 1.9 7 0l32.8-32.8c2-2 4.6-3.1 7.4-3.1 2.8 0 5.4 1.1 7.4 3.1l50.7 50.7c1.9 1.9 5.1 1.9 7 0l32.8-32.8c2-2 4.6-3.1 7.4-3.1s5.4 1.1 7.4 3.1l15.9 15.9c6.6 6.6 6.6 17.4 0 23.9l-85.9 85.9zM443.5 320L340.7 413.7c-4.7 4.7-12.3 4.7-17 0L253 348.1c-.9-.9-2.3-1.3-3.5-1.3-1.2 0-2.6.4-3.5 1.3L176.8 384l-85.9-85.9c-6.6-6.6-6.6-17.4 0-23.9l15.9-15.9c2-2 4.6-3.1 7.4-3.1 2.8 0 5.4 1.1 7.4 3.1l50.7 50.7c1.9 1.9 5.1 1.9 7 0l32.8-32.8c2-2 4.6-3.1 7.4-3.1s5.4 1.1 7.4 3.1l50.7 50.7c1.9 1.9 5.1 1.9 7 0l32.8-32.8c2-2 4.6-3.1 7.4-3.1s5.4 1.1 7.4 3.1l15.9 15.9c6.7 6.6 6.7 17.4.1 24.1z"></path>
                                </svg>
                            </a>
                            <a type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.facebook.com/funzapy/" className="ml-5 mr-5 mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#1877f2' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </a>
                            <a type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://www.linkedin.com/company/funzapy/" className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#0077b5' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4">
                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="text-center text-xs">Version 1.912</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Sidebar;
