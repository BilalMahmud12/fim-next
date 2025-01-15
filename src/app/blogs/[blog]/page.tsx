import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { siteSettings } from "@config/index";
import BlogSinglePage from "@views/pages/BlogSinglePage";
import { getBlogPost } from "@lib/repository";

export async function generateMetadata(props: { params: { blog: string } }): Promise<Metadata> {
    const { blog: slug } = props.params;

    try {
        const blog = await getBlogPost(slug);

        if (!blog) {
            throw new Error("Blog post not found");
        }

        const { MetaTitle, MetaDescription, ShareImage } = blog?.SEO ?? {};

        return {
            title: `${MetaTitle ?? "Blog"} — ${siteSettings.siteName}`,
            description: MetaDescription ?? "Read more about our latest blog post.",
            openGraph: {
                title: MetaTitle ?? "Blog",
                description: MetaDescription ?? "Discover more on our blog.",
                images: [{
                    url: ShareImage?.url ?? `${siteSettings.siteUrl}/default-image.jpg`,
                    width: ShareImage?.width ?? 800,
                    height: ShareImage?.height ?? 600,
                    alt: MetaTitle ?? "Blog Image",
                }],
            },
        };
    } catch (error) {
        console.error("Error generating metadata for blog post:", error);
        notFound();
        return {
            title: `Blog Not Found — ${siteSettings.siteName}`,
            description: 'The blog post you are looking for could not be found.',
        };
    }
}

export default async function BlogPage(
    props: {
        params: { blog: string }
    }
) {
    const { blog: slug } = props.params;

    try {
        const blog = await getBlogPost(slug);

        if (!blog) {
            return notFound();
        }

        return <BlogSinglePage blogPost={blog} />;
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return notFound();
    }
}
