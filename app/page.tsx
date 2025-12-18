import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero videoYouTubeId="lkc2y0yb89U" />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}
