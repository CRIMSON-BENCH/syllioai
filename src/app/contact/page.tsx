import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Syllio",
  description: "Get in touch with the Syllio team for support, school plans, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Contact Us</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Questions about a School or District plan? Need support? We&apos;d love to hear from you.
        </p>
        <a
          href="mailto:hello@syllioai.com"
          className="text-violet-brand font-semibold hover:underline text-lg"
        >
          hello@syllioai.com
        </a>
        <p className="text-xs text-slate-400 mt-12 leading-relaxed">
          Syllio is a productivity tool for students and educators. We do not provide professional
          academic, legal, or financial advice. For official course information, contact your institution.
        </p>
      </div>
      <Footer />
    </>
  );
}
