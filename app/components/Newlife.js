"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Newlife = () => {
  const router = useRouter();

  const handleSetupClick = () => {
    router.push("../services/Pages");
  };

  return (
    <div className="bg-[#1c8dce] text-white flex justify-between h-[480px] p-6">
      {/* Left side chat button */}

      {/* Middle text content */}
      <div className="flex flex-col justify-center text-left w-2/3 ml-8">
        <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl font-poppins">
          Let's Breathe New Life Into Your Printer! No Need To Stress, You're In The Right Spot.
        </h1>
        <div className="flex items-center mt-3">
          <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0131 13.8421C10.0131 13.0249 10.6787 12.3601 11.4965 12.3601H12.5799C12.9306 12.3601 13.2622 12.4832 13.5254 12.7016C13.8911 12.6542 14.2421 12.5771 14.5775 12.4809C15.2506 11.4279 15.6542 10.1868 15.6542 8.97204C15.6542 5.96211 13.2056 3.51291 10.1959 3.51291C7.18544 3.51291 4.73682 5.96211 4.73682 8.97204C4.73739 11.982 7.18544 15.1771 10.1957 15.1771C10.3938 15.1771 10.5891 15.1615 10.7821 15.1349C10.3259 14.8816 10.0131 14.4 10.0131 13.8421Z"
              fill="white"
            ></path>
            <path
              d="M14.2945 15.2332C13.2354 16.0397 11.9144 16.5202 10.4838 16.5202H9.9086C8.47773 16.5202 7.15636 16.0397 6.09758 15.2332C2.63987 15.7922 1.37115e-08 18.7891 1.37115e-08 22.404C-0.000288875 24.3895 4.56444 26 10.196 26C15.8265 26 20.3918 24.3895 20.3918 22.4042C20.3921 18.7891 17.7519 15.7922 14.2945 15.2332Z"
              fill="white"
            ></path>
            <path
              d="M2.5467 13.1733H2.61488C3.36715 13.1733 3.97612 12.5644 3.97612 11.8106V9.09018C3.97612 8.55631 3.66759 8.09553 3.21895 7.87309C3.41308 4.19207 6.46808 1.25782 10.1959 1.25782C13.9231 1.25782 16.9787 4.19207 17.1723 7.8728C16.7245 8.09553 16.4163 8.55631 16.4163 9.08989V11.8104C16.4163 11.9915 16.4506 12.1593 16.5127 12.3162C15.7195 12.8847 14.5648 13.2889 13.2645 13.4007C13.1177 13.1768 12.8661 13.0274 12.5801 13.0274H11.4968C11.0452 13.0274 10.6809 13.3929 10.6809 13.8421C10.6809 14.2934 11.0452 14.6591 11.4968 14.6591H12.5801C12.8956 14.6591 13.1639 14.4788 13.3003 14.2185C14.8097 14.0989 16.123 13.6384 17.0446 12.957C17.2558 13.0933 17.5062 13.1733 17.7772 13.1733H17.8448C18.5971 13.1733 19.2058 12.5644 19.2058 11.8106V9.09018C19.2058 8.54851 18.8883 8.08022 18.4301 7.86355C18.2302 3.49469 14.6136 0 10.1959 0C5.77821 0 2.1619 3.49469 1.96286 7.86355C1.50352 8.08022 1.18604 8.54851 1.18604 9.09018V11.8106C1.18632 12.5644 1.79559 13.1733 2.5467 13.1733Z"
              fill="white"
            ></path>
          </svg>
          <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="ml-2 text-[20px]">
            Feel The Positivity Throughout The Process With Our Technicians. Call Us Now.
          </h2>
        </div>
        <p style={{ fontFamily: 'Poppins, sans-serif' }} className="mt-2 w-[1060px] text-[16px] leading-5">
          Every Problem Has A Solution, But Sometimes It's Hard To See, Especially In The Tech World Where Issues Can Hinder Success. But Our CompTIA A+ Certified Technicians Are Trained To Identify And Address Any Issue. We Recognize The Importance Of Your Time, So We Swiftly Resolve Your Tech Problems In Just Minutes.
        </p>
        <img src="https://printscart.com/assets/image/lvc.png" className="w-[440px] h-[181px] ml-[358px] mt-[49px]"/>
      </div>

      {/* Right image */}
      <div className="flex items-center">
        <img
          src="https://printscart.com/assets/image/per.png"
          alt="Technician"
          className="w-[300px] h-[300px] object-contain mt-[180px] mr-[395px]"
        />
      </div>
    </div>
  );
};

export default Newlife;
