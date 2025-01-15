import React from "react";
import type { Metadata } from "next";
import HomePage from "@views/pages/HomePage";
import { getGlobalSettings, getHomePageContent, getCompanies, getAllServices, getAllBlogPosts } from "@lib/repository";

export async function generateMetadata(): Promise<Metadata> {
  let globalSettings = { 
    DefaultSeo: {
      MetaTitle: '',
      MetaDescription: '',
      ShareImage: {
        url: ''
      }
    }, 
    Title : '', 
    SubTitle : '' 
  };

  try {
    globalSettings = await getGlobalSettings();
  } catch (error) {
    console.error("Error fetching global settings:", error);
    // Fallback to some default values
    globalSettings = {
      DefaultSeo: {
        MetaTitle: '',
        MetaDescription: '',
        ShareImage: {
          url: ''
        }
      },
      Title: 'Default Title',
      SubTitle: '',
    };
  }

  const DefaultSeo = globalSettings?.DefaultSeo || { 
    MetaTitle: '', 
    MetaDescription:'',
    ShareImage: {
      url: ''
    }
  }

  const Title = globalSettings?.Title || ''

  // const {
  //   MetaTitle = '',
  //   MetaDescription = '',
  //   ShareImage = {
  //     url: ''
  //   }
  // } = DefaultSeo;

  return {
    title: `Home Page — ${Title}`,
    description: DefaultSeo?.MetaDescription || '',
    openGraph: {
      title: DefaultSeo?.MetaTitle || '',
      description: DefaultSeo?.MetaDescription || '',
      images: [
        {
          url: `${DefaultSeo?.ShareImage?.url || ''}`,
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
  };
}

export default async function Home() {
  const promises = [
    getHomePageContent(),
    getCompanies(),
    getAllServices(),
    getAllBlogPosts()
  ];

  let homePageContent, companies, services, blogPosts;

  try {
    [homePageContent, companies, services, blogPosts] = await Promise.all(promises);
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    // Set default values if the API call fails
    homePageContent = {
      Business: [],
      About: {},
      Offers: [],
    };
    companies = [];
    services = [];
    blogPosts = [];
  }

  const { Business, About, Offers } = homePageContent;

  return (
    <HomePage
      companies={companies}
      services={services}
      blogPosts={blogPosts}
      business={Business}
      about={About}
      offers={Offers}
    />
  );
}
