import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <div className="my-5">
        <Navbar />
      </div>
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
}
