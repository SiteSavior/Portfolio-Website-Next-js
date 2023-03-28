import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section>
    <div className='grid max-lg:grid-cols-1 lg:grid-cols-4 h-auto mt-16 text-white px-8 py-16  border-black border-b border-t '>
       
        <div className=' flex gap-1 font-Montserrat  h-fit w-fit  py-8'><Image
            src={'/asset/image/logo-3.png'}
            alt='logo'
            width={70}
            height={70}
            />
            <div className='flex flex-col text-white p-2'><div className='text-2xl font-medium font-Montserrat'>NIKHIL RAJPUT</div>
            <div className=' text-xs font-thin pl-1'>Full Stack Developer</div>
            </div></div>


            <div>
            <ul className='flex flex-col gap-4 font-Montserrat text-lg tracking-wider'>
            <li className='text-2xl text-pink1 py-4 hover'>QUICK LINK</li>

                <li> <Link target='_blank' href={'/resume'} className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>About</Link></li>
                <li><Link target='_blank' href={'/portfolio'} className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Portfolio</Link></li>
                <li><Link target='_blank' href={'/services'} className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Services</Link></li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Blog</li>
                <li><Link target='_blank' href={'/contact'} className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Contact</Link></li>
            </ul>
            </div>


            <div>
            <ul className='flex flex-col gap-4 font-Montserrat text-lg tracking-wider'>
            <li className='text-2xl text-pink1 py-4 '>RESOURCES</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Website Projects</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>App Projects</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>React</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Next js</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>Flutter</li>
            </ul>
            </div>

            <div>
            <ul className='flex flex-col gap-4 font-Montserrat text-base tracking-wider'>
            <li className='text-2xl text-pink1 py-4 '>OTHER LINKS</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>GIT HUB</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>FACEBOOK</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>TWITTER</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>INSTAGRAM</li>
                <li className='px-1 hover:text-pink1 hover:ease-in-out hover:duration-500 hover:transition-all hover:cursor-pointer'>LINKEDIN</li>
            </ul>
            </div>
            
        </div>
        <div className='h-24  w-full mt-4 text-white1 flex justify-center items-center p-4 text-lg'>© 2023. All rights reserved by Nikhil Rajput</div>
        </section>

  )
}

export default Footer