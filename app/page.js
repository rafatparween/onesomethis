// app/page.js
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import SkillsGrid from './components/Skillsgrid';

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header />
      <SkillsGrid />
    </main>
  );
}
