// "use client";
// // import './search.css';
// import Image from 'next/image';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import JivoChat from '@/app/Jivochat';

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);
//   const router = useRouter();

//   const printerModels = [
//     'HP ENVY 120 e-All-in-One Printer series',
//     'HP ENVY 4500 e-All-in-One Printer series',
//     'HP ENVY 4510 All-in-One Printer series',
//     'HP ENVY 4520 e-All-in-One Printer series',
//     'HP ENVY 5000 All-in-One Printer series',
//     'HP ENVY 5500 e-All-in-One Printer series',
//     'HP ENVY 5540 All-in-One Printer series',
//     'HP ENVY 5600 e-All-in-One Printer series',
//     'HP ENVY 7600 e-All-in-One Printer series',
//     'HP ENVY Photo 6200 All-in-One Printer series',
//     'HP Deskjet D1360 Printer series',
//     'HP Deskjet Ink Advantage Ultra 4800 series',
//     'HP DeskJet Ink Advantage 2800 All-in One Printer series',
//     'HP DeskJet Ink Advantage 5200 All-in-One Printer series',
//     'HP Deskjet D1330 Printer series',
//     'HP DeskJet 2700 All-in-One Printer series',
//     'HP Laser NS MFP 1005 Printer series',
//     'HP Neverstop Laser MFP 1200 Printer series',
//     'HP LaserJet  Pro M1212nf Multifunction Printer series',
//     'HP Officejet Pro 8100 ePrinter Series',
//     'HP Officejet Pro 8600 e-All-in-One Printer series-N911',
//     'HP Color Laser MFP 170 Printer series',
//     'HP Color LaserJet Pro M281 Multifunction Printer series',



//   ];

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     setSearchTerm(model);  // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown
//   };

//   const handleSearchClick = () => {
//     if (searchTerm) {
//       const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
//       router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#ececec]">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md h-[70px] mt-[10px]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <a href="#" className="text-xl font-bold text-gray-800">
//                 <img src="https://www.qwebcare.com/help/images/hp-logo.gif" alt="HP Logo" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="flex items-center justify-center py-20 mt-[-10px]">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//           {/* Left Side: Text Content */}
//           <div className="text-left md:w-1/2">
//             <h1 className="text-3xl md:text-4xl text-[45px] mb-4 w-[1100px] h-[52px]">Set up your printer at 123.hp.com</h1>
//             <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px]  text-[#1c7a17] mt-[-10px]">Welcome to HP Software and Drivers</p>
//             <p className="text-lg md:text-xl mb-4 h-[40px] w-[730px] text-[30px] mt-[-10px]">Download and install your printer software</p>
//             <p className="mb-6 h-[63px] w-[730px] text-[20px] mt-[-10px]">Enter your HP ENVY, OfficeJet, LaserJet or DeskJet model number.</p>

//             <div className="relative mb-8 mt-[-30px]">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder='Enter exact model number or name. Ex: ENVY 4520'
//                 className="border border-gray-300 p-3 rounded-l-lg w-[394px] max-w-md"
//               />
//               <button
//                 onClick={handleSearchClick}
//                 className="bg-[#0096D6] text-white px-4 py-3 rounded-r-lg w-[130px] ml-[20px]"
//               >
//                 Search
//               </button>

//               {filteredModels.length > 0 && (
//                 <ul className="absolute left-0 mt-1 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                   {filteredModels.map((model) => (
//                     <li
//                       key={model}
//                       onClick={() => handleModelClick(model)}
//                       className="cursor-pointer p-2 hover:bg-gray-100"
//                     >
//                       {model}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="text-sm text-[#007DBA] mb-8">
//               <a href="#" className="block mb-2">Where's the model number?</a>
//               <a href="#">My device is not listed</a>
//             </div>

//             <div className="text-sm text-[#007DBA] mt-[200px]">
//               <a href="#">United Kingdom - English</a>
//             </div>
//           </div>

