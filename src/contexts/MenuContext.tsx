'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Drawer } from '@components/drawer';

interface DrawerContextType {
    openMenu: (content: ReactNode) => void;
    closeMenu: () => void;
    content: ReactNode | null;
    isMenuOpen: boolean;
}

const MenuContext = createContext<DrawerContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<ReactNode | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = (content: ReactNode) => {
        setContent(content);
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setContent(null);
        setIsMenuOpen(false);
    };

    return (
        <MenuContext.Provider value={{ openMenu, closeMenu, content, isMenuOpen }}>
            {children}
            <Drawer isOpen={!!content} onClose={closeMenu}>
                {content}
            </Drawer>
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
