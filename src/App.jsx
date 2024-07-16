import Header from './components/header/header';
import Hero from './components/hero/hero';
import Qualities from './components/qualities/qualities';
import About from './components/about/about';
import Offers from './components/offers/offers';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRef } from 'react';


function App() {
  const ref = useRef(null)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Little Explorers Crèche | Kigali-Rwanda</title>
        <meta name="description" content="Safe, secure, nurturing environment for growth. Daycare with experienced staff, early learning, flexible hours, cozy naps, fun play, nutritious meals. Enroll now!" />
        <meta property="og:title" content="Little Explorers Crèche | Kigal-Rwanda" />
        <meta property="og:description" content="Safe, secure, nurturing environment for growth. Daycare with experienced staff, early learning, flexible hours, cozy naps, fun play, nutritious meals. Enroll now!" />
      </Helmet>
      <Header />
      <Hero targetRef={ref}/>
      <Qualities />
      <About targetRef={ref}/>
      <Offers targetRef={ref}/>
      <Contact />
      <Footer />
    </HelmetProvider>
  )
}

export default App
