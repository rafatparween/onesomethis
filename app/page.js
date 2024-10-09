// app/page.js
import { Montserrat } from 'next/font/google';
import SkillsGrid from './components/Skillsgrid';
import Technicians from './components/Technicians';
import Assistance from './components/Assistance';
import Avoidprinter from './components/Avoidprinter';
import Help from './components/Help';
import PrinterSetup from './components/Printersetup';
import Digonode from './components/Dignode';
import Newlife from './components/Newlife';

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <PrinterSetup/>
      <Digonode/>
      <Newlife/>
      <Technicians/>
      <Assistance/>
      <SkillsGrid />
      <Avoidprinter/>
      <Help/>

     
    </main>
  );
}
