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
//     'Brother MFC-J995DW Inkjet All-in-One Printer',
// 'Brother MFC-L3770CDW Color Laser All-in-One Printer',
// 'Brother HL-L2350DW Compact Laser Printer',
// 'Brother MFC-L2710DW Compact Laser All-in-One Printer',
// 'Brother MFC-J6945DW INKvestment Tank Color All-in-One Printer',
// 'Brother HL-L6200DW Business Laser Printer',
// 'Brother MFC-J5330DW INKvestment Tank Color All-in-One Printer',
// 'Brother MFC-L5700DW Laser All-in-One Printer',
// 'Brother DCP-L2550DW Compact Laser All-in-One Printer',
// 'Brother MFC-L3750CDW Color Laser All-in-One Printer',
// 'Brother MFC-J995DW INKvestment Tank Color All-in-One Printer',
// 'Brother MFC-L6800DW Laser All-in-One Printer',
// 'Brother MFC-L8900CDW Color Laser All-in-One Printer',
// 'Brother HL-L2395DW All-in-One Laser Printer',
// 'Brother MFC-J6935DW INKvestment Tank Color All-in-One Printer',
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
//     setSearchTerm(model); // Set the input value to the selected model
//     setFilteredModels([]); // Clear the dropdown after selection
//   };

//   const handleSearchClick = () => {
//     if (searchTerm) {
//       const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
//       router.push(`./brother/brotherinstall?model=${encodeURIComponent(searchPath)}`); // Navigate to the install page
//     } else {
//       alert("Please select or enter a model before searching."); // Alert if the input is empty
//     }
//   };

//   return (
//     <div className="h-[409px] mt-[80px] bg-[#0D2EA0]">
//       <section 
//         className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center h-[409px]"
//         // style={{
//         //   backgroundImage: "url('https://wingscarepro.com/setup/resources/assets/css/page/resources/assets/img/top_background_image.png')"
//         // }}
//       >
//         <div className="absolute inset-0 opacity-80"></div>
//         <div className="relative z-10 text-white 2xl:mt-[142px] xl:mt-[116px] 2xl:ml-[-825px] xl:ml-[-567px] ">
//           <h1 className="text-4xl font-hp-simplified text-[44px] 2xl:ml-[-206px] xl:ml-[-309px]">Set up Brother Printer</h1>
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
//             height={296}
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


"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Middle from '../components/Middle';
import FooterSection from '../components/FooterSection';

export default function ManualsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);

  const printerModels = [
    'Brother MFC-J995DW Inkjet All-in-One Printer',
    'Brother MFC-L3770CDW Color Laser All-in-One Printer',
    'Brother HL-L2350DW Compact Laser Printer',
    'Brother MFC-L2710DW Compact Laser All-in-One Printer',
    'Brother MFC-J6945DW INKvestment Tank Color All-in-One Printer',
    'Brother HL-L6200DW Business Laser Printer',
    'Brother MFC-J5330DW INKvestment Tank Color All-in-One Printer',
    'Brother MFC-L5700DW Laser All-in-One Printer',
    'Brother DCP-L2550DW Compact Laser All-in-One Printer',
    'Brother MFC-L3750CDW Color Laser All-in-One Printer',
    'Brother MFC-J995DW INKvestment Tank Color All-in-One Printer',
    'Brother MFC-L6800DW Laser All-in-One Printer',
    'Brother MFC-L8900CDW Color Laser All-in-One Printer',
    'Brother HL-L2395DW All-in-One Laser Printer',
    'Brother MFC-J6935DW INKvestment Tank Color All-in-One Printer',
  ];

  // Handle search input change and filter models based on the search term
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filtered = printerModels.filter((model) =>
        model.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels([]);
    }
  };

  // Set the search term when a user clicks a model from the filtered list
  const handleModelClick = (model) => {
    setSearchTerm(model);
    setFilteredModels([]); // Clear the dropdown after selection
  };

  // Handle search button click to navigate to the install page
  const handleSearchClick = () => {
    if (searchTerm) {
      const searchPath = searchTerm.replace(/\s+/g, '-').replace(/\//g, '-');
      router.push(`./brother/brotherinstall?model=${encodeURIComponent(searchPath)}`);
    } else {
      alert("Please select or enter a model before searching.");
    }
  };

  const categories = [
    { name: "Inkjet Printer / Fax / MFC / DCP", icon: "🖨️" },
    { name: "Monochrome Laser Printer", icon: "⚫" },
    { name: "Color Printer (Laser / LED)", icon: "🌈" },
    { name: "Monochrome Laser Fax / MFC / DCP", icon: "📠" },
    { name: "Color Fax / MFC / DCP (Laser / LED)", icon: "📞" },
    { name: "High Speed Workgroup Printer", icon: "🚀" },
    { name: "P-touch (PT)", icon: "🔖" },
    { name: "Compact Label Printer", icon: "🏷️" },
    { name: "Label Printer (QL/LTD), Industrial Label Printer (TJ)", icon: "🖋️" },
    { name: "Home Sewing Machine", icon: "🧵" },
    { name: "Document Scanner", icon: "📄" },
    { name: "Creative Printer (HL)", icon: "🎨" },
    { name: "Ribbon Transfer FAX", icon: "📜" },
    { name: "Web Services", icon: "🌐" },
    { name: "Mobile Printer (RJ/PJ/MW)", icon: "📱" },
    { name: "Tape Creator", icon: "🖌️" },
    { name: "Stamp Creator", icon: "📬" },
    { name: "Print / Fax Servers", icon: "🔌" },
  ];

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Brother</h1>
          <nav className="text-sm space-x-4">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Product Registration
            </a>
            <a href="#" className="hover:underline">
              Visit www.brother-usa.com
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-6">
        <section className="bg-gray-100 border-t border-b py-6 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Manuals</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="search" className="font-medium text-gray-700">
              Search by Model Name
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Enter your model name"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearchClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          {filteredModels.length > 0 && (
            <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
              {filteredModels.map((model, index) => (
                <li
                  key={index}
                  onClick={() => handleModelClick(model)}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {model}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-2 text-sm text-gray-500">
            <a href="#" className="text-blue-600 hover:underline">
              How to identify your model name
            </a>
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Search by Product Category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 mb-4 text-3xl">
                  {category.icon}
                </div>
                <p className="text-sm text-center">{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    <div >
      <Middle/>
    </div>
    <FooterSection/>
    </>
  );
}
