import React from 'react';

export default function Middle() {
    return (
        <div className="flex flex-col h-screen">
            {/* <header className="bg-teal-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Epson Solutions</h1>
      </header> */}
            {/* <div className="h-[42px] w-full bg-[#003399] flex items-center px-4">
                <h2 className="text-lg font-bold text-white">Epson Solutions</h2>
            </div> */}

            <main className="flex-grow p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Warranty Verification</h2>
                        <p>Verify your Epson limited warranty and Service Plans.</p>
                        <div className="mt-4">
                            <img
                                src="/waranty.png"
                                alt="Mobile Printer"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Mobile Printing and Scanning</h2>
                        <p>Easily print or scan from smartphones, tablets, and more.</p>
                        <div className="mt-4">
                            <img
                                src="/scanning.png"
                                alt="Mobile Printer"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-200 py-4 px-6 text-center">
                <p>&copy; Epson</p>
            </footer>
        </div>
    );
}