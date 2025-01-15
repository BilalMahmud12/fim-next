import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import CompanyPage from "@views/pages/CompanyPage";
import { siteSettings } from "@config/index";
import { getCompany } from "@lib/repository";

export async function generateMetadata(props: { params: { company: string } }): Promise<Metadata> {
  const { company: slug } = props.params;
  const company = await getCompany(slug);

  if (!company) {
    notFound(); // Trigger a 404 if no company found
  }

  const { SEO } = company || {}; // Fallback to empty object if `company` or `SEO` is undefined
  const { MetaTitle = '', MetaDescription = '', ShareImage = { url: '' } } = SEO || {};

  return {
    title: `${MetaTitle} — ${siteSettings.siteName}`,
    description: MetaDescription,
    openGraph: {
      title: MetaTitle,
      description: MetaDescription,
      images: [
        {
          url: `${'http://3.71.98.81/'}${ShareImage?.url ?? ''}`, // Add fallback in case ShareImage.url is undefined
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
  };
}

export default async function Company(
  props: {
    params: { company: string }
  }
) {
  const { company: slug } = props.params;
  const company = await getCompany(slug);

  if (!company) {
    notFound(); // Return a "not found" page if the company data is unavailable
  }

  return (
    <CompanyPage data={company} />
  );
}
