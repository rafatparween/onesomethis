// import React from 'react';
// import Link from 'next/link';
// <link href="https://fonts.googleapis.com/css2?family=FontName:wght@weight&display=swap" rel="stylesheet" />
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//       <div className="h-[800px] flex items-center justify-center">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 ml-[347px] mt-[-300px]]">
//           {/* Left Side: Text Content */}
//           <div className="text-left md:w-1/2 flex flex-col justify-center mb-[263px] mt-[63px] ml-[-109px]">
//             <h1 className="text-[50px] h-[58px] w-[1100px] mb-[30px] font-hp">
//               Easy setup, effortless printing!
//             </h1>
//             <p className="text-lg md:text-xl mb-4 mb-[58px] font-hp">
//               Click Install Setup for Install HP Smart
//             </p>
//             <Link href="./install/process">
//               <button className="install text-[#0096D6] w-[267px] h-[64px] mt-[-50px] pr-[50px] pb-[1px] pl-[67px] text-[24px] border-2 border-[#0096D6] px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-[#007BCC] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#007BCC] active:bg-[#005C9A]">

//                 Install Setup
//               </button>
//             </Link>
//           </div>

//           {/* Right Side: Image */}
//           {/* <div className="md:w-1/12 flex justify-center mt-8 md:mt-0"> */}
//             <Image
//               src="/laptipsetup.png"
//               alt="Printers"
//               width={600} // Provide a specific width
//               height={600} 
//               className="max-w-l ml-[-357px] mb-[-109px] mr-[-397pxpx]"
//             />
//             {/* <img 
//               src="/printer.png" 
//               alt="Printers" 
//               className="w-full max-w-lg h-[350px] w-[900px] ml-[69px]"
//             /> */}
//           </div>
//         </div>


//       <div className='h-[165px] bg-gray-200'></div>

//     </>
//   );
// }


// "use client"; // This should be at the top of the file


// import Storepage from '@/app/components/Storepage';
// import Image from 'next/image'; // Import from next/image
// import Link from 'next/link';
// // import Store from '../store';

// function Printersearch() {
//   return (
//     <>
//       <div className="h-[530px] mt-[80px]">
//         <section
//           className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[530px]"
//           style={{
//             backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
//           }}
//         >
//           <div className="absolute inset-0 opacity-80"></div>

//           {/* Main content */}
//           <div className="relative z-10 text-white 2xl:mt-[-62px] 2xl:ml-[-442px] ">
//             <h1 className="text-[54px] font-semibold text-center mb-4">Complete setup using Professionals Help</h1>
//             <div className="border-t border-white w-[1100px] mx-auto mb-8"></div>

//             {/* Main Content Section */}
//             <div className="flex justify-between items-center">
//               {/* Left Side: Text and Steps */}
//               <div className="space-y-4 2xl:ml-[84px] 2xl:mt-[-110px]">
//                 {/* Step 1 */}
//                 <div className="flex items-start space-x-3 ml-[500px]">
//                   <span className="text-5xl font-bold w-[42px] h-[40]">1</span>
//                   <p className="text-[28px] mt-2">Make sure that your printer is powered on</p>
//                 </div>
//                 {/* Step 2 */}
//                 <div className="flex items-start space-x-3 ml-[500px]">
//                   <span className="text-5xl font-bold w-[50px] h-[40px]">2</span>
//                   <p className="text-[28px] mt-2">Click Install Setup & driver to complete your printer setup</p>
//                 </div>
//                 <Link href="./install/process">
//                 <button className="install border border-white mt-8 bg-white w-[230px] h-[50px] text-[#007DBA] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
//       <h1 className='text-[16px]'>Install Setup & Drivers</h1>
//     </button>         </Link>
//               </div>

//               {/* Printer and Devices Image */}
//               <div className="relative z-10 mt-12">
//                 <img
//                   src="https://wingscarepro.com/setup/resources/printer_images/OTHER-PRINTERS/290x245.png"  // Replace with actual path
//                   alt="Printer setup devices"
//                   width={230}
//                   height={252}
//                   className="object-contain 2xl:ml-[751px]"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Additional content */}
//       </div>
//       <div className="flex flex-col items-center">
//   <h1 className="mt-[30px] ml-[-592px] text-[16px]">Also available on:</h1>
//   <img 
//     src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" 
//     className="h-[50px] mt-4 ml-[-406px]" 
//     alt="Available on"
//   />
// </div>
//       <Storepage />
//     </>
//   );
// }

