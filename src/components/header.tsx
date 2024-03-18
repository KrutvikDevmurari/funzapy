'use client'
import Link from 'next/link';
import React from 'react';

// Header component containing the logo and menu icons
const Header = () => {
    return (
        <div className="flex items-center dark:text-white border-b-2 rounded-b-2xl">
            <span className="cursor-pointer text-4xl mr-3 ml-3">
                <div className="relative top-2 float-right animate-ping w-2 h-2 align-middle bg-red-500 rounded-full" style={{ top: '8px' }}></div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACsklEQVRoge2YP2/UMBjGn9dN2zvaDQEDZaQqIwNiuRugdOJ73A6Cr4AQCDFCPwkTougAUSTEWNqO3NI/rFepSfwyxHfkj+0kbtJkyCOddPLF9u+1Xz/vOUCnTp06NSky/vLs12Mi3gbjJsBRG7PqxKqJo8/8e/RMNKjhGVb9Y+NF7bqxAZY8YaJR+G7zgw5TGCMjft80PJhBhDUBuW3iNAYAxlrT8LFnbpUPoD3wljy3BtAm+FlbmQDaBG/mt+9Ae+DNEXil4GUAnE8BDuuBJwF4PZBYKARvDUALdj7FzpO7GN6+ah3UVePfx3j0+iuwtGLYnaxyXCi1CjKoDR4AhhvXo10uCA/kBaDN+ZplOhcG2QoZMvAkMD74e2FGk74fngJCzOecgZBlF8xnQOc2i1fw4O1PQPqGAxvrW8RtkHIbIQCvXxg+J4AU/GyC5RUDfEVWqYN3OsRN+HxJeMBaBzTwYQj4U0CG1VdYZpVCPRBlz0HpALQr70+x8/QeBut11YEjbL38DCytpoI29yngQrFAwqA2eAAYbtwAZKiBr6KQxXO+TiWcLNGgVbFCNoMXHsb7p5Vw6rR7eKLqQBLerQ7oVt7r4eGbH6rcO/i81W0wP8RZ+Asc4oTbiAVVB+qySt3Ku6bQpfu8Bd4lhbTwYQD4ZyA2/WPM8fkMPGL9EC2n11d1IB/eGoAODP4ZPj2/j8H6NWs3V33ZO8LWi4/RfSA9v0G5d+JE2sigNngAGNxRdSAzv7mP/a2ENucvQZUVsjS8EBjvn1SFmdHuwTFAs2vTf3jbRcpSBzRus9jH5qtvapsdfF7zbMJtiKL7QBre7UKjsUoSwPIq6rVKHbxDCjXj8+XgrQG0Ct79tUq74XMCaBO8ww6w5Elr4Bl/ygdANGKWkzbACw5HJs5OnTp1alb/AIoZrfBIBPh9AAAAAElFTkSuQmCC" alt="Menu" />
            </span>
            <div className="ml-2 w-3/4">
                <Link href="/login">
                    <div className="text-xl font-light leading-normal">
                        <div className="flex h-16 replaceImage cursor-pointer justify-center" >
                            <img className="lazy h-12 self-center drop-shadow-xl rounded-sm dark:hidden loaded" data-src="https://www.funzapy.com/assets/images/funzapy_logo_blue.png" alt="" loading="lazy" src="https://www.funzapy.com/assets/images/funzapy_logo_blue.png" data-ll-status="loaded" />
                            <img className="lazy h-12 self-center drop-shadow-xl shadow-blue-500 rounded-sm hidden dark:block" data-src="https://www.funzapy.com/assets/images/dark_logo.webp" alt="" loading="lazy" src="https://www.funzapy.com/assets/images/dark_logo.webp" data-ll-status="native" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex cursor-pointer right-0 z-10 bg-[#fef9c3] rounded-l-lg shadow-xl">
                <img className="lazy inline-block ns bg-[#fef9c3] rounded-l-lg p-1 loaded" data-src="/favicon/bell.gif" alt="Enable Notification" style={{ width: '33px', height: '33px', display: 'inline-block !important' }} loading="lazy" src="/images/bell.gif" data-ll-status="loaded" />
                <img className="lazy inline-block pwa ml-1 bg-[#fef9c3] rounded-r-lg p-1 loaded" data-src="/images/pwa.gif" alt="Install FunZapy App" style={{ width: '33px', height: '33px' }} loading="lazy" src="/images/pwa.gif" data-ll-status="loaded" />
            </div>
            <div className="flex z-1">

                <Link href="/web/profile" className=" bg-indigo-500 dark:bg-slate-900 float-right mr-2 text-tiny hover:bg-grey text-gray-50 font-bold py-1 px-4 rounded-md inline-flex items-center border shadow">
                    <img className="lazy w-4 loaded" data-src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-coin-pirates-justicon-flat-justicon.png" loading="lazy" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-coin-pirates-justicon-flat-justicon.png" data-ll-status="loaded" />
                    <span className="px-2 text-center text-xs font-normal">
                        0 <br />COINS</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
