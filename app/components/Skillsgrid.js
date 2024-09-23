// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMicrochip, faMobileAlt, faNetworkWired, faLaptop, faShieldAlt, faCloud, faBug, faTools } from '@fortawesome/free-solid-svg-icons';

// const SkillsGrid = () => {
//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           What can our <span className="text-red-500">CompTIA A+</span> Certified Technicians do?
//         </h2>
//         <p className="text-lg mb-8 text-gray-600">Let’s have a look at their skills:</p>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
//           {/* Card 1: Hardware */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faMicrochip} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Hardware</h3>
//               <p className="text-sm">Identify, connect, and use computer parts and devices for remote work support.</p>
//             </div>
//           </div>

//           {/* Card 2: Operating Systems */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faLaptop} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Operating Systems</h3>
//               <p className="text-sm">Install and support Windows, troubleshoot Mac, Chrome, Android, and Linux.</p>
//             </div>
//           </div>

//           {/* Card 3: Software Troubleshooting */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faBug} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Software Troubleshooting</h3>
//               <p className="text-sm">Fix software issues on PCs and mobile devices, addressing malware and security problems.</p>
//             </div>
//           </div>

//           {/* Card 4: Security */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Security</h3>
//               <p className="text-sm">Explain network types and protect against security risks like malware.</p>
//             </div>
//           </div>

//           {/* Card 5: Networking */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faNetworkWired} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Networking</h3>
//               <p className="text-sm">Troubleshoot real-world device and network problems.</p>
//             </div>
//           </div>

//           {/* Card 6: Troubleshooting */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faTools} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Troubleshooting</h3>
//               <p className="text-sm">Identify and protect against security issues for devices and networks.</p>
//             </div>
//           </div>

//           {/* Card 7: Mobile Devices */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faMobileAlt} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Mobile Devices</h3>
//               <p className="text-sm">Set up laptops and mobile devices for work and connectivity.</p>
//             </div>
//           </div>

//           {/* Card 8: Virtualization and Cloud Computing */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faCloud} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Virtualization and Cloud Computing</h3>
//               <p className="text-sm">Understand and set up cloud computing and virtualization solutions.</p>
//             </div>
//           </div>

//           {/* Card 9: Operational Procedures */}
//           <div className="p-4 border rounded-lg shadow-sm bg-white flex items-start">
//             <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mr-4" />
//             <div>
//               <h3 className="font-bold text-lg mb-1">Operational Procedures</h3>
//               <p className="text-sm">Follow safety, environmental, and communication best practices.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Side Call Button */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white py-4 px-3 rounded-l-lg">
//         <p className="text-xs transform rotate-90 whitespace-nowrap">Call for Assistance At +1 (866) 200-9902</p>
//       </div>
//     </div>
//   );
// }

// export default SkillsGrid;


import Image from "next/image";
function SkillsGrid(){
  return(
    <>
      <Image
        src="/system.png"
        width={1835}
        height={823}
        alt="system image"
      />
    </>
  )
}
export default SkillsGrid;
