// pages/index.js
import Image from 'next/image';

export default function Secondpage() {
  return (
    <div className="min-h-screen">
      {/* Section with background image */}
      <section 
        className="flex flex-col justify-center items-center text-center py-12 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww')" // Replace with actual path of the background image
        }}
      >
        {/* Blue overlay (optional if you want a transparent blue effect) */}
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

        {/* Main content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold">Set up your Printer</h1>
          <p className="mt-4 text-lg">Enter your product name and model number to get the drivers</p>

          {/* Input Section */}
          <div className="mt-8 flex space-x-4 justify-center">
            <input
              type="text"
              placeholder="Enter your product name here. Example: 'ENVY 4520'"
              className="px-4 py-2 w-full max-w-lg rounded-md text-gray-700"
            />
            <button className="bg-gray-300 text-gray-900 px-6 py-2 rounded-md">Next</button>
          </div>

          {/* Links */}
          <div className="mt-4 text-sm">
            <a href="#" className="text-gray-300 hover:underline">Where's the model number?</a>
            <br />
            <a href="#" className="text-gray-300 hover:underline">My device is not listed</a>
          </div>
        </div>

        {/* Printer and Devices Image */}
        <div className="relative z-10 mt-12">
          <Image
            src="/printer-devices.png"  // Replace with actual path
            alt="Printer setup devices"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
