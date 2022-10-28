import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/Projects";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Bar from "../components/bar";
import InfoS from "../components/InfoS";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectionTitle pretitle="PLS Benefits" title="Who we are">
        Pretty Smart Labs is a team of expert bluetooth full stack developers.
        We have also partnered with industry experts so no piece of your project
        is overlooked. Our partners work together to ensure every element of
        your project flows together smoothly.
      </SectionTitle>

      <InfoS />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="Testimonials"
        title="See what some of our clients are saying"
      />

      <Testimonials />

      <SectionTitle pretitle="" title="Let’s get to work:">
        Tell our experts about your project so together we can create a solution
        that will bring your idea to life.
      </SectionTitle>

      <Bar />
      <Footer />
      <PopupWidget />
    </>
  );
}
