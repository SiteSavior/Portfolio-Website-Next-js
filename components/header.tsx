import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='flex max-lg:flex-col lg:flex-row p-4 justify-between  items-center font-Poppins sticky  text-sm bg-black1'>
        <div>
        <Link href={'/'} className='flex gap-1 max-lg:mb-4  font-Montserrat hover:cursor-pointer'><Image
            src={'/asset/image/logo-3.png'}
            alt='logo'
            width={70}
            height={70}
            />
            <div className='flex flex-col text-white p-2'><div className='text-2xl font-medium font-Montserrat'>NIKHIL RAJPUT</div>
            <div className=' text-xs font-thin pl-1'>Full Stack Developer</div>
            </div>
            </Link></div>
    <div className='flex '>
        <ul className='flex text-white1 gap-4 font-Poppins tracking-wider'>
           
            <li>
              <Link href={'/'} className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer max-lg:hidden'>HOME</Link></li>
            <li><Link href={'/services'} className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>SERVICES</Link></li>
            <li ><Link href={'/resume'} className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>RESUME</Link></li>
            <li className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer max-lg:hidden'>TESTIMONIAL</li>
            <li><Link href={'/portfolio'} className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>PORTFOLIO</Link></li>
            <li className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer max-lg:hidden'>BLOG</li>
            <li><Link href={'/contact'} className='hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>CONTACTS</Link></li>

        </ul>
    </div>
    <div className='flex gap-4 max-lg:hidden'>
    <div className=' '><Link target='_blank' href={'https://www.whatsapp.com/'}><button className=' rounded-full  shadow-3xl bg-black1 text-green-500  p-3  hover:bg-green-500 hover:text-white hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'><AiOutlineWhatsApp className='text-xl'/></button></Link></div>
    <div className=' '><Link href={'/contact'}><button className='text-pink1 font-Roboto shadow-3xl font-semibold  bg-black1  py-4 px-6 text-xs hover:text-white hover:bg-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>CONTACT</button></Link></div>
    </div>
</div>
  )
}

export default Header