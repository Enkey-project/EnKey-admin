import Footer from "../components/Footer";
import { useLandingPageEffects } from "../utils/useLandingPageEffects";
import About from "./About";
import AppPreview from "./AppPreview";
import DailyPayment from "./DailyPayment";
import DownloadCTA from "./DownloadCTA";
import Hero from "./Hero";
import { LandingNav } from "./LandingNav";
import MatchingBenefit from "./MatchingBenefit";
import ReviewSystem from "./ReviewSystem";
import TargetAudience from "./TargetAudience";
import WorkerFeatures from "./WorkerFeatures";
import "./landing-nav.css";

export default function LandingPage() {
  useLandingPageEffects();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-600 to-blue-1000">
      <LandingNav />
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
