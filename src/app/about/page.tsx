import type { Metadata } from "next";
import AboutPage from "@views/pages/AboutPage";
import { siteSettings } from "@config/index";
import { getAboutUsQuery } from '@lib/queries';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const fetchURL = `${apiBaseUrl}about`;

async function getAboutUs() {
  try {
    const response = await fetch(`${fetchURL}?${getAboutUsQuery()}`);
    if (!response.ok) {
      console.error('Failed to fetch about us data', response.status, fetchURL);
      return null;
    }
    const results = await response.json();
    return results.data;
  } catch (error) {
    console.error('Error fetching about us data', error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const aboutUsContent = await getAboutUs();

  if (!aboutUsContent) {
    // Return some default metadata in case the content is not available
    return {
      title: `About Us — ${siteSettings.siteName}`,
      description: "Learn more about us.",
    };
  }

  const { SEO = {} } = aboutUsContent || {};
  const { MetaTitle = "About Us", MetaDescription = "", ShareImage = { url: "" } } = SEO;

  return {
    title: `${MetaTitle} — ${siteSettings.siteName}`,
    description: MetaDescription,
    openGraph: {
      title: `${MetaTitle} — ${siteSettings.siteName}`,
      description: MetaDescription,
      url: `${siteSettings.siteUrl}/about`,
      type: "website",
      images: [
        {
          url: ShareImage?.url || '',
          width: 800,
          height: 600,
          alt: MetaTitle,
        },
      ],
    },
  };
}

export default async function About() {
  const aboutUsContent = await getAboutUs();

  if (!aboutUsContent) {
    // Render a fallback or empty state if no content is available
    return (
      <div>
        <h1>About Us</h1>
        <p>Content is not available at the moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <AboutPage
      aboutUsContent={
        aboutUsContent?.Sections?.map((content: any) => ({
          contentId: content.SectionID ?? '', // Ensure SectionID is handled correctly
          title: content.Title ?? '',
          description: content.Content ?? '',
          image: content.Cover?.url ?? '', // Add fallback for Cover image URL
        })) || []
      }
    />
  );
}
