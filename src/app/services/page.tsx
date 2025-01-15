import type { Metadata } from "next";
import { siteSettings } from "@config/index";
import ServicesPage from "@views/pages/ServicesPage";
import { getAllServices, getServicesPageData } from "@lib/repository";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const servicesPageData = await getServicesPageData();

    if (!servicesPageData) {
      throw new Error("No services page data available.");
    }

    const { SEO = {} } = servicesPageData;
    const {
      MetaTitle = "Our Services",
      MetaDescription = "Learn more about the services we offer.",
      ShareImage = { url: "" }
    } = SEO;

    return {
      title: `${MetaTitle} — ${siteSettings.siteName}`,
      description: MetaDescription,
      openGraph: {
        title: `${MetaTitle} — ${siteSettings.siteName}`,
        description: MetaDescription,
        url: siteSettings.siteUrl,
        siteName: siteSettings.siteName,
        images: [
          {
            url: ShareImage?.url,
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Fallback metadata
    return {
      title: `Our Services — ${siteSettings.siteName}`,
      description: "Learn more about the services we offer.",
    };
  }
}

export default async function Services() {
  try {
    const services = await getAllServices();

    if (!services) {
      throw new Error("No services data available.");
    }

    return (
      <ServicesPage
        services={
          services.map((service: any) => ({
            title: service.Title ?? "No Title",
            description: service.Exerpt ?? "No Description",
            image: service.Cover?.url ?? "",
            slug: service.Slug ?? "",
          })) || []
        }
      />
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return (
      <div>
        <h1>Our Services</h1>
        <p>Content is not available at the moment. Please try again later.</p>
      </div>
    );
  }
}
