"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Services() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-white overflow-hidden">

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

          <div data-aos="fade-left" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5 mt-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
<svg className="shrink-0 size-6 text-muted-foreground-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.56443 8.73049L10.0789 10.5926C10.5639 12.3481 10.8064 13.2259 11.5194 13.6252C12.2323 14.0244 13.1374 13.7892 14.9474 13.3188L16.8673 12.8199C18.6774 12.3495 19.5824 12.1143 19.9941 11.4227C20.4057 10.7312 20.1632 9.85344 19.6782 8.09788L19.1638 6.2358C18.6788 4.48023 18.4363 3.60244 17.7233 3.20319C17.0103 2.80394 16.1052 3.03915 14.2952 3.50955L12.3753 4.00849C10.5652 4.47889 9.66021 4.71409 9.24856 5.40562C8.83692 6.09714 9.07943 6.97493 9.56443 8.73049Z" fill="#ffffff"></path> <path d="M2.27749 5.24694C2.38823 4.84781 2.80157 4.61402 3.2007 4.72476L4.9044 5.19744C5.82129 5.45183 6.5469 6.15866 6.80003 7.07489L8.95106 14.8609L9.10935 15.4075C9.74249 15.6438 10.2863 16.0866 10.6314 16.6747L10.9414 16.579L19.8115 14.2739C20.2124 14.1697 20.6219 14.4102 20.7261 14.8111C20.8303 15.212 20.5897 15.6214 20.1888 15.7256L11.3515 18.0223L11.0228 18.1238C11.0161 19.3947 10.1392 20.5555 8.81236 20.9003C7.22189 21.3136 5.58709 20.3982 5.16092 18.8556C4.73476 17.313 5.67861 15.7274 7.26908 15.3141C7.3479 15.2936 7.42682 15.2764 7.5057 15.2623L5.35419 7.47433C5.24592 7.08242 4.92897 6.76092 4.50338 6.64284L2.79968 6.17016C2.40054 6.05942 2.16675 5.64608 2.27749 5.24694Z" fill="#ffffff"></path> </g></svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-foreground">Fast Delivery</h3>
              <p className="mt-1 text-muted-foreground-2"> Reliable shipping straight to your door.</p>
            </div>
          </div>

          <div data-aos="fade-left" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
<svg className="shrink-0 size-6 text-muted-foreground-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.0102C13.8388 10.2845 14.75 11.143 14.75 12.3333C14.75 12.7475 14.4142 13.0833 14 13.0833C13.5858 13.0833 13.25 12.7475 13.25 12.3333C13.25 11.9493 12.8242 11.4167 12 11.4167C11.1758 11.4167 10.75 11.9493 10.75 12.3333C10.75 12.7174 11.1758 13.25 12 13.25C13.3849 13.25 14.75 14.2098 14.75 15.6667C14.75 16.857 13.8388 17.7155 12.75 17.9898V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.9898C10.1612 17.7155 9.25 16.857 9.25 15.6667C9.25 15.2525 9.58579 14.9167 10 14.9167C10.4142 14.9167 10.75 15.2525 10.75 15.6667C10.75 16.0507 11.1758 16.5833 12 16.5833C12.8242 16.5833 13.25 16.0507 13.25 15.6667C13.25 15.2826 12.8242 14.75 12 14.75C10.6151 14.75 9.25 13.7903 9.25 12.3333C9.25 11.143 10.1612 10.2845 11.25 10.0102V10C11.25 9.58579 11.5858 9.25 12 9.25Z" fill="#ffffff"></path> </g></svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-foreground">Exclusive Offers</h3>
              <p className="mt-1 text-muted-foreground-2"> Members-only discounts and early access to new arrivals.</p>
            </div>
          </div>

          <div data-aos="fade-left" className="text-center bg-bluec w-[90%] ml-auto mr-auto text-white mb-8 border rounded-2xl p-5">
            <div className="flex justify-center items-center size-12 bg-muted border border-line-2 rounded-full mx-auto">
              <svg className="shrink-0 size-6 text-muted-foreground-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.4142 10.4142C18 9.82843 18 8.88562 18 7C18 5.11438 18 4.17157 17.4142 3.58579M17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142M17.4142 10.4142C17.4142 10.4142 17.4142 10.4142 17.4142 10.4142ZM17.4142 3.58579C16.8284 3 15.8856 3 14 3L10 3C8.11438 3 7.17157 3 6.58579 3.58579M17.4142 3.58579C17.4142 3.58579 17.4142 3.58579 17.4142 3.58579ZM6.58579 3.58579C6 4.17157 6 5.11438 6 7C6 8.88562 6 9.82843 6.58579 10.4142M6.58579 3.58579C6.58579 3.58579 6.58579 3.58579 6.58579 3.58579ZM6.58579 10.4142C6.58579 10.4142 6.58579 10.4142 6.58579 10.4142Z" stroke="#ffffff" stroke-width="0.8399999999999999"></path> <path d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z" stroke="#ffffff" stroke-width="0.8399999999999999"></path> <path d="M18 6C16.3431 6 15 4.65685 15 3" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M18 8C16.3431 8 15 9.34315 15 11" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M6 6C7.65685 6 9 4.65685 9 3" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M6 8C7.65685 8 9 9.34315 9 11" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M5 20.3884H7.25993C8.27079 20.3884 9.29253 20.4937 10.2763 20.6964C12.0166 21.0549 13.8488 21.0983 15.6069 20.8138C16.4738 20.6734 17.326 20.4589 18.0975 20.0865C18.7939 19.7504 19.6469 19.2766 20.2199 18.7459C20.7921 18.216 21.388 17.3487 21.8109 16.6707C22.1736 16.0894 21.9982 15.3762 21.4245 14.943C20.7873 14.4619 19.8417 14.462 19.2046 14.9433L17.3974 16.3084C16.697 16.8375 15.932 17.3245 15.0206 17.4699C14.911 17.4874 14.7962 17.5033 14.6764 17.5172M14.6764 17.5172C14.6403 17.5214 14.6038 17.5254 14.5668 17.5292M14.6764 17.5172C14.8222 17.486 14.9669 17.396 15.1028 17.2775C15.746 16.7161 15.7866 15.77 15.2285 15.1431C15.0991 14.9977 14.9475 14.8764 14.7791 14.7759C11.9817 13.1074 7.62942 14.3782 5 16.2429M14.6764 17.5172C14.6399 17.525 14.6033 17.5292 14.5668 17.5292M14.5668 17.5292C14.0434 17.5829 13.4312 17.5968 12.7518 17.5326" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <rect x="2" y="14" width="3" height="8" rx="1.5" stroke="#ffffff" stroke-width="0.8399999999999999"></rect> </g></svg>
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