// export default Printersearch;


// "use client"; // This should be at the top of the file

// import Storepage from '@/app/components/Storepage';
// import Link from 'next/link';

// function Printersearch() {
//   return (
//     <>
//       <div className="h-[530px] mt-[80px] bg-[#ED3237]">
//         <section
//           className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[530px]"
//           // style={{
//           //   backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
//           // }}
//         >
//           <div className="absolute inset-0 opacity-80"></div>

//           {/* Main content */}
//           <div className="relative z-10 text-white 2xl:ml-[-392px]">
//             <h1 className="text-[54px] mb-4 xl:ml-[-247px] 2xl:ml-[5px]">Complete setup using Professionals Help</h1>
//             <div className="border-t border-white w-[1100px] mx-auto mb-8 mt-[-19px] xl:ml-[-4px]"></div>

//             {/* Main Content Section */}
//             <div className="flex flex-col lg:flex-row justify-between items-start">
//               {/* Left Side: Text and Steps */}
//               <div className="space-y-4 lg:w-1/2 lg:pr-8 2xl:ml-[34px]">
//                 {/* Step 1 */}
//                 <div className="flex items-center space-x-3">
//                   <span className="text-[35px] w-[41px] h-[58px]">1.</span>
//                   <p className="text-[34px] whitespace-nowrap">Make sure that your printer is powered on</p>
//                 </div>
//                 {/* Step 2 */}
//                 <div className="flex items-center space-x-3">
//                   <span className="text-[34px] w-[50px] h-[40px]">2.</span>
//                   <p className="text-[34px] whitespace-nowrap 2xl:ml-[5px] 2xl:mt-[9px]">Click Install Setup & driver to complete your printer setup</p>
//                 </div>
//                 <Link href="./canoninstall/process">
//                   <button className="install border border-white mt-8 bg-white w-[230px] h-[50px]  2xl:ml-[-189px] xl:ml-[-301px] py-2 px-6 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300 relative overflow-hidden">
//                     <h1 className='text-[16px] text-black'>Install Setup & Drivers</h1>
//                   </button>
//                 </Link>
//               </div>

//               {/* Printer and Devices Image */}
//               <div className="relative z-10 mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
//                 <img
//                   src="https://wingscarepro.com/setup/resources/printer_images/OTHER-PRINTERS/290x245.png"  // Replace with actual path
//                   alt="Printer setup devices"
//                   width={316}
//                   height={252}
//                   className="object-contain 2xl:mr-[-1041px] "
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Additional content */}
//         <div className="flex flex-col items-center">
//           <h1 className="mt-[30px] ml-[-592px] text-[16px]">Also available on:</h1>
//           <img 
//             src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" 
//             className="h-[50px] mt-4 ml-[-406px] " 
//             alt="Available on"
//           />
//         </div>
//       </div>
//       <Storepage/>

//     </>
//   );
// }

// export default Printersearch;



// pages/index.j
// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState,useEffect } from 'react';

// export default function Printersearch() {
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [showErrorPage, setShowErrorPage] = useState(false);

//   const handleClosePopup = () => {
//     setPopupVisible(false);
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault(); // Prevent the default link behavior (URL change)
//     setPopupVisible(true); // Show the popup
//   };

//   useEffect(() => {
//     if (isPopupVisible) {
//       // Set a timer to show the error page after 15 seconds
//       const timer = setTimeout(() => {
//         setShowErrorPage(true); // Show error page after 15 seconds
//         setPopupVisible(false); // Optionally hide the popup after the error
//       }, 15000); // 15 seconds

//       return () => clearTimeout(timer); // Clear the timer if the component is unmounted or state changes
//     }
//   }, [isPopupVisible]);

//   if (showErrorPage) {
//     // This is the error page after 15 seconds of spinner
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//         <div className="mb-6 flex justify-center">
//           <Image
//             src="/error.png"  // Make sure error.png exists in your public folder
//             alt="Printer Error"
//             width={892}
//             height={632}
//           />
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className={`h-[530px] ${isPopupVisible ? "blur-sm" : ""}`}>
//     <div className="flex flex-col items-center bg-white min-h-screen p-6 text-gray-700 font-sans">
//       {/* Canon Header */}
//       <div className="flex flex-col items-start w-full max-w-4xl mb-6">
//         {/* Canon Logo */}
//         <Image
//           src="/canonlogo.png"
//           alt="Canon Logo"
//           className="w-24"
//           width={120} // Adjust as per your design
//           height={40}
//         />

