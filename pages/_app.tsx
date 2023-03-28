import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRef } from 'react';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useFollowPointer } from "@/components/use-follow-pointer";
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const options = {
    smooth: true,
  } 
   return <LocomotiveScrollProvider options={options} containerRef={ref}> 
   <section data-scroll-container ref={ref} className='bg-black1'>
   <header className=" sticky z-50">
   <Header/>
   </header>
    <main><Component {...pageProps} data-scroll-section/></main>
    <footer>
    <Footer/>
    </footer>
    </section>
        </LocomotiveScrollProvider>
}
