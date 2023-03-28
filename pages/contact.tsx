import Image from "next/image"
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { NextSeo } from "next-seo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  
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
   <section className="text-white">
    <NextSeo
      title={'Nikhil Rajput - Contact'}
      description={'Get in touch with Nikhil Rajput today for creative and personalized web design and development solutions. Whether you need a new website, a redesign, or ongoing support, Nikhil can help you achieve your online goals. Contact Nikhil Rajput by phone, email, or through the contact form to start your digital journey.'}
      canonical={`https://www.nikhilrajput.online/contact`}
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
  )
}

export default Contact