import { NextSeo } from "next-seo"
import Image from "next/image"

const Portfolio = () => {
  
  return (
   <section >
     <NextSeo
      title={'Nikhil Rajput - Portfolilo'}
      description={'Discover Nikhil Rajput portfolio showcasing his creative web design and development work. From stunning visual designs to seamless functionality, see how Nikhil can elevate your online presence.'}
      canonical={`https://www.nikhilrajput.online/portfolio`}
      />
       <section className="grid grid-cols-1 mt-8 items-center justify-center text-center p-4 text-white1 text-4xl" >
            My Portfolio
          </section>
          <section className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full p-6" >
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2 h-[26rem] shadow-3xl  justify-center items-left">
            <Image className="shadow-3xl rounded-xl "
                src={'/asset/image/app1.gif'}
                alt='logo'
                width={600}
                height={600}
                quality={100}
                />
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Ecommerce Mobile App Full Stack</div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2   shadow-3xl  justify-center items-left">
           
            <video className="shadow-3xl rounded-xl "
                autoPlay
                loop
                muted
               >
            <source src="/asset/image/sports-app.mp4" />
          </video>
       
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Sports Stunning Mobile App Full Stack</div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2   shadow-3xl  justify-center items-left">
           
           <video className="shadow-3xl rounded-xl "
               autoPlay
               loop
               muted
              >
           <source src="/asset/image/app-2.mp4" />
         </video>
      
             <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Basketball Sports App Full Stack</div>
           </div>
          </section>
          
          <section className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full p-6" >
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2 h-[26rem] shadow-3xl  justify-center items-left">
            <Image className="shadow-3xl rounded-xl "
                src={'/asset/image/website-nikua.jpg'}
                alt='logo'
                width={600}
                height={600}
                quality={100}
                />
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Furniture Ecommerce Next js Resposnive Website</div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2   shadow-3xl justify-center items-left">
           
            <Image className="shadow-3xl rounded-xl "
            src={'/asset/image/website-crypto.png'}
            alt='logo'
            width={600}
            height={600}
            quality={100}
          />
       
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Crypto Trading Website Full Stack Next js</div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-8 rounded-xl  bg-black2   shadow-3xl  justify-center items-left">
           
            <Image className="shadow-3xl rounded-xl "
            src={'/asset/image/website-better-check.jpg'}
            alt='logo'
            width={600}
            height={600}
            quality={100}
          />
             <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider w-full">Electronics Website Laravel Full Stack</div>
           </div>
          </section>
          </section>

  )
}

export default Portfolio