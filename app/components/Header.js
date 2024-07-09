import Nav from "./header/Nav";
import HeroSection from "./header/HeroSection";
export default function Header({ theme, setTheme }) {
  return (
    <header className="min-h-screen pt-8 lg:pt-12 flex flex-col">
      <Nav theme={theme} setTheme={setTheme} />
      <HeroSection />
    </header>
  );
}
