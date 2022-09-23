import Content from "../components/landing-page-components/content";
import Footer from "../components/landing-page-components/footer";
import Hero from "../components/landing-page-components/hero";

export default function LandingPage() {
  return (
    <div className='overflow-y-scroll w-full mt-14'>
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
