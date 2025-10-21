// import { ReactLenis } from 'lenis/react'
import { About } from './sections/about/About'
import { Header } from './sections/header/Header'
import { Introduction } from './sections/introduction/Introduction'
import { Work } from './sections/work/Work'
import { dataEN, dataPT } from './data/data';
import { useEffect, useState } from 'react';
import { Footer } from './sections/footer/Footer';

export function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang');
    return savedLang ? savedLang : 'EN';
  });
  
  const content = lang == 'EN' ? dataEN : dataPT; 
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    if (window.innerWidth > 768) {
      const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.pageX, y: event.pageY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      {/* <ReactLenis root options={{ autoRaf: true }}> */}
        <Header lang={lang} setLang={setLang} content={content} />
        <Introduction lang={lang} content={content} />
        <Work lang={lang} content={content} />
        <About lang={lang} content={content} />
        <Footer content={content} />
      {/* </ReactLenis> */}


      { window.innerWidth > 768 ? 
        <div
          className="custom-cursor"
          style={{
            position: 'absolute',
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            width: "40px",
            height: "40px",
            backdropFilter: 'blur(2px)',

            borderRadius: '50%',
            pointerEvents: 'none', 
            transform: 'translate(-50%, -50%)', 
            transition: 'transform 0.05s ease',
            border: 'solid 1px var(--gray)',
            zIndex: 10000,
          }}
        ></div>
      : ''}
    </>
  )
}