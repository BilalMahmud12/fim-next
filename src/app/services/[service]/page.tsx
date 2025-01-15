import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import ServicePage from "@views/pages/ServiceSinglePage";
import { siteSettings } from "@config/index";
import { getService } from "@lib/repository";

export async function generateMetadata(props: { params: Promise<{ service: string }> }): Promise<Metadata> {
    try {
        const params = await props.params;
        const { service: slug } = params;
        const service = await getService(slug);

        if (!service) {
            return notFound();
        }

        const { SEO = {} } = service;
        const {
            MetaTitle = service.Title ?? "Service",
            MetaDescription = "Discover our services and find out more about what we have to offer.",
            ShareImage = { url: "" }
        } = SEO;

        return {
            title: `${MetaTitle} — ${siteSettings.siteName}`,
            description: MetaDescription,
            openGraph: {
                title: MetaTitle,
                description: MetaDescription,
                images: [
                    {
                        url: ShareImage?.url,
                        width: ShareImage?.width ?? 800,
                        height: ShareImage?.height ?? 600,
                        alt: MetaTitle,
                    },
                ],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: `Service — ${siteSettings.siteName}`,
            description: "Explore our services.",
        };
    }
}

export default async function SingleService(props: { params: Promise<{ service: string }> }) {
    try {
        const params = await props.params;
        const { service: slug } = params;
        const service = await getService(slug);

        if (!service) {
            return notFound();
        }

        return (
            <ServicePage service={service} />
        );
    } catch (error) {
        console.error("Error fetching service data:", error);
        return (
            <div>
                <h1>Service Not Available</h1>
                <p>We're sorry, but the requested service could not be found at the moment. Please try again later.</p>
            </div>
        );
    }
}
