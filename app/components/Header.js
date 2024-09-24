import Image from 'next/image';

export default function Header() {
  return (
    <div className="relative min-h-screen">
      <header className="relative bg-gray-100">
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 2000 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1228_2)">
              <path
                d="M556.5 75C284.87 42.9769 70.9823 74.745 0 95.903V-48H2000V86.202C1900.69 96.357 1653.3 107.044 1515 86.202C1371 64.5 1109.15 74.111 1031.5 86.202C960.684 95.269 837.641 108.144 556.5 75Z"
                fill="#C7C8CC"
              ></path>
              <path
                d="M481.5 44.8247C209.87 14.0213 70.9823 80.264 0 100.616V-48H2000V81.09C1900.69 90.859 1683.99 89.32 1546 67.43C1403.5 44.8247 1140 131.878 1057 119.854C986.184 128.576 762.641 76.707 481.5 44.8247Z"
                fill="#DDEBEB"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1228_2">
                <rect width="2000" height="121" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title and Subtitle */}
        <div className="relative z-10 max-w-7xl mx-auto text-center pt-[130px] ">
          <Image
            src="/Digonose.png"
            alt="HP Printer"
            width={598}
            height={109}
            className='ml-[454px]'
          />
        </div>
      </header>

      {/* Printer Section with Blue Wave */}
      <section className="relative bg-[#e5e7eb] h-[423px]">
        {/* Blue Wave on Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 2000 318" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M566.5 37.2359C294.87 104.232 70.9823 61.2037 0 16.9391V318H2000V37.2359L1998.56 36.9286C1898.45 15.5062 1665.42 -34.3559 1530.5 37.2359C1394.93 109.172 1213.15 62.53 1135.5 37.2359C1064.68 18.2654 847.641 -32.1056 566.5 37.2359Z"
              fill="#1C8DCE"
            ></path>
          </svg>
        </div>

        {/* Printer Cards */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center pt-[40px]">
          <div className="flex flex-col items-center">
            {/* <div className="w-[287px] h-[287px] bg-white rounded-full shadow-lg flex items-center justify-center"> */}
            <Image
              src="/hp.png"
              alt="HP Printer"
              width={287}
              height={287}
            />
            {/* </div> */}
            <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
            <Image
              src="/hplogo.png"
              alt="Epson Printer"
              width={37}
              height={37}
            />
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
            <Image
              src="/canon.png"
              alt="Canon Printer"
              width={287}
              height={287}
            />
            {/* </div> */}
            <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
            <Image
              src="/canonlogo.png"
              alt="Epson Printer"
              width={93}
              height={22}
            />
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
            <Image
              src="/epson.png"
              alt="Epson Printer"
              width={287}
              height={287}
            />
            {/* </div> */}
            <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
            <Image
              src="/epsonlogo.png"
              alt="Epson Printer"
              width={93}
              height={28}
            />
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center"> */}
            <Image
              src="/brother.png"
              alt="Brother Printer"
              width={287}
              height={287}
            />
            {/* </div> */}
            <span class="flex items-center justify-center bg-white cursor-pointer w-[200px] h-[55px] rounded-[30px] relative inline-block">
            <Image
              src="/brotherlogo.png"
              alt="Epson Printer"
              width={92}
              height={20}
            />
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="absolute top-1/3 right-0 transform rotate-90 origin-right bg-blue-600 text-white py-2 px-8 font-semibold">
          Call for Assistance At +1 (866) 200-9902
        </div>
      </section>
      
    </div>
  );
}