//           {/* Right Side: Image */}
//           <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//             <Image 
//               src="/picture.png" 
//               alt="Printers" 
//               height={430}
//               width={430}
//               className="max-w-lg  mr-[-405px] object-cover"
//             />

//           </div>
//         </div>
//       </div>
//       <JivoChat/>
//     </div>
//   );
// }



// "use client";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// function Home() {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);

//   const printerModels = [
//     'HP OfficeJet Pro 9010 All-in-One Printer',
//     'HP OfficeJet Pro 9000 Series',
//     'HP OfficeJet Pro 9010e All-in-One Printer',
//     'HP OfficeJet Pro 9015 All-in-One Printer',
//     'HP OfficeJet Pro 9014 All-in-One Printer',
//     'HP OfficeJet Pro 9018 All-in-One Printer',
//     'HP ENVY 120 e-All-in-One Printer series',
//     'HP ENVY 4500 e-All-in-One Printer series',
//     'HP ENVY 4510 All-in-One Printer series',
//     'HP ENVY 4520 e-All-in-One Printer series',
//     'HP ENVY 5000 All-in-One Printer series',
//     'HP ENVY 5500 e-All-in-One Printer series',
//     'HP ENVY 5540 All-in-One Printer series',
//     'HP ENVY 5600 e-All-in-One Printer series',
//     'HP ENVY 7600 e-All-in-One Printer series',
//     'HP ENVY Photo 6200 All-in-One Printer series',
//     'HP Deskjet D1360 Printer series',
//     'HP Deskjet Ink Advantage Ultra 4800 series',
//     'HP DeskJet Ink Advantage 2800 All-in-One Printer series',
//     'HP DeskJet Ink Advantage 5200 All-in-One Printer series',
//     'HP Deskjet D1330 Printer series',

//   ];

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     setSearchTerm(model);  // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown
//     const searchPath = model.replace(/\s+/g, '-').replace(/\//g, '-');
//     router.push(`./Pages/install?model=${encodeURIComponent(searchPath)}`);
//   };

//   return (
//     <div className="h-[409px] mt-[80px]">
//       <section 
//         className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center  h-[409px]"
//         style={{
//           backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
//         }}
//       >
//         <div className="absolute inset-0 opacity-80"></div>
//         <div className="relative z-10 text-white 2xl:mt-[142px] xl:mt-[116px] 2xl:ml-[-584px] xl:ml-[-338px]">
//           <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[-267px] xl:ml-[-236px]">Set up your Printer</h1>
//           <p className="mt-[35px] text-lg text-[24px] xl:ml-[74px] 2xl:ml-[46px]">Enter your printer name and model number to get the right drivers for your printer.</p>

//           {/* Input Section */}
//           <div className="mt-8 flex space-x-4 justify-center">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Enter your product name here. For example: 'OfficeJet 9010'"
//               className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700 2xl:ml-[-19px] xl:ml-[-19px]"
//             />
//             <button 
//               onClick={() => handleModelClick(searchTerm)} // Use the search term
//               className="bg-gray-300 text-gray-900 px-6 py-2 rounded-md w-[100px] h-[48px]"
//             >
//               Search
//             </button>
//           </div>

//           {/* Dropdown for filtered models */}
//           {filteredModels.length > 0 && (
//             <ul className="absolute left-0 mt-1 w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg z-10 2xl:ml-[24px] xl:ml-[36px] text-[#007DBA]">
//               {filteredModels.map((model) => (
//                 <li
//                   key={model}
//                   onClick={() => handleModelClick(model)}
//                   className="cursor-pointer p-2 hover:bg-gray-100"
//                 >
//                   {model}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="z-10 mt-12">
//           <img
//             src="https://wingscarepro.com/setup/resources/assets/img/defaultPrinterSetup.png"  
//             alt="Printer setup devices"
//             width={350}
//             height={196}
//             className="object-contain 2xl:ml-[751px] xl:ml-[674px]"
//           />
//         </div>
//       </section>
//       <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px]">Install Smart driver and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.</h1>
//       <h1 className="mt-[30px] ml-[369px]">Need additional help with set-up? Visit <span className="text-[#007DBA]">Support</span></h1>
//     </div>
//   );
// }

