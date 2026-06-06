import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | COCKROACH EXPRESS",
  description:
    "Why we chose the name. Fearless. Satirical. Unemployed. India's most honest news source.",
};

export default function About() {
  return <AboutPage />;
}
