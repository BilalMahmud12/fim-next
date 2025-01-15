import type { Metadata } from "next";
import { siteSettings } from "@config/index";
import InvestWithUs from "@views/pages/InvestWithUsPage";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Invest With Us — ${siteSettings.siteName} `,
        description: 'This is the contact page description.',
    };
}

export default async function InvestWithUsPage() {
  return (
      <InvestWithUs />
  )
}