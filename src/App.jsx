import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import HowToWork from './components/HowToWork';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Cta from './components/Cta';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <HowToWork />
      <Roadmap />
      <HowToBuy />
      <Tokenomics />
      <Cta />
      <Faq />
      <Footer />
    </>
  )
}
