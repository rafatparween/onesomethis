// app/page.js
import { Montserrat } from 'next/font/google';
import SkillsGrid from './components/Skillsgrid';
import Technicians from './components/Technicians';
import Assistance from './components/Assistance';
import Avoidprinter from './components/Avoidprinter';
import Help from './components/Help';
// import Newlife from './components/Newlife';
import Header from './components/Header';

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header/>
      {/* <Newlife/> */}
      <Technicians/>
      <Assistance/>
      <SkillsGrid />
      <Avoidprinter/>
      <Help/>

     
    </main>
  );
}
