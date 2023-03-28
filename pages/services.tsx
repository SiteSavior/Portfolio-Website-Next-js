import { MdComputer } from "react-icons/md";
import { FaDatabase, FaLaptopCode, FaReact } from "react-icons/fa";
import { BsCodeSlash, BsPhone } from "react-icons/bs";
import { NextSeo } from "next-seo";


const Services = () => {
   
  
  return (
   <section className="flex flex-col gap-6 pl-6 font-Poppins">
      <NextSeo
      title={'Nikhil Rajput - Services'}
      description={'Explore Nikhil Rajput web design and development services to enhance your online presence. Get creative and personalized solutions for your website needs, including design, development, and ongoing support. Contact Nikhil Rajput today to start your digital journey.'}
      canonical={`https://www.nikhilrajput.online/services`}
      />
          <div className="flex justify-center items-center py-11">
            
            <div className="text-white1 text-5xl font-bold ">Services</div>
          </div>
          <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full pr-6">
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <BsCodeSlash className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Website Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">
            Make fast stunning and user-friendly websites that meet the Client Requirements.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <BsPhone className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">App Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Make high-performing application design to development, testing, and deployment.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <FaReact className=" text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">React jS Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Create websites that are fast, secure, and responsive, ensuring a seamless user experience across all devices.
            </div>
            </div>
          </div>
    
           <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full pr-6">
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <FaLaptopCode className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Jamstack Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Use a variety of platforms and programming languages to create websites that are fast.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <FaDatabase className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Seo Optimisation</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">use a variety of techniques and strategies to optimize websites for search engines.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto drop-shadow-2xl border border-white  justify-center items-left">
              <MdComputer className=" text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">UI/UX Design</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Use the latest technologies and design trends to make stunning and user-friendly websites.
            </div>
            </div>
          </div>
    
          </section>
         
  )
}

export default Services