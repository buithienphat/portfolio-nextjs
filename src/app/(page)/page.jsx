"use client";
import DescSection from "@/components/DescSection";
import HeroSection from "../../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
        });
    }, []);

    return (
        <main className="container mx-auto px-5 md:px-12 pt-24">
            <HeroSection />
            <DescSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </main>
    );
}