//         {/* "Return to Selection Screen" Section */}
//         <div className="flex items-center space-x-2 mt-2">
//           {/* Icon */}
//           <Image
//             src="/arrowicon.jpg" // Replace with the actual path to your icon
//             alt="Important Icon"
//             width={30} // Adjust icon width
//             height={30} // Adjust icon height
//           />
//           {/* "Return to Selection Screen" Text */}
//           <span className="font-bold text-[#666666] text-[16px]">
//             Return to Selection Screen
//           </span>
//         </div>
//         <div className="flex items-center bg-gray-200 h-[73px] w-[895px] mt-[10px]">
//             <Image
//             src="/redribbon.png" alt="Ribbon"
//             height={70}
//             width={69}
//              />
            
//             <h1 className="text-xl font-bold">Select Product Name</h1>
//           </div>
//       </div>


//       {/* Setup Section */}
//       <div className="w-full max-w-4xl bg-white p-6 shadow-md border border-gray-300 rounded-md">
//         <h3 className="text-[20px] font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
//           Setup
//         </h3>

//         {/* Important Header Section */}
//         <div className="flex items-center space-x-2 mb-4">
//           {/* Icon */}
//           <Image
//             src="/important.gif" // Replace with the actual path to your icon
//             alt="Important Icon"
//             width={36}
//             height={12}
//           />
//           {/* "Important" Label */}
//           <span className="font-bold text-red-600 text-[19px]">Important</span>
//         </div>

//         {/* Important Text Section */}
//         <div className="bg-[#FFEEEE] text-[#000000] p-4 rounded-md text-sm">
//           <p className='text-[16px]'>
//             If you are using <span className="font-semibold">Windows 11 in S mode</span>, <span className="font-semibold">Windows 10 in S mode</span>, or <span className="font-semibold">Windows on Arm</span>, see&nbsp;
//             <Link href="#" className="text-[#0000CC] underline">
//               Setup - Windows 11 in S mode / Windows 10 in S mode, Windows on Arm
//             </Link>
//             .
//           </p>
//         </div>

//         {/* Instructions */}
//         <p className="mt-4 mb-4 text-gray-700">Click Download to start setup.</p>
//         <p className="mb-6 text-gray-700">Follow the on-screen instructions to complete the setup.</p>

//         {/* Download Button */}
//         <div className="flex justify-center">
//           <button
//             onClick={handleButtonClick}
//             className="flex items-center justify-center bg-gray-200 text-lg font-semibold text-gray-700 rounded shadow hover:bg-gray-300 transition"
//             style={{ width: '280px', height: '89px' }}
//           >
//             <Image
//               src="/downloadicon.gif" // Replace with actual path to your icon
//               height={54}
//               width={66}
//               alt="Download Icon"
//             />
//             <span className="ml-2 text-[22px] text-[#686868]">Download</span>
//           </button>
//           {isPopupVisible && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white w-[596px] h-[443px] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
//             <h2 className="text-[28px] font-semibold mb-4">Gathering device details...</h2>
//             <svg
//               className="animate-spin duration-[15s] h-[40px]" // Spinner rotates for 15 seconds
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//               ></path>
//             </svg>
//         </div>
//       </div>
//           )}

//       {/* Page Top Link */}
//       {/* <div className="w-full max-w-4xl flex justify-end mt-4">
//         <Link href="#" className="text-gray-500 text-sm underline">
//           Page top
//         </Link>
//       </div> */}
    
   
//   );
// }


"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ErrorCanon from './process/error/page';