// export default Home;



// "use client";
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// function Home() {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredModels, setFilteredModels] = useState([]);

//   const printerModels = [
//     'Canon PIXMA TR8620 All-in-One Printer',
// 'Canon PIXMA TS9120 Wireless All-in-One Printer',
// 'Canon imageCLASS MF445dw All-in-One Laser Printer',
// 'Canon PIXMA G6020 MegaTank All-in-One Printer',
// 'Canon PIXMA TS5320 Wireless All-in-One Printer',
// 'Canon imageCLASS MF269dw All-in-One Laser Printer',
// 'Canon PIXMA TS8320 All-in-One Printer',
// 'Canon PIXMA TR150 Wireless Portable Printer',
// 'Canon PIXMA G7020 MegaTank All-in-One Printer',
// 'Canon imageCLASS MF741Cdw All-in-One Color Laser Printer',
// 'Canon PIXMA MG3620 All-in-One Printer',
// 'Canon PIXMA TR7540 All-in-One Printer',
// 'Canon imageCLASS MF445dw All-in-One Laser Printer',
// 'Canon PIXMA TS6120 Wireless All-in-One Printer',
// 'Canon PIXMA G7020 MegaTank All-in-One Printer',
// 'Canon PIXMA TS9521C All-in-One Printer',
//   ]

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     if (value) {
//       const filtered = printerModels.filter((model) =>
//         model.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredModels(filtered);
//     } else {
//       setFilteredModels([]);
//     }
//   };

//   const handleModelClick = (model) => {
//     setSearchTerm(model); // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown after selection
//   };

//   const handleSearchClick = () => {
//     if (searchTerm) {
//       const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
//       router.push(`./canon/canoninstall?model=${encodeURIComponent(searchPath)}`); // Navigate to the install page
//     } else {
//       alert("Please select or enter a model before searching."); // Alert if the input is empty
//     }
//   };

//   return (
//     <div className="h-[409px] mt-[80px]">
//       <section 
//         className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[409px]"
//         style={{
//           backgroundImage: "url('https://cdn.shopify.com/s/files/1/0253/6459/4751/files/canon-page-header.jpg?v=1672680862')"
//         }}
//       >
//         <div className="absolute inset-0 opacity-80"></div>
//         <div className="relative z-10 text-white 2xl:mt-[142px] xl:mt-[116px] 2xl:ml-[-825px] xl:ml-[-567px] ">
//           <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[-221px] xl:ml-[-309px]">Set up Canon printer</h1>
//           <p className="mt-[35px] text-[27px] text-[24px] xl:ml-[324px] 2xl:ml-[344px]">Enter your printer name and model number to get the right drivers for your printer.</p>

//           {/* Input Section */}
//           <div className="mt-8 flex space-x-4 justify-center">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Enter your product name here. For example: 'OfficeJet 9010'"
//               className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700 2xl:ml-[22px] xl:ml-[-19px]"
//             />
//             <button 
//               onClick={handleSearchClick} // Use the search click function  
//               className="bg-gray-300 text-gray-900 rounded-md w-[100px] h-[48px] 2xl:ml-[40px] "
//               style={{ marginLeft: '41px' }}
//             >
//               Search
//             </button>
//           </div>

//           {/* Dropdown for filtered models */}
//           {filteredModels.length > 0 && (
//             <ul className="absolute left-0 mt-1 w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg z-10 2xl:ml-[344px] xl:ml-[311px] text-black">
//               {filteredModels.map((model) => (
//                 <li
//                   key={model}
//                   onClick={() => handleModelClick(model)} // Set model on click
//                   className="cursor-pointer p-2 hover:bg-gray-100"
//                 >
//                   {model}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="relative z-10 mt-12 ml-auto">
//           <img
//             src="https://onesomethis.online/assets/image/conn.png"  
//             alt="Printer setup devices"
//             width={450}
//             height={270}
//             className="object-contain 2xl:mr-[436px] xl:mr-[202px] 2xl:mr-[232px]"
//           />
//         </div>
//       </section>
//       <h1 className="text-[18px] w-[832px] h-[51px] ml-[369px] mt-[100px]">Install Smart driver and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.</h1>
//       <h1 className="mt-[30px] ml-[369px]">Need additional help with set-up? Visit <span className="text-[#007DBA]">Support</span></h1>
//     </div>
//   );
// }

// export default Home;












// "use client"; // Only if you're using Next.js
// import { useState } from "react";
// import {
//   FaCog,
//   FaFileAlt,
//   FaDownload,
//   FaEnvelope,
//   FaQuestionCircle,
// } from "react-icons/fa";

// const CanonProductPage = () => {
//   const [selectedModel, setSelectedModel] = useState("");
//   const history = useHistory(); // For page navigation (React Router)

//   // List of model numbers (example models)
//   const modelNumbers = [
//     "TS9030",
//     "TS9040",
//     "TS9050",
//     "TS9060"
//   ];

//   // Handle model selection from dropdown
//   const handleModelChange = (e) => {
//     setSelectedModel(e.target.value);
//   };

//   // Handle the "Go" button click to navigate to another page
//   const handleGoClick = () => {
//     if (selectedModel) {
//       // Navigate to another page, passing the model number as a URL parameter
//       history.push(`/product/${selectedModel}`);
//     }
//   };

//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => setIsExpanded(!isExpanded);

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Canon Header with logo and search */}
//       <header className="border-b py-4 bg-gray-100">
//         <div className="container mx-auto flex justify-between items-center">
//           <img
//             src="https://global.canon/en/corporate/logo/img/logo_01.png"
//             alt="Canon Logo"
//             className="w-32"
//           />

