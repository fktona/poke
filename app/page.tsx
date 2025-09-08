import Footer from "./components/footer";
import Governance from "./components/governance";
import Home from "./components/home";
import Navbar from "./components/nav";
import Overview from "./components/overview";
import Treasury from "./components/treasury";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Home />
      <Overview />
      <Governance />
      <Treasury />
    </div>
  );
}
