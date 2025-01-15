'use client';
import { MenuProvider } from "@context/MenuContext";
import ThemeProviderWrapper from "@theme/ThemeProviderWrapper";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
    return (
        <>
            <ThemeProviderWrapper>
                <MenuProvider>
                    {children}
                    <ProgressBar
                        height="3px"
                        color="#af9777"
                        options={{ showSpinner: true }}
                        shallowRouting
                    />
                </MenuProvider>
            </ThemeProviderWrapper>
            
        </>
    );
};

export default Providers;