//           <div className="relative flex items-center">
//             <span className="mr-4 text-gray-600 text-sm">
//               Site Usage and Cookies
//             </span>
//             <div className="relative flex items-center">
//               <input
//                 type="text"
//                 placeholder="Enter your search term..."
//                 className="border px-3 py-2 rounded-full w-64"
//               />
//               <button className="absolute right-2">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3UlvlM9Lhbds6PCpYtTsujAlI10kzGp9hw&s"
//                   alt="Search Icon"
//                   className="w-5 h-5"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navbar Links with Icons */}
//       <nav className="bg-white py-2">
//         <div className="container mx-auto flex justify-between text-sm items-center">
//           <div className="flex items-center space-x-2">
//             <FaCog className="text-gray-600 w-5 h-5" />
//             <a href="#" className="px-4 py-2 hover:underline">Setup</a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaFileAlt className="text-gray-600 w-5 h-5" />
//             <a href="#" className="px-4 py-2 hover:underline">Manual</a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaDownload className="text-gray-600 w-5 h-5" />
//             <a href="#" className="px-4 py-2 hover:underline">Software</a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaEnvelope className="text-gray-600 w-5 h-5" />
//             <a href="#" className="px-4 py-2 hover:underline">
//               Getting Acquainted
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaQuestionCircle className="text-gray-600 w-5 h-5" />
//             <a href="#" className="px-4 py-2 hover:underline">FAQ</a>
//           </div>
//         </div>
//       </nav>

//       {/* Colored Line Section */}
//       <div className="container mx-auto flex space-x-4 border-b mb-6">
//         <div className="h-2 w-full bg-yellow-500"></div>
//         <div className="h-2 w-full bg-red-400"></div>
//         <div className="h-2 w-full bg-blue-400"></div>
//         <div className="h-2 w-full bg-purple-400"></div>
//         <div className="h-2 w-full bg-green-400"></div>
//       </div>

//       <main className="container mx-auto py-6">
//         <div className="flex items-center text-red-600 text-sm mb-4 cursor-pointer">
//           <img src="https://ij.manual.canon/ij/webmanual/WebPortal/PTL/images/others/back_arrow.gif" alt="Back Arrow" />
//           Return to Top
//         </div>

