import { ReactNode, useEffect, useState, CSSProperties } from 'react';
import styles from './Drawer.module.css';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    height?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    children,
    height = '100%',
}) => {

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            const timer = setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const getDrawerStyles = (): CSSProperties => {
        return {
            transition: 'transform 0.3s ease-in-out',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1050,
            backgroundColor: '#0a0a0a',
            overflowY: 'auto',
            height: height,
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        };
    };

    return (
        <>
            <div style={getDrawerStyles()} className={styles.drawer}>
                {children}
            </div>
            {isOpen && (
                <div
                    className={styles.backdrop}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        transition: 'opacity 0.3s ease-in-out',
                        zIndex: 1049,
                    }}
                />
            )}
        </>
    );
};
