'use client';
import React, { createContext, useContext } from 'react';

interface GlobalSettings {
    title: string;
    metaTitle: string;
    metaDescription: string;
    shareImage: {
        url: string;
    };
    socialLinks: {
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
        youtube: string;
    };
    footer: {
        contacts: {
            phone: string;
            email: string;
            address: string;
        };
        newsLetter_label: string;
        newsLetter_message: string;
        footer_menu: {
            id: number;
            title: string;
            path: string;
            external: boolean;
        }[];
        copyright: string
    },
    siteNavigation: {
        href: number;
        name: string;
        subMenu?: {
            href: number;
            name: string;
        }[];
    }[];
}

const GlobalSettingsContext = createContext<GlobalSettings | undefined>(undefined);

export const GlobalSettingsProvider: React.FC<{ children: React.ReactNode; initialSettings: GlobalSettings }> = ({
    children,
    initialSettings,
}) => {
    return (
        <GlobalSettingsContext.Provider value={initialSettings}>
            {children}
        </GlobalSettingsContext.Provider>
    );
};

export const useGlobalSettings = () => {
    const context = useContext(GlobalSettingsContext);
    if (context === undefined) {
        throw new Error('useGlobalSettings must be used within a GlobalSettingsProvider');
    }
    return context;
};
