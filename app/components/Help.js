import Image from 'next/image';
import React from 'react';

const Help = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="flex max-w-6xl w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center w-1/2 p-8 mt-[35px]">
          <h1 className="text-4xl font-bold mb-4 h-[30px] text-gray-500">You're Not Alone,</h1>
          <h1 className='text-[50px] text-[#1C8DCE] w-[509px]'>We're Here To Help</h1>
          <p className="text-lg mb-4">
            Feeling Lonely With A Problem? You Don’t Have To Deal With It All By Yourself.
          </p>
          <p className="text-lg mb-4">
            We Get That Problems Can Be Tough, But We’re Here For You. Just Give Us A Call, And We’ll Be Like A Helpful Friend,
            Ready To Sort Out Your Issues. We’ll Make Sure To Put Your Problems At The Top Of Our List.
          </p>

          {/* Live Chat Support Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-[443px] h-[337px]">
          <Image
            src="/chat.jpg" 
            alt="Support Agents"
            width={100}
            height={100}
            objectFit="cover"
            className="ml-[139px]"
          />
            <div className="flex items-center mb-4">
              <span className="ml-4 text-gray-700">Live chat support provides you with the opportunity to engage in real-time, interactive conversations with dedicated support agents.</span>
            </div>
            <button className="bg-[#1C8DCE] text-white px-4 py-2 rounded-lg w-[353px] h-[49px]">
              Live Chat Support
            </button>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="relative "> */}
          <Image
            src="/help.png" 
            alt="Support Agents"
            width={778}
            height={667}
            objectFit="cover"
            className="mt-[53px] ml-[135px]"
          />
        {/* </div> */}

        {/* Side Call Button */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-6 rounded-l-lg">
          <p className="rotate-90">
            Call for Assistance At +1 (866) 200-9902
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
