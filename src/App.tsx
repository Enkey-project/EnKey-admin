import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import AppPreview from "./pages/AppPreview";
import DailyPayment from "./pages/DailyPayment";
import DownloadCTA from "./pages/DownloadCTA";
import Hero from "./pages/Hero";
import MatchingBenefit from "./pages/MatchingBenefit";
import ReviewSystem from "./pages/ReviewSystem";
import TargetAudience from "./pages/TargetAudience";
import WorkerFeatures from "./pages/WorkerFeatures";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-600 to-blue-1000">
      <Header />
      <Hero />
      <About />
      <AppPreview />
      <TargetAudience />
      <WorkerFeatures />
      <MatchingBenefit />
      <ReviewSystem />
      <DailyPayment />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
