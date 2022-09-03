import Features from './components/Features';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ReviewSection from './components/ReviewSection';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <ReviewSection />
      <Sponsors />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
