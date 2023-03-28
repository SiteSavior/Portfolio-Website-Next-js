import { NextSeo } from "next-seo"
import Image from "next/image"

const Resume = () => {
 
  
  return (
   <section>
      <NextSeo
      title={'Nikhil Rajput - Resume'}
      description={'Discover Nikhil Rajput Resume showcasing his creative web design and development work. From stunning visual designs to seamless functionality, see how Nikhil can elevate your online presence.'}
      canonical={`https://www.nikhilrajput.online/resume`}
      />
       <section >
            <div className="flex justify-center pt-11 items-center max-lg:text-3xl lg:text-5xl  font-Montserrat text-white1">My Resume</div>
          
            </section>
          <section className='grid  max-lg:grid-cols-1 lg:grid-cols-2 gap-4 p-8'>
            <section className="flex flex-col gap-8 max-lg:py-4 lg:py-11">
            <div className="flex flex-col gap-2 px-4">
                <div className="text-pink1 p-2">2012 - 2023</div>
                <div className="text-3xl text-white">Education Quality</div>

            </div>
            
            <div className="flex flex-col gap-14 rounded-lg  bg-black2   tracking-wider p-11 drop-shadow-2xl text-slate-300">

              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-white">Bachelor in Computer Application</div>
                <div>IGNOU (2017 - 2020)</div>
              </div>
              <div className=" leading-9">The degree is awarded for completing the programme in the study fields of software testing, web design, software development and programming, computer networking and computer systems.</div>
              </div>

              <div className="flex flex-col gap-14 rounded-lg  bg-black2   tracking-wider p-11 drop-shadow-2xl text-slate-300">

<div className="flex flex-col gap-2">
  <div className="text-2xl font-bold text-white">Diploma in Computer Science</div>
  <div>BTTI (2012 - 2015)</div>
</div>
<div className=" leading-9">The Diploma is awarded for completing the programme in the study fields of software testing, web design, software development and programming, computer networking and computer systems.</div>
</div>

<div className="flex flex-col gap-14 rounded-lg  bg-black2   tracking-wider p-11 drop-shadow-2xl text-slate-300">

<div className="flex flex-col gap-2">
  <div className="text-2xl font-bold text-white">Secondary School Education</div>
  <div>Rajasthan (2012)</div>
</div>
<div className=" leading-9">During this period, Study a variety of subjects, including english, math, science, history.opportunities to participate in activities such as sports, volunteer work, that help me to develop leadership skills.</div>
</div>
</section>

            <section className="flex flex-col gap-8 max-lg:py-4 lg:py-11">
            <div className="flex flex-col gap-2 px-4">
                <div className="text-pink1 p-2">2019 - 2023</div>
                <div className="text-3xl text-white">Job Experience</div>

            </div>
              
              <div className="flex flex-col gap-14 rounded-lg  bg-black2 text-white1  tracking-wider p-11 drop-shadow-2xl">

<div className="flex flex-col gap-2">
  <div className="text-2xl font-bold text-white">Full Stack Developer</div>
  <div>Freelancer (2022 - 2023)</div>
</div>
<div className=" leading-9">Experience with front-end technologies like HTML, CSS, and JavaScript frameworks such as React, Next js. Expertise in back-end development with experience in databases like MySQL, MongoDB, or PostgreSQL.</div>
</div>

              <div className="flex flex-col gap-14 rounded-lg  bg-black2   tracking-wider p-11 drop-shadow-2xl text-slate-300">

<div className="flex flex-col gap-2">
  <div className="text-2xl font-bold text-white">Web Developer and Trainer</div>
  <div>VivaIndia Travel & Tourism New Delhi (2019 - 2022)</div>
</div>
<div className=" leading-9">Proficiency in multiple programming languages and platforms and ability to collaborate with cross-functional teams, including designers, product managers, and other developers.</div>
</div>

<div className="flex flex-col gap-14 rounded-lg  bg-black2   tracking-wider p-11 drop-shadow-2xl text-slate-300">

<div className="flex flex-col gap-2">
  <div className="text-2xl font-bold text-white">Back-end Developer</div>
  <div>Hollister Medical India Pvt Ltd Rewari (2016 - 2017)</div>
</div>
<div className=" leading-9">Working in back-end development Entering customer or client information into databases, Entering customer or client information into databases, Updating and maintaining inventory records.</div>
</div>
          </section>
          </section>

          <section className="grid grid-cols-1  items-center justify-center text-center p-4 text-white1 max-lg:text-3xl lg:text-5xl" >
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

export default Resume