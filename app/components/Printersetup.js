"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
import './Printersetup.css';

const PrinterSetup = () => {
  const router = useRouter(); 

  const handleSetupClick = () => {
    router.push('../services/Pages'); 
  };

  return (
    <div className="printer-setup">
      <div className="text-content ">
        <h1 className='setup'>123 PRINTER SETUP</h1>
        <ul className='mt-[-20px]'>
          <li>Make sure your printer is powered on</li>
          <li className='select'>Select Download to install the recommended printer software to complete setup</li>
        </ul>
        <button className="btn" onClick={handleSetupClick}>
          Click For Chat Assistance
          {/* <img src='hplogo.png' alt="HP Logo" className="hp-logo" /> */}
        </button>
      </div>

      <img src='https://123printfix.com/image/f-b-1.png' alt="Printer" className="printer-image" />
    </div>
  );
};

export default PrinterSetup;








