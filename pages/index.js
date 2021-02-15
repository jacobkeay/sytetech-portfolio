import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <Gallery />
      <Contact />
    </Layout>
  );
}
