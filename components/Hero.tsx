import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-between px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute top-20 right-32 text-6xl opacity-20 rotate-12">🐾</div>
      <div className="absolute top-40 right-64 text-4xl opacity-15 -rotate-12">🐾</div>
      <div className="absolute bottom-32 right-48 text-5xl opacity-10 rotate-45">🐾</div>
      
      <div className="flex-1 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Find Your
          <br />
          Perfect Pet
          <br />
          Companion
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
          Connect with loving pets waiting for their forever home. Our platform makes adoption simple, safe, and full of joy.
        </p>
        <div className="flex gap-4">
          <Link to="/pets">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Adopt Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-2">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Shelter
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image Placeholder - would use actual pet images */}
      <div className="hidden lg:flex flex-1 justify-end items-center">
        <div className="relative">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 flex items-center justify-center">
            <span className="text-9xl">🐕</span>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary" style={{
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }}></div>
    </section>
  );
};

export default Hero;
