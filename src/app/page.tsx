import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero 
          name="Evan Bourgoine"
          title="Recent Computer Science Graduate @ Virginia Tech "
          description="Passionate about building impactful full-stack applications and creating seamless user experiences. I love turning complex problems into elegant solutions."
          email="evan.bourgoine@gmail.com"
          linkedin="https://linkedin.com/in/evan-bourgoine"
          github="https://github.com/evanbourgoine"
          profileImage="/profile.jpg"
          resumePath="/Evan_Bourgoine_Resume.pdf"
        />
        
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}