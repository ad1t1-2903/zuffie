import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 bg-background border-b">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-3xl">🐾</span>
        <span className="text-2xl font-bold text-foreground">PawfectMatch</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/pets"
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          Adopt
        </Link>
        <Link
          href="/about"
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          About
        </Link>
        <Link
          href="/resources"
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          Resources
        </Link>
        <Link
          href="/contact"
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          Contact
        </Link>
      </div>

      <Link href="/login">
        <Button className="bg-accent hover:bg-accent/90">Get Started</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
