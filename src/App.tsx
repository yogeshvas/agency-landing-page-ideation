import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchChanged } from "./components/SearchChanged";
import { Mission } from "./components/Mission";
import { Solution } from "./components/Solution";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import * as React from "react";

export default function App() {
  return (
    <main className="relative bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />
      <SearchChanged />
      <Mission />
      <Solution />
      <CTA />
      <Footer />
    </main>
  );
}