export default function Printersearch() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior (URL change)
    setPopupVisible(true); // Show the popup
  };

  useEffect(() => {
    if (isPopupVisible) {
      // Set a timer to show the error page after 15 seconds
      const timer = setTimeout(() => {
        setShowErrorPage(true); // Show error page after 15 seconds
        setPopupVisible(false); // Optionally hide the popup after the error
      }, 15000); // 15 seconds

      return () => clearTimeout(timer); // Clear the timer if the component is unmounted or state changes
    }
  }, [isPopupVisible]);

  if (showErrorPage) {
    // This is the error page after 15 seconds of spinner
    return (
      <ErrorCanon/>
     
    );
  }

  return (
    <div className="flex flex-col items-center bg-white min-h-screen p-6 text-gray-700 font-sans">
      {/* Canon Header */}
      <div className="flex flex-col items-start w-full max-w-4xl mb-6">
        {/* Canon Logo */}
        <Image
          src="/canonlogo.png"
          alt="Canon Logo"
          className="w-24"
          width={120} // Adjust as per your design
          height={40}
        />

        {/* "Return to Selection Screen" Section */}
        <div className="flex items-center space-x-2 mt-2">
          {/* Icon */}
          <Image
            src="/arrowicon.jpg" // Replace with the actual path to your icon
            alt="Important Icon"
            width={30} // Adjust icon width
            height={30} // Adjust icon height
          />
          {/* "Return to Selection Screen" Text */}
          <span className="font-bold text-[#666666] text-[16px]">
            Return to Selection Screen
          </span>
        </div>
        <div className="flex items-center bg-gray-200 h-[73px] w-[895px] mt-[10px]">
          <Image
            src="/redribbon.png" alt="Ribbon"
            height={70}
            width={69}
          />
          <h1 className="text-xl font-bold">Select Product Name</h1>
        </div>
      </div>

      {/* Setup Section */}
      <div className="w-full max-w-4xl bg-white p-6 shadow-md border border-gray-300 rounded-md">
        <h3 className="text-[20px] font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
          Setup
        </h3>

        {/* Important Header Section */}
        <div className="flex items-center space-x-2 mb-4">
          {/* Icon */}
          <Image
            src="/important.gif" // Replace with the actual path to your icon
            alt="Important Icon"
            width={36}
            height={12}
          />
          {/* "Important" Label */}
          <span className="font-bold text-red-600 text-[19px]">Important</span>
        </div>

        {/* Important Text Section */}
        {/* <div className="bg-[#FFEEEE] text-[#000000] p-4 rounded-md text-sm">
          <p className='text-[16px]'>
            If you are using <span className="font-semibold">Windows 11 in S mode</span>, <span className="font-semibold">Windows 10 in S mode</span>, or <span className="font-semibold">Windows on Arm</span>, see&nbsp;
            <Link href="#" className="text-[#0000CC] underline">
              Setup - Windows 11 in S mode / Windows 10 in S mode, Windows on Arm
            </Link>
            .
          </p>
        </div> */}

        {/* Instructions */}
        <p className="mt-4 mb-4 text-black font-bold text-[16px]">Click Download to start setup.</p>
        <p className="mb-6 text-black font-bold text-[16px]">Follow the on-screen instructions to complete the setup.</p>

        {/* Download Button */}
        <div className="flex justify-center mb-[80px]">
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-center bg-gray-200 text-lg font-semibold text-gray-700 rounded shadow hover:bg-gray-300 transition"
            style={{ width: '280px', height: '89px' }}
          >
            <Image
              src="/downloadicon.gif" // Replace with actual path to your icon
              height={54}
              width={66}
              alt="Download Icon"
            />
            <span className="ml-2 text-[22px] text-[#686868]">Download</span>
          </button>
        </div>

        {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[596px] h-[443px] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-[28px] font-semibold mb-4">Gathering device details...</h2>
            {/* <svg
              className="animate-spin duration-[15s] h-[40px]" // Spinner rotates for 15 seconds
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path> */}
            {/* </svg> */}

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        {/* Top Section: Icons and Animated Progress Bar */}
        <div className="flex items-center justify-between">
          {/* Left Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/redcanon.png" // Replace with your actual path
              alt="HP Smart"
              width={150}
              height={150}
            />
          </div>

          {/* Animated Progress Bar */}
          <div className="w-[100px] h-[23px] mx-4">
            <div className="relative w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="absolute inset-0 h-full animate-progress"
                style={{
                  background: "linear-gradient(to right, #007dbd, #007dbd 80%, #ffffff 20%)",
                }}
              ></div>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/blackprinter.gif" // Replace with your actual path
              alt="Printer"
              width={131}
              height={131}
            />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-[#212529] text-[21px] font-bold">
          Please wait... Driver and software installing
        </p>
      </div>
          </div>
        </div>
      )}
          
      </div>
    </div>
  );
}




