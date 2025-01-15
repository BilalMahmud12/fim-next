import type { Metadata } from "next";
import { notoSerifDisplay, montserrat, poppins } from './fonts';
import StyledComponentsRegistry from "@utils/registry";
import SiteHeader from "@views/partials/SiteHeader";
import SiteFooter from "@views/partials/SiteFooter";
import { GlobalSettingsProvider } from '@context/GlobalSettingsContext';
import { getGlobalSettings } from "@lib/repository";
import Providers from "./Providers";

export async function generateMetadata(): Promise<Metadata> {
  const globalSettings = await getGlobalSettings() || {};
  const { DefaultSeo = {}, Title = '', SubTitle = '' } = globalSettings;


  return {
    metadataBase: new URL('https://fiminvestment.ae'),
    title: `${Title} — ${SubTitle}`,
    description: DefaultSeo?.MetaDescription || '',
    openGraph: {
      title: DefaultSeo?.MetaTitle || '',
      description: DefaultSeo?.MetaDescription || '',
      images: [
        {
          url: DefaultSeo?.ShareImage?.url ?? '',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSettings = await getGlobalSettings() || {};
  const { DefaultSeo = {}, Social = {}, Footer = {}, MainNavigration = {} } = globalSettings;

  const initialSettings = {
    title: globalSettings.Title || '',
    metaTitle: DefaultSeo.MetaTitle || '',
    metaDescription: DefaultSeo.MetaDescription || '',
    shareImage: {
      url: DefaultSeo.ShareImage?.url || '', // Ensure url is defined and is a string
    },
    socialLinks: {
      twitter: Social.Twitter || '',
      facebook: Social.Facebook || '',
      instagram: Social.Instagram || '',
      linkedin: Social.LinkedIn || '',
      youtube: Social.YouTube || '',
    },
    footer: {
      contacts: {
        address: Footer.Contacts?.Address || '',
        email: Footer.Contacts?.Email || '',
        phone: Footer.Contacts?.Phone || '',
      },
      newsLetter_label: Footer.Newsletter_Label || '',
      newsLetter_message: Footer.Newsletter_message || '',
      footer_menu: Footer.Navigation?.Links?.map((item: any) => ({
        id: item.id,
        title: item.Label,
        path: item.Url,
        external: item.External
      })) || [],
      copyright: Footer.Copyright || '',
    },
    siteNavigation: MainNavigration.siteNavigation || [],
  };

  return (
    <html lang="en" className={`${notoSerifDisplay.variable} ${montserrat.variable} ${poppins.variable}`}>
      <StyledComponentsRegistry>
        <body>
          <GlobalSettingsProvider initialSettings={initialSettings}>
            <Providers>
              <SiteHeader />
              <main>
                {children}
              </main>
              <SiteFooter />
            </Providers>
          </GlobalSettingsProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
