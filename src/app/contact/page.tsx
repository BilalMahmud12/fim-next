import type { Metadata } from "next";
import { siteSettings } from "@config/index";
import ContactPage from "@views/pages/ContactPage";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Contact Us — ${siteSettings.siteName} `,
        description: 'This is the contact page description.',
    };
}

export default async function Contact() {
    return (
        <ContactPage />
    )
}