import styled from "styled-components";
import { media } from "@utils/constants"

export const StyledSectionTitle = styled.div`
    padding: 1.5rem 0px;

    h2 {
        font-family: var(--font-noto-serif-display);
        font-size: 36px;
        font-weight: 300;
        line-height: 1.2;
        margin: 0px;
        text-align: center;
        color: var(--beige);
        ${media.desktop} {
            font-size: 3rem;
        }
    }
`

export const StyledPortfolioSection = styled.section`
    .section-title {
        padding: 1.5rem 0px;
        border-bottom: 1px solid;
        
        border-color: ${({ theme }) => theme.colors.lightGrey};
        h2 {
            font-family: var(--font-noto-serif-display);
            font-size: 36px;
            font-weight: 300;
            line-height: 1.2;
            margin: 0px;
            text-align: center;
            color: var(--beige);
            ${media.desktop} {
                font-size: 3rem;
            }
        }
    }

    .company-logos {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.lightGrey};
        padding: 0 0 3rem 0;
        

        ${media.desktop} {
            grid-template-columns: repeat(2, 1fr);
        }

        .company-logo {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem 3rem 2rem 3rem;
            border-bottom: 1px solid;
            border-color: ${({ theme }) => theme.colors.lightGrey};
            
            

            &:nth-child(odd) {
                border-right: none;
                border-color: ${({ theme }) => theme.colors.lightGrey};

                ${media.desktop} {
                    border-right: 1px solid;
                    border-color: ${({ theme }) => theme.colors.lightGrey};
                }
            }

            .hoverImageOverlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: all .3s ease-in-out;
                z-index: 2;

                .content-wrapper {
                    position: relative;
                    height: 100%;
                    width: 100%;

                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgb(2,0,36);
                        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.7147233893557423) 35%, rgba(0,0,0,0) 100%);
                        z-index: 1;
                    }

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                        z-index: 0;
                    }

                    .learn-more-label-hover {
                        display: flex;
                        justify-content: center;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5rem;
                        position: absolute;
                        left: 50%;
                        bottom: 13%;
                        transform: translateX(-50%);
                        z-index: 2;
                        font-family: var(--font-poppins);
                        font-size: 0.75rem !important;
                        text-transform: uppercase;
                        font-weight: 200;
                        line-height: 1.2;
                        margin: 0px;
                        width: 100%;
                        text-align: center;
                        color: ${({ theme }) => theme.colors.lightGrey};

                        .bg-line {
                            width: 18%;
                            height: 1px;
                            background-color: ${({ theme }) => theme.colors.lightGrey};
                        }
                    }
                }

            }

            &:hover {
                cursor: pointer;
                transition: all .3s ease-in-out;
                
                .hoverImageOverlay {
                    opacity: 1; /* Show the overlay on hover */
                    transition: all .5s ease-in-out;
                    /*transform: translate(0rem, 0rem) scale(0.85) !important;*/
                }
            }


            img {
                max-width: 100%;
                height: auto;
                margin-bottom: 4rem;
            }

            .learn-more-label {
                position: relative;
                font-family: var(--font-poppins);
                font-size: 0.75rem !important;
                font-weight: 200;
                line-height: 1.2;
                text-align: center !important;
                margin: 0px;
                width: 100%;
                text-align: center;
                color: ${({ theme }) => theme.colors.lightGrey};

                .label {
                    position: relative;
                    z-index: 1;
                    padding: 0 1rem;
                    background-color: ${({ theme }) => theme.colors.darkOlive2};
                }

                .bg-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: ${({ theme }) => theme.colors.lightGrey};
                    z-index: 0;
                }

                ${media.desktop} {
                    font-size: 1rem;
                }
    }
`
export const StyledHowWeDoBusinessSection = styled.section`
    background-color: hsl(120deg 18.42% 14.9%);
    padding: 0 0 4rem 0;

    .section-title {
        padding: 1.5rem 0px 1.5rem 0px;
       
        h2 {
            font-family: var(--font-noto-serif-display);
            font-size: 36px;
            font-weight: 300;
            line-height: 1.2;
            margin: 0px;
            text-align: center;
            color: var(--beige);
            ${media.desktop} {
                font-size: 3rem;
            }
        }
    }

    .content-wrapper {
        .video-container {
            position: relative;
            padding-bottom: 70.25%; /* 16:9 aspect ratio */
            width: 100%;
            max-width: 100%;
            height: 0;
            overflow: hidden;
            background-color: ${({ theme }) => theme.colors.darkOlive2};

            ${media.desktop} {
                padding-bottom: 47.25%; /* 16:9 aspect ratio */
            }

            .video-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
                z-index: 1;
            }

            .video-cover-bg {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }

            .video-icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                color: ${({ theme }) => theme.colors.beige};
                font-size: 3rem;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                opacity: .5;

                svg {
                    width: 128px;
                    height: 128px;
                    fill: #fff;
                }

                ${media.desktop} {
                    font-size: 4.8rem;
                }
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
`
export const StyledWhoWeAreSection = styled.div`
    .content-wrapper {
        .intro {
            padding: 1rem 0;
            text-align: center;
            font-weight: 400;
            line-height: 1.3rem;
            color: ${({ theme }) => theme.colors.beige};
            max-width: 90%;
            min-height: 200px;
            margin: 0 auto 1.5rem auto;
            p {
                margin-bottom: 1rem; 
            }
        }

        .about-tiles {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            margin: 0 auto 1.5rem auto;

            ${media.desktop} {
                grid-template-columns: repeat(2, 1fr);
            }

            .about-tile {
                padding: 2rem;
                color: ${({ theme }) => theme.colors.beige};
                border: 1px solid ${({ theme }) => theme.colors.beige};
                transition: all 0.3s ease-in-out;

                &:nth-child(-n + 3) {
                    border-bottom: none;
                }

                &:hover {
                    background: ${({ theme }) => theme.colors.beige};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    transition: all 0.3s ease-in-out;
                }

                ${media.desktop} {
                    &:nth-child(-n + 2) {
                        border-bottom: none;
                    }

                    &:nth-child(3) {
                        border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
                    }

                    &:nth-child(odd) {
                        border-right: none;
                    }
                }
            }

        }

        .about-image {
            width: 100%;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
`
export const StyledOurOfferingsSection = styled.div`
    .offering-tiles {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: .5rem;
        width: 100%;
        margin: 0 auto 1.5rem auto;

        ${media.desktop} {
            grid-template-columns: repeat(4, 1fr);
        }

        .offering-tile {
            position: relative;
            background: ${({ theme }) => theme.colors.beige};
            padding: 4rem 3.2rem;
            color: ${({ theme }) => theme.colors.lightGrey};
            /*transition: all 0.3s ease-in-out;*/
            

            .hover-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
                opacity: 0;
                transition: all 0.3s ease-in-out;

                .overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    background: rgba(0, 0, 0, 0.5);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }

            &:hover {
                background: ${({ theme }) => theme.colors.beige};
                transition: all 0.3s ease-in-out;

                .hover-bg {
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }
            }

            .value {
                position: relative;
                z-index: 99;
                line-height: 1.5rem;
                padding: 0 0 1rem 0;
                margin-top: 2rem;
                border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
            }

            ${media.desktop} {
                
            }
    }
`
export const StyledOurServicesSection = styled.div`
    .services-tiles {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        max-width: 100%;
        
        .services-tile {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
            

            ${media.desktop} {
                flex-direction: row;
                gap: .5rem;

                &:nth-child(even) {
                    flex-direction: row-reverse;
                }

                .service, .media {
                    width: 50%;
                    max-width: 50%;
                    box-sizing: border-box;
                }
            }

            .service {
                padding: 2.5rem 3.2rem;
                background: ${({ theme }) => theme.colors.mutedBeige};
                color: ${({ theme }) => theme.colors.darkOlive2};
                transition: all 0.3s ease-in-out;

                .title {
                    font-weight: 500;
                    line-height: 1.5rem;
                    padding: 0 0 1rem 0;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid ${({ theme }) => theme.colors.darkOlive2};
                    max-width: 38%;
                }

                .description, .value {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.2rem;
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    margin-bottom: .5rem;
                    transition: all 0.3s ease-in-out;
                }

                .read-more {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem 1rem;
                    border: 1px solid ${({ theme }) => theme.colors.darkOlive2};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    margin-top: 2.5rem;
                    width: 150px;
                    font-size: .8rem;
                    text-decoration: none;

                    &:hover {
                        background: ${({ theme }) => theme.colors.darkOlive2};
                        color: ${({ theme }) => theme.colors.beige};
                        transition: all 0.3s ease-in-out;
                    }
                }
            }

            .media {
                height: 242px;
                max-height: 242px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                ${media.desktop} {
                    height: 342px;
                    max-height: 342px;
                }
            }
        }
    }

    .contact-message {
        padding: 2rem 0;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.2;

        color: var(--beige);
        ${media.desktop} {
            font-size: 1.5rem;
        }
    }

    .contact-form {
        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
        
        .title {
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.2;
            margin: 0 0 1rem 0;
            text-align: center;
            color: var(--beige);
        }

        form {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
            max-width: 100%;

            ${media.desktop} {
                grid-template-columns: repeat(2, 1fr);
            }

            input, textarea, button {
                width: 100%;
                box-sizing: border-box;
            }

            input {
                grid-column: span 1;
                ${media.desktop} {
                    grid-column: span 1;
                }
                padding: 0.75rem;
                border: 1px solid ${({ theme }) => theme.colors.darkGrey};
                background: ${({ theme }) => theme.colors.darkOlive2};
                color: ${({ theme }) => theme.colors.mutedBeige};
                font-family: var(--font-montserrat);

                &:focus {
                    outline: none;
                }
            }

            textarea {
                grid-column: span 1;    
                ${media.desktop} {
                    grid-column: span 2;    
                }
                padding: 0.75rem;
                border: 1px solid ${({ theme }) => theme.colors.darkGrey};
                background: ${({ theme }) => theme.colors.darkOlive2};
                color: ${({ theme }) => theme.colors.mutedBeige};
                font-family: var(--font-montserrat);

                &:focus {
                outline: none;
                }
            }

            button {
                grid-column: span 1;    
                ${media.desktop} {
                    grid-column: span 2;    
                }
                width: 100%;    
                padding: 0.75rem;
                border: 1px solid ${({ theme }) => theme.colors.darkGrey};
                background: ${({ theme }) => theme.colors.darkOlive2};
                color: ${({ theme }) => theme.colors.mutedBeige};
                font-family: var(--font-montserrat);
                border-radius: 0;

                &:hover {
                    background: ${({ theme }) => theme.colors.beige};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
            }
        }

    }
`
export const StyledBlogsSection = styled.div`
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        width: 100%;
        margin: 0 auto;

        ${media.desktop} {
            grid-template-columns: repeat(2, 1fr);
        }

        a {
            text-decoration: none;
        }

        .blog-tile {
            display: flex;
            flex-direction: column-reverse;
            transition: all 0.3s ease-in-out;

            ${media.desktop} {
                flex-direction: row;
            }

            .title-area {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: start;
                padding: 1rem 3rem;
                background: ${({ theme }) => theme.colors.mutedBeige};

                .blog-title {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.2;
                    margin: 0 0 1rem 0;
                    padding: 0 0 2rem 0;
                    border-bottom: 1px solid ${({ theme }) => theme.colors.darkOlive2};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    text-decoration: none;

                    ${media.desktop} {
                        font-size: 1rem;
                    }
                }
            }

            .media-area {
                flex: 1;
                height: 240px;
                max-height: 235px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                ${media.desktop} {
                    height: 200px;
                    max-height: 200px;
                }
            }
        }
    }
`