import type { Metadata } from "next";
import { siteSettings } from "@config/index";
import BlogsIndexPage from "@views/pages/BlogsIndexPage";
import { getAllBlogPosts } from "@lib/repository";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Blogs — ${siteSettings.siteName}`,
        description: 'This is the blogs page description.',
        openGraph: {
            title: `Blogs — ${siteSettings.siteName}`,
            description: 'Check out our latest blogs on investments and finance.',
            url: `${siteSettings.siteUrl}/blogs`,
            siteName: siteSettings.siteName,
            locale: "en_US",
            type: "website",
        },
    };
}

export default async function BlogsPage() {
    try {
        const blogs = await getAllBlogPosts();

        if (!blogs) {
            throw new Error("Failed to fetch blog posts");
        }

        const { data: blogPosts = [] } = blogs;

        return (
            <BlogsIndexPage
                blogs={
                    blogPosts?.map((blog: any) => {
                        return {
                            id: blog.id,
                            title: blog.Title,
                            href: blog.Slug,
                            image: blog?.Cover?.url || '', // Provide a fallback for the image in case it's not available
                        };
                    }) || []
                }
            />
        );
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return (
            <div>
                <h1>Blogs Not Available</h1>
                <p>We're sorry, but we are unable to fetch our blog posts at this moment. Please try again later.</p>
            </div>
        );
    }
}
