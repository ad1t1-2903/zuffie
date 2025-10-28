import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PetCard from "@/components/PetCard";
import Features from "@/components/Features";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  const pets = [
    { name: "Max", breed: "Golden Retriever", age: "2 years", gender: "Male", emoji: "🐕" },
    { name: "Luna", breed: "Persian Cat", age: "1 year", gender: "Female", emoji: "🐱" },
    { name: "Charlie", breed: "Labrador", age: "3 years", gender: "Male", emoji: "🐕" },
    { name: "Bella", breed: "Siamese Cat", age: "2 years", gender: "Female", emoji: "🐱" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Pet Listings Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Your Future Best Friend
          </h2>
          <p className="text-muted-foreground text-lg">
            These adorable pets are waiting to bring joy to your life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((pet, index) => (
            <PetCard key={index} {...pet} />
          ))}
        </div>
      </section>

      <Features />

      {/* Call to Action Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Start your adoption journey today and give a loving pet their forever home
        </p>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
