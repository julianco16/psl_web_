import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/Projects";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import InfoS from "../components/InfoS";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>PSL</title>
        <meta
          name="description"
          content="PSL web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="PLS Benefits"
        title="Who we are">
      Pretty Smart Labs is a team of expert bluetooth full stack developers. 
      We have also partnered with industry experts so no piece of your project is overlooked. 
      Our partners work together to ensure every element of your project flows together smoothly.  
      </SectionTitle>
      <InfoS />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Chip link video">
        Chip Link video description
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="See what some of our clients are saying">
        xxx.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
