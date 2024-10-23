export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div>
        <img src="https://canonprintercatalogue.datascrip.com/assets/logo/canon_monile_logo.png" className="h-[70px] w-[100px]"></img>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
        {/* Blue Triangle */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#ED3237]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>



        {/* Content */}
        <div className="">
          <div className="h-[90px] bg-gray-100 p-[13px]">
            <h1 className="text-2xl font-semibold mb-4">Installing</h1>
            <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
          </div>
          <div className="flex justify-center mb-6 mt-[40px] mb-[40px]">
            <img
              src="https://getdrawings.com/free-icon/error-icon-69.png" // Replace this with the actual path to the printer error image
              alt="Printer Error"
              width={150}
              height={150}
            />
          </div>
          <p className="text-gray-800 mb-4 text-center">
            Fatal Error occurred Code: 0x6100004a during the software installation setup.
            <br />
            Please Contact Support before attempting to install it again.
          </p>
          <p className="font-bold text-center text-xl mb-2">PLEASE CONTACT FOR CANON PRINTER SUPPORT</p>
          <p className="text-center text-[#ED3237] font-bold text-xl">THROUGH LIVE CHAT</p>
        </div>

        {/* Footer */}
        {/* <div className="bg-white p-6 flex justify-center items-center">
          <img
            src="https://www.qwebcare.com/help/images/hp-logo.gif" // Replace this with the actual path to the HP logo
            alt="HP Logo"
            width={50}
            height={50}
          />
          <span className="ml-4 text-blue-600 text-lg">24x7 HP Assistance</span>
        </div> */}
      </div>
    </div>
  );
}
