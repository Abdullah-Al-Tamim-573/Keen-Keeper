import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-light-dark-green mt-10 md:mt-20">
        <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="flex flex-col gap-5 pt-10 md:pt-15">
            
            <h2 className="text-4xl md:text-6xl text-center font-extrabold">
                 KeenKeeper
            </h2>
            <p className="text-center text-[#ffffffb3]">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            <p className="text-center text-[18px] md:text-xl font-medium">
                Social Links
            </p>
            <div className="flex justify-center gap-3 mb-9"> 
                  <div className="border bg-white px-2 py-2 rounded-full">
                    <FaFacebookSquare size={21} color="black"/>
                  </div>
                 <div className="border bg-white px-2 py-2 rounded-full">
                     <PiInstagramLogoFill size={21} color="black"/>
                 </div>
                 <div className="border bg-white px-2 py-2 rounded-full">
                     <FaXTwitter size={21} color="black"/>
                 </div>


            </div>
           
          </div>
          <div className="grid justify-center items-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              
              
              <a rel="noopener noreferrer" href="#">
                <span className="text-[#8fa39c]">© 2026 KeenKeeper. All rights reserved.</span>
              </a>
            </div>
            <div className="flex justify-center pt-4 text-[#8fa39c] space-x-4 lg:pt-0 lg:col-end-13">
                <p>
                    Privacy Policy
                </p>
                <p>
                    Terms of Service
                </p>
                <p>
                    Cookies
                </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
