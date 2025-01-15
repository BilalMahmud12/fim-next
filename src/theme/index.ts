export interface Theme {
    colors: {
        beige: string;
        mutedBeige: string;
        darkOlive: string;
        darkOlive2: string;
        mutedBrown: string;
        darkGrey: string;
        lightGrey: string;
    };
    fonts: {
        body: string;
        montserrat: string;
        poppins: string;
    };
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
        largeDesktop: string;
    };
}

// Create the theme object
const theme: Theme = {
    colors: {
        beige: '#af9777',
        mutedBeige: '#bdb5a9',
        darkOlive: '#1d1c15',
        darkOlive2: '#141613',
        mutedBrown: '#595044',
        darkGrey: '#5f5f5f',
        lightGrey: '#dcdcdc',
    },
    fonts: {
        body: 'Arial, Helvetica, sans-serif',
        montserrat: '"Montserrat", sans-serif',
        poppins: '"Poppins", sans-serif',
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        largeDesktop: '1440px',
    },
};

export default theme;
