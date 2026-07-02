"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Services() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-white">

      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

       <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-third mb-2">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-bluec">
            Loved by our customers
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-5">

          <div data-aos="fade-up" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5 mt-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
              <svg className="shrink-0 size-5 text-muted-foreground-2" width="200px" height="200px" viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" strokeWidth="2.24" stroke="#3EC1A6" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.68,42.22H37.17a1.68,1.68,0,0,0,1.68-1.68L44.7,19.12A1.68,1.68,0,0,0,43,17.44H17.61a1.69,1.69,0,0,0-1.69,1.68l-5,21.42a1.68,1.68,0,0,0,1.68,1.68h2.18"></path>
                  <path d="M41.66,42.22H38.19l5-17.29h8.22a.85.85,0,0,1,.65.3l3.58,6.3a.81.81,0,0,1,.2.53L52.51,42.22h-3.6"></path>
                  <ellipse cx="18.31" cy="43.31" rx="3.71" ry="3.76"></ellipse>
                  <ellipse cx="45.35" cy="43.31" rx="3.71" ry="3.76"></ellipse>
                  <line x1="23.25" y1="22.36" x2="6.87" y2="22.36" strokeLinecap="round"></line>
                  <line x1="20.02" y1="27.6" x2="8.45" y2="27.6" strokeLinecap="round"></line>
                  <line x1="21.19" y1="33.5" x2="3.21" y2="33.5" strokeLinecap="round"></line>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-foreground">Fast Delivery</h3>
              <p className="mt-1 text-muted-foreground-2"> Reliable shipping straight to your door.</p>
            </div>
          </div>

          <div data-aos="fade-up" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
              <svg className="shrink-0 size-5 text-muted-foreground-2" width="200px" height="200px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3EC1A6" strokeWidth="0.00024">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.0102C13.8388 10.2845 14.75 11.143 14.75 12.3333C14.75 12.7475 14.4142 13.0833 14 13.0833C13.5858 13.0833 13.25 12.7475 13.25 12.3333C13.25 11.9493 12.8242 11.4167 12 11.4167C11.1758 11.4167 10.75 11.9493 10.75 12.3333C10.75 12.7174 11.1758 13.25 12 13.25C13.3849 13.25 14.75 14.2098 14.75 15.6667C14.75 16.857 13.8388 17.7155 12.75 17.9898V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.9898C10.1612 17.7155 9.25 16.857 9.25 15.6667C9.25 15.2525 9.58579 14.9167 10 14.9167C10.4142 14.9167 10.75 15.2525 10.75 15.6667C10.75 16.0507 11.1758 16.5833 12 16.5833C12.8242 16.5833 13.25 16.0507 13.25 15.6667C13.25 15.2826 12.8242 14.75 12 14.75C10.6151 14.75 9.25 13.7903 9.25 12.3333C9.25 11.143 10.1612 10.2845 11.25 10.0102V10C11.25 9.58579 11.5858 9.25 12 9.25Z" fill="#3EC1A6"></path>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-foreground">Exclusive Offers</h3>
              <p className="mt-1 text-muted-foreground-2"> Members-only discounts and early access to new arrivals.</p>
            </div>
          </div>

          <div data-aos="fade-up" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
              <svg className="shrink-0 size-5 text-muted-foreground-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M17.4142 10.4142C18 9.82843 18 8.88562 18 7C18 5.11438 18 4.17157 17.4142 3.58579M17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142M17.4142 10.4142C17.4142 10.4142 17.4142 10.4142 17.4142 10.4142ZM17.4142 3.58579C16.8284 3 15.8856 3 14 3L10 3C8.11438 3 7.17157 3 6.58579 3.58579M17.4142 3.58579C17.4142 3.58579 17.4142 3.58579 17.4142 3.58579ZM6.58579 3.58579C6 4.17157 6 5.11438 6 7C6 8.88562 6 9.82843 6.58579 10.4142M6.58579 3.58579C6.58579 3.58579 6.58579 3.58579 6.58579 3.58579ZM6.58579 10.4142C6.58579 10.4142 6.58579 10.4142 6.58579 10.4142Z" stroke="#3EC1A6" strokeWidth="0.984"></path>
                  <path d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z" stroke="#3EC1A6" strokeWidth="0.984"></path>
                  <path d="M18 6C16.3431 6 15 4.65685 15 3" stroke="#3EC1A6" strokeWidth="0.984" strokeLinecap="round"></path>
                  <path d="M18 8C16.3431 8 15 9.34315 15 11" stroke="#3EC1A6" strokeWidth="0.984" strokeLinecap="round"></path>
                  <path d="M6 6C7.65685 6 9 4.65685 9 3" stroke="#3EC1A6" strokeWidth="0.984" strokeLinecap="round"></path>
                  <path d="M6 8C7.65685 8 9 9.34315 9 11" stroke="#3EC1A6" strokeWidth="0.984" strokeLinecap="round"></path>
                  <path d="M5 20.3884H7.25993C8.27079 20.3884 9.29253 20.4937 10.2763 20.6964C12.0166 21.0549 13.8488 21.0983 15.6069 20.8138C16.4738 20.6734 17.326 20.4589 18.0975 20.0865C18.7939 19.7504 19.6469 19.2766 20.2199 18.7459C20.7921 18.216 21.388 17.3487 21.8109 16.6707C22.1736 16.0894 21.9982 15.3762 21.4245 14.943C20.7873 14.4619 19.8417 14.462 19.2046 14.9433L17.3974 16.3084C16.697 16.8375 15.932 17.3245 15.0206 17.4699C14.911 17.4874 14.7962 17.5033 14.6764 17.5172M14.6764 17.5172C14.6403 17.5214 14.6038 17.5254 14.5668 17.5292M14.6764 17.5172C14.8222 17.486 14.9669 17.396 15.1028 17.2775C15.746 16.7161 15.7866 15.77 15.2285 15.1431C15.0991 14.9977 14.9475 14.8764 14.7791 14.7759C11.9817 13.1074 7.62942 14.3782 5 16.2429M14.6764 17.5172C14.6399 17.525 14.6033 17.5292 14.5668 17.5292M14.5668 17.5292C14.0434 17.5829 13.4312 17.5968 12.7518 17.5326" stroke="#3EC1A6" strokeWidth="0.984" strokeLinecap="round"></path>
                  <rect x="2" y="14" width="3" height="8" rx="1.5" stroke="#3EC1A6" strokeWidth="0.984"></rect>
                </g>
              </svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-foreground">Hand to Hand Payments</h3>
              <p className="mt-1 text-muted-foreground-2">Safe checkout with trusted payment gateways.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )

}