//         <section className="bg-white border rounded-md shadow-sm p-6">
//           <div className="flex items-center bg-gray-200 h-[45px]">
//             <img src="https://ij.manual.canon/ij/webmanual/WebPortal/PTL/images/others/ptl-ribbon.png" alt="Ribbon" />
//             <h1 className="text-xl font-bold">Select Product Name</h1>
//           </div>

//           <div className="mt-2">
//             <p className="text-sm mb-4">
//               Search for your product name or select from the list.
//             </p>
//             <p className="text-sm mb-4">
//               If the product you are looking for cannot be found, reselect your
//               region.
//             </p>
//           </div>

//           <div className="mb-4">
//             <select className="border border-gray-300 px-3 py-2 rounded-md w-64">
//               <option>U.S.A</option>
//               <option>North America</option>
//               <option>Europe</option>
//             </select>
//           </div>

//           <div className="h-[179px] flex flex-col items-center bg-gray-100 w-full pt-4">
//             <div className="w-full max-w-md px-4 flex flex-col items-center mt-[44px]">
//               <div className="flex items-center space-x-2 w-[920px] mb-2">
//                 <input
//                   type="text"
//                   placeholder="Example: TS9030"
//                   className="border border-gray-300 px-4 py-2 rounded-md flex-grow"
//                 />
//                 <button className="bg-gray-500 text-white px-4 py-2 rounded-md whitespace-nowrap w-[60px]">
//                   Go
//                 </button>
//               </div>
//               <div className="flex justify-center items-center text-center">
//                 <a
//                   href="#"
//                   className="text-sm text-blue-600 inline-flex items-center justify-center"
//                 >
//                   <img
//                     src="https://ij.manual.canon/ij/webmanual/WebPortal/PTL/images/common/hint.png"
//                     alt="Info"
//                     className="w-4 h-4 mr-1"
//                   />
//                   Where to find your product name
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 w-full">
//           <h1 className="text-lg font-semibold mb-4">CanoScan</h1>
//           <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
//             <button
//               onClick={toggleExpand}
//               className="flex items-center w-full px-4 py-2"
//             >
//               <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
//                 <span className="text-xl font-semibold">
//                   {isExpanded ? "-" : "+"}
//                 </span>
//               </div>
//               <span className="font-medium ml-[15px] ">LiDE series</span>

//             </button>
//           </div>

//           {isExpanded && (
//             <div className="flex space-x-4 mt-4 ml-[104px]">
//               <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">
//                 LiDE 400
//               </button>
//               <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">
//                 LiDE 300
//               </button>
//             </div>
//           )}
        
//         </div>

//         </section>

//         {/* Toggleable Container */}
//              </main>
//     </div>
//   );
// };

// export default CanonProductPage;



"use client"; // Only if you're using Next.js\\
import Image from "next/image";
import { useState } from "react";
import { FaCog, FaFileAlt, FaDownload, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CanonProductPage = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const router = useRouter();

  const modelNumbers = [
    "PIXMA TS9120",
  "PIXMA TS8320",
  "PIXMA TS6220",
  "PIXMA TR8520",
  "PIXMA MG3620",
  "PIXMA G6020",
  "PIXMA iP110",
  "MAXIFY MB2120",
  "MAXIFY MB2720",
  "MAXIFY GX7020",
  "MAXIFY GX6020",
  "MAXIFY iB4120",
  "imageCLASS MF743Cdw",
  "imageCLASS MF445dw",
  "imageCLASS MF644Cdw",
  "imageCLASS LBP6030w",
  "imageCLASS MF3010",
  "imageCLASS D1620",
  "imagePROGRAF PRO-1000",
  "imagePROGRAF PRO-300",
  "imagePROGRAF TM-300",
  "imagePROGRAF TA-20",
  "imagePROGRAF PRO-2100",
  "SELPHY CP1300",
  "SELPHY CP1200",
  "SELPHY CP910",
  "SELPHY QX10",
  "CanoScan LiDE 300",
  "CanoScan LiDE 400",
  "CanoScan 9000F Mark II"
  ];

  // Filter model numbers based on input
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSelectedModel(input);
    if (input) {
      const suggestions = modelNumbers.filter((model) =>
        model.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredModels(suggestions);
    } else {
      setFilteredModels([]);
    }
  };

  // Handle model selection from dropdown
  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setFilteredModels([]);
  };

  // Handle "Go" button click
  const handleGoClick = () => {
    if (selectedModel) {
      // Navigate to the install page with the selected model number as a query parameter
      router.push(`./canon/canoninstall?model=${encodeURIComponent(selectedModel)}`);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white min-h-screen">
      {/* Canon Header with logo and search */}
      <header className="border-b py-4 bg-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="https://global.canon/en/corporate/logo/img/logo_01.png"
            alt="Canon Logo"
            className="w-32"
          />
          <div className="relative flex items-center">
            <span className="mr-4 text-gray-600 text-sm">Site Usage and Cookies</span>
          </div>
        </div>
      </header>

      {/* Navbar Links with Icons */}
      <nav className="bg-white py-2">
        <div className="container mx-auto flex justify-between text-sm items-center">
          <div className="flex items-center space-x-2">
            <FaCog className="text-gray-600 w-5 h-5" />
            <a href="#" className="px-4 py-2 hover:underline">Setup</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaFileAlt className="text-gray-600 w-5 h-5" />
            <a href="#" className="px-4 py-2 hover:underline">Manual</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaDownload className="text-gray-600 w-5 h-5" />
            <a href="#" className="px-4 py-2 hover:underline">Software</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-600 w-5 h-5" />
            <a href="#" className="px-4 py-2 hover:underline">Getting Acquainted</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaQuestionCircle className="text-gray-600 w-5 h-5" />
            <a href="#" className="px-4 py-2 hover:underline">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Colored Line Section */}
      <div className="container mx-auto flex space-x-4 border-b mb-6">
        <div className="h-2 w-full bg-yellow-500"></div>
        <div className="h-2 w-full bg-red-400"></div>
        <div className="h-2 w-full bg-blue-400"></div>
        <div className="h-2 w-full bg-purple-400"></div>
        <div className="h-2 w-full bg-green-400"></div>
      </div>

      <main className="container mx-auto py-6">
        <div className="flex items-center text-red-600 text-sm mb-4 cursor-pointer">
          <img src="https://ij.manual.canon/ij/webmanual/WebPortal/PTL/images/others/back_arrow.gif" alt="Back Arrow" />
          Return to Top
        </div>

        <section className="bg-white border rounded-md shadow-sm p-6">
          <div className="flex items-center bg-gray-200 h-[45px]">
            <Image
            src="/redribbon.png" alt="Ribbon" 
            height={73}
            width={58}
            
            />
            <h1 className="text-xl font-bold">Select Product Name</h1>
          </div>

          <div className="mt-2">
            <p className="text-sm mb-4">Search for your product name or select from the list.</p>
            <p className="text-sm mb-4">If the product you are looking for cannot be found, reselect your region.</p>
          </div>

          <div className="mb-4">
            <select className="border border-gray-300 px-3 py-2 rounded-md w-64">
              <option>U.S.A</option>
              <option>North America</option>
              <option>Europe</option>
            </select>
          </div>

          <div className="h-[179px] flex flex-col items-center bg-gray-100 w-full pt-4">
            <div className="w-full max-w-md px-4 flex flex-col items-center mt-[44px]">
              <div className="flex items-center space-x-2 w-[920px] mb-2">
                {/* Input field */}
                <input
                  type="text"
                  value={selectedModel}
                  onChange={handleInputChange}
                  placeholder="Example: TS9030"
                  className="border border-gray-300 px-4 py-2 rounded-md flex-grow"
                />
                
                {/* Go Button */}
                <button
                  onClick={handleGoClick}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md whitespace-nowrap w-[60px]"
                >
                  Go
                </button>
              </div>

              {/* Model suggestions dropdown */}
              {filteredModels.length > 0 && (
                <ul className="border border-gray-300 bg-white w-[920px] rounded-md shadow-lg">
                  {filteredModels.map((model, index) => (
                    <li
                      key={index}
                      onClick={() => handleModelSelect(model)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {model}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-center items-center text-center mt-2">
                <a
                  href="#"
                  className="text-sm text-blue-600 inline-flex items-center justify-center"
                >
                  <img
                    src="https://ij.manual.canon/ij/webmanual/WebPortal/PTL/images/common/hint.png"
                    alt="Info"
                    className="w-4 h-4 mr-1"
                  />
                  Where to find your product name
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 w-full">
            <h1 className="text-lg font-semibold mb-4">CanoScan</h1>
            <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
              <button
                onClick={toggleExpand}
                className="flex items-center w-full px-4 py-2"
              >
                <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
                  <span className="text-xl font-semibold">
                    {isExpanded ? "-" : "+"}
                  </span>
                </div>
                <span className="font-medium ml-[15px]">LiDE series</span>
              </button>
            </div>

            {isExpanded && (
              <div className="flex space-x-4 mt-4 ml-[104px]">
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 400</button>
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 300</button>
              </div>
            )}
          </div>
          <div className="p-6 w-full">
            <h1 className="text-lg font-semibold mb-4">imagePROGRAF</h1>
            <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
              <button
                onClick={toggleExpand}
                className="flex items-center w-full px-4 py-2"
              >
                <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
                  <span className="text-xl font-semibold">
                    {isExpanded ? "-" : "+"}
                  </span>
                </div>
                <span className="font-medium ml-[15px]">LiDE series</span>
              </button>
            </div>

            {isExpanded && (
              <div className="flex space-x-4 mt-4 ml-[104px]">
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 400</button>
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 300</button>
              </div>
            )}
          </div>
          <div className="p-6 w-full">
            <h1 className="text-lg font-semibold mb-4">MAXIFY</h1>
            <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
              <button
                onClick={toggleExpand}
                className="flex items-center w-full px-4 py-2"
              >
                <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
                  <span className="text-xl font-semibold">
                    {isExpanded ? "-" : "+"}
                  </span>
                </div>
                <span className="font-medium ml-[15px]">LiDE series</span>
              </button>
            </div>

            {isExpanded && (
              <div className="flex space-x-4 mt-4 ml-[104px]">
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 400</button>
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 300</button>
              </div>
            )}
          </div>
          <div className="p-6 w-full">
            <h1 className="text-lg font-semibold mb-4">PIXUS/PIXMA</h1>
            <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
              <button
                onClick={toggleExpand}
                className="flex items-center w-full px-4 py-2"
              >
                <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
                  <span className="text-xl font-semibold">
                    {isExpanded ? "-" : "+"}
                  </span>
                </div>
                <span className="font-medium ml-[15px]">LiDE series</span>
              </button>
            </div>

            {isExpanded && (
              <div className="flex space-x-4 mt-4 ml-[104px]">
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 400</button>
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 300</button>
              </div>
            )}
          </div>
          <div className="p-6 w-full">
            <h1 className="text-lg font-semibold mb-4">imageCLASS</h1>
            <div className="border rounded-md hover:bg-red-50 2xl:w-[1348px] 2xl:ml-[40px] xl:w-[1077px] xl:ml-[40px] shadow-md">
              <button
                onClick={toggleExpand}
                className="flex items-center w-full px-4 py-2"
              >
                <div className="w-8 h-8 flex items-center justify-center border rounded-md bg-white shadow-sm">
                  <span className="text-xl font-semibold">
                    {isExpanded ? "-" : "+"}
                  </span>
                </div>
                <span className="font-medium ml-[15px]">LiDE series</span>
              </button>
            </div>

            {isExpanded && (
              <div className="flex space-x-4 mt-4 ml-[104px]">
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 400</button>
                <button className="bg-gray-300 rounded-md px-6 py-2 shadow-md">LiDE 300</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CanonProductPage;
