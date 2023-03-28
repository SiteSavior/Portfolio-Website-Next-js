import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDatabase, FaLaptopCode, FaLaravel, FaReact } from "react-icons/fa";
import { TbBrandDjango, TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsCodeSlash, BsPhone } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';


const Test = () => {
  const handlesubmit = async () =>{
    toast.success('🦄 Thank you!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
      <section>
          <NextSeo
      title={'Nikhil Rajput - Web Design and Development'}
      description={'Nikhil Rajput is a skilled web designer and developer, creating unique and personalized digital experiences for clients. With expertise in HTML, CSS, and JavaScript, Nikhil offers creative web solutions to bring your vision to life. From stunning visual design to seamless functionality, trust Nikhil Rajput to design and develop a website that will elevate your online presence.'}
      canonical={`https://www.nikhilrajput.online`}
      additionalMetaTags={[{
        name: 'google-site-verification',
        content: 'uzS8PMOTvit-ziSIscmTOm7Y9wD7lW5xtFJ5NVGV9SQ'
      }]}
      />
      <ToastContainer
 position="bottom-right"
 autoClose={5000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="light"
 />
      <section className="grid max-lg:grid-cols-1 lg:grid-cols-2 h-5/6 w-full font-Montserrat text-white1 text-sm" >
      <div className="flex flex-col p-6 lg:mt-16 gap-4" >
      <div className="text-sm font-medium tracking-widest" >
    WELCOME TO MY WORLD
    </div>
    <div className="flex flex-col gap-4 max-lg:text-2xl lg:text-5xl text-white2 font-bold font-Montserrat " >
    <div className="flex gap-1">Hi, I am <div className="text-pink1">Nikhil Rajput</div></div>
    <div className="flex gap-2">a<div>  <Typewriter
    options={{
      autoStart : true,
      loop: true,
      delay: 40,
      strings: [
        'Developer.',
        'Proffesional Coder.',
        'UI/UX Designer.',
        'Data Scientist.'
      ]
    }}
          
          /></div></div>
         
          </div>
          <div className=" font-Poppins text-sm tracking-wider leading-loose mt-4">I am a highly skilled and experienced full-stack web developer with expertise in a variety of programming languages, including React, Next.js, Laravel, Tailwind CSS, and MongoDB.</div>
          
    </div>
    <div className="flex justify-center items-center lg:pt-11 max-lg:px-8" >
    <Image className="shadow-3xl "
                src={'/asset/image/char2.png'}
                alt='logo'
                width={600}
                height={600}
                quality={100}
                />
    </div>
    
    </section>

    <section className="flex max-lg:flex-col lg:flex-row max-lg:gap-8 lg:gap-28 max-lg:pt-11" >
    <div className="flex flex-col gap-6  pl-6  font-Montserrat " >
          <div className=" tracking-wider text-white1 text-sm">FIND ME WITH</div>
          <div className="flex flex-row gap-4 text-white">
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center "><Link target="_blank" className=" hover:text-blue-800" href={'https://www.linkedin.com/in/nikhil-rajput-09806766/'}><FiLinkedin className="text-xl"/></Link></div>
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center"><Link target="_blank" className=" hover:text-pink1" href={'https://www.instagram.com/bannanikhilrajput/?igshid=YmMyMTA2M2Y%3D'}><AiOutlineInstagram className="text-xl"/></Link></div>
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center"><Link target="_blank" className=" hover:text-skyblue1" href={'https://twitter.com/nikhilrajput243'}><AiOutlineTwitter className="text-xl"/></Link></div>
          </div>
          </div>
    
          <div className="flex flex-col gap-6  pl-6 pb-11 border-b-0 border-black  font-Montserrat ">
          <div className=" tracking-wider text-white1 text-sm">BEST SKILL ON</div>
          <div className="flex flex-row gap-4 text-white">
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center "><FaReact className="text-2xl text-skyblue1"/></div>
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center"><TbBrandNextjs className="text-2xl "/></div>
          <div className="flex bg-black2 shadow-3xl w-16 h-16 justify-center items-center"><SiJavascript className="text-2xl text-yellow-400"/></div>
          </div>
          </div>
          </section>

          <section className="flex flex-col gap-6 lg:pl-6 max-lg:pl-6 max-lg:pr-3 font-Poppins" >
          <div className="flex flex-col gap-4 p-2">
            <div className="text-pink1 text-sm">FEATURES</div>
            <div className="text-white1 text-5xl font-bold ">What I Do</div>
          </div>
          <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full pr-6">
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <BsCodeSlash className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Website Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">
            Make fast stunning and user-friendly websites that meet the Client Requirements.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <BsPhone className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">App Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Make high-performing application design to development, testing, and deployment.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <FaReact className=" text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">React jS Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Create websites that are fast, secure, and responsive, ensuring a seamless user experience across all devices.
            </div>
            </div>
          </div>
    
           <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-4 w-full pr-6">
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <FaLaptopCode className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Jamstack Development</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Use a variety of platforms and programming languages to create websites that are fast.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <FaDatabase className="text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">Seo Optimisation</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">use a variety of techniques and strategies to optimize websites for search engines.
            </div>
            </div>
    
            <div className=" text-sm flex flex-col gap-4 p-11 rounded-md  bg-black2  h-auto shadow-3xl  justify-center items-left">
              <MdComputer className=" text-skyblue1 text-5xl mb-4 font-thin"/>
              <div className="text-white1 text-2xl font-medium brightness-100 tracking-wider mb-2">UI/UX Design</div>
              <div className="text-white1 text-base font-medium tracking-wider mb-6 leading-8">Use the latest technologies and design trends to make stunning and user-friendly websites.
            </div>
            </div>
          </div>
    
          </section>

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
          <section >
            <div className="flex justify-center py-11 items-center text-5xl pt-11 font-Montserrat text-white1">My Resume</div>
            <div className="grid max-lg:grid-cols-1 lg:grid-cols-4 items-center px-11 text-base font-Montserrat font-bold tracking-wider">
            <div className="text-pink1 flex justify-center items-center rounded-md shadow-3xl px-11 py-8  bg-black2 scale-105 shadow-black1">Education</div>

              <div className="flex justify-center items-center px-8 py-8  bg-black2 text-white1 hover:shadow-3xl cursor-pointer hover:rounded-md   hover:text-pink1 scale-100 hover:scale-100 ease-in duration-500 ">Professional Skills</div>
              <div className="flex justify-center items-center  hover:shadow-3xl cursor-pointer hover:rounded-md px-11 py-8  bg-black2 hover:text-pink1 scale-100 hover:scale-100 ease-in duration-500 text-white1">Experience</div>
              <div className="flex justify-center items-center rounded-r-xl drop-shadow-2xl px-8 py-8 shadow-black1 
              hover:shadow-3xl cursor-pointer hover:rounded-md  bg-black2 hover:text-pink1 scale-100 hover:scale-100 ease-in duration-500 text-white1">Interview</div>
            </div>
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
      
          <section className="text-white" >
          <div className="flex justify-center items-center text-5xl font-Montserrat font-bold text-white1 py-11">My Skills</div>
            <div className="flex flex-col gap-11">
              <div className="flex lg:flex-row max-lg:flex-col max-lg:gap-4 max-lg:mx-auto lg:justify-evenly tracking-wider font-Montserrat font-medium">
                <div className="bg-black2 drop-shadow-2xl flex max-lg:justify-center  items-center gap-3 w-auto h-auto px-11 py-6 text-xl text-white rounded-md"><FaReact className="text-skyblue1 text-3xl"/>React js</div>
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-2 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><TbBrandNextjs className="text-white text-3xl"/>Next js</div>
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-4 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><FaLaravel className="text-redmix text-3xl"/>Laravel</div>
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-2 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><TbBrandMongodb className="text-green-600 text-3xl"/>Mongo DB</div>
              </div>
              <div className="flex lg:flex-row max-lg:flex-col max-lg:gap-4 max-lg:mx-auto lg:justify-evenly  tracking-wider font-Montserrat font-medium">
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-2 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><TbBrandDjango className="text-white text-3xl"/>Django</div>
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-4 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><SiJavascript className="text-yellow-400 text-3xl"/>JavaScript</div>
                <div className="bg-black2 drop-shadow-2xl flex items-center gap-3 w-auto h-auto px-11 py-6 text-xl text-white rounded-md max-lg:justify-center"><SiTailwindcss className="text-skyblue1 text-3xl"/>Tailwind CSS</div>
              </div>
        
            </div>
          </section>
          <section className="text-white" >
          <div className="flex flex-col justify-center gap-2 items-center tracking-wider font-sans font-bold max-lg:pt-11 lg:pt-24 pb-11"><div className="text-pink1 text-xl">contact</div><div className=" max-lg:text-3xl lg:text-6xl text-white1 ">Contact With Me</div></div>

          <div className="flex lg:flex-row max-lg:flex-col justify-evenly gap-5 px-6">
            <div className="flex flex-col rounded-2xl gap-4 bg-black2 py-8 px-5 max-lg:w-full lg:w-1/3 font-Montserrat ">
             <div>   <Image className="shadow-md rounded-2xl"
                src={'/asset/image/contact.png'}
                alt='logo'
                width={368}
                height={268}
                quality={100}
                /></div>
                <div className="text-2xl text-white font-bold font-sans">Nikhil Rajput</div>
                <div>Full Stack Developer</div>
                <div className="text-clip w-4/5">I am available for freelance work. Connect with me via and call in to my account.</div>
                <div>Phone : +91 8607880984</div>
                <div>Email : nikhilrajput243@gmail.com</div>
                <div className="flex flex-col gap-6  pl-6  font-Montserrat w-fit " >
          <div className=" tracking-wider text-white1 text-sm">FIND ME WITH</div>
          <div className="flex flex-row gap-4 text-white px-11">
          <div className="flex bg-black1 border  border-black2 drop-shadow-3xl w-14 h-14  justify-center items-center "><FiLinkedin className="text-3xl"/></div>
          <div className="flex bg-black1 border  border-black2 drop-shadow-3xl w-14 h-14 justify-center items-center"><AiOutlineInstagram className="text-3xl"/></div>
          <div className="flex bg-black1 border  border-black2 drop-shadow-2xl w-14 h-14 justify-center items-center"><AiOutlineTwitter className="text-3xl"/></div>
          </div>
          </div>
            </div>
            <div className="flex flex-col bg-black2 px-2 py-8 rounded-lg max-lg:w-full lg:w-2/3 gap-5">
              <div className="flex lg:flex-row max-lg:flex-col gap-5 w-full justify-between items-center">
            <div className="flex flex-col w-full gap-4 px-4">
                <div className="text-white1 text-sm pl-1">YOUR NAME</div>
                <input required className=" bg-black1 rounded-md w-auto h-14  border-t-0 border-b-0 border-2 border-black"/>
              </div>
              <div className="flex flex-col w-full gap-4 px-4">
                <div className="text-white1 text-sm pl-1">PHONE NUMBER</div>
                <input required className=" bg-black1 rounded-md w-auto h-14  border-t-0 border-b-0 border-2 border-black"/>
              </div>
              </div>
              
            <div className="flex flex-col w-full gap-4 px-4">
                <div className="text-white1 text-sm pl-1">EMAIL</div>
                <input required className=" bg-black1 rounded-md w-auto h-14  border-t-0 border-b-0 border-2 border-black"/>
              </div>
              <div className="flex flex-col w-full gap-4 px-4">
                <div className="text-white1 text-sm pl-1">SUBJECT</div>
                <input required className=" bg-black1 rounded-md w-auto h-14  border-t-0 border-b-0 border-2 border-black"/>
              </div>
              <div className="flex flex-col w-full gap-4 px-4">
                <div className="text-white1 text-sm pl-1">YOUR MESSAGE</div>
                <textarea required  className=" bg-black1 px-4 rounded-md w-auto h-32 resize-none border-t-0 border-b-0 border-2 border-black"/>
              </div>
<div className=" w-auto px-8 "><button onClick={handlesubmit} className="bg-black1 flex justify-center mx-auto items-center w-1/2  drop-shadow-3xl  rounded-md h-20 text-white hover:bg-pink1 hover:text-white1">SEND MESSAGE</button></div>
            </div>


          </div>
          </section>
          </section>

 
  );
}
export default Test