import styled from 'styled-components'
import { media } from "@utils/constants"

export const StyledAboutPage = styled.div`
    h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        color: ${({ theme }) => theme.colors.beige};
    }

    ${media.desktop} {
        
    }
`

export const StyledAboutSections = styled.div`
    padding: 0 0 2rem 0;

    .about-tiles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 100%;
    
        .about-tile {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
            padding: 1rem;
            border: 1px solid ${({ theme }) => theme.colors.mutedBrown};

            ${media.desktop} {
                flex-direction: row;
                gap: .5rem;

                &:nth-child(even) {
                    flex-direction: row-reverse;
                }

                .about-tile-content, .about-tile-image {
                    width: 50%;
                    max-width: 50%;
                    box-sizing: border-box;
                }
            }

            .about-tile-content {
                padding: 1rem 0;
                color: ${({ theme }) => theme.colors.beige};
                transition: all 0.3s ease-in-out;

                ${media.desktop} {
                    padding: 2.5rem 3.2rem;
                }

                .title {
                    font-family: var(--font-montserrat);
                    font-weight: 400;
                    line-height: 1.5rem;
                    padding: 0 0 1rem 0;
                    margin-bottom: 1.5rem;
                }

                .description {
                    font-family: var(--font-montserrat);
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 1.2rem;
                    color: ${({ theme }) => theme.colors.beige};
                    margin-bottom: .5rem;
                    transition: all 0.3s ease-in-out;
                }

                
            }

            .about-tile-image {
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
`

export const StyledServicesPage = styled.div`
`

export const StyledSingleServicePage = styled.div`
    .service-media {
        width: 100%;
        height: 240px;
        max-height: 235px;
        overflow: hidden;
        padding: 1rem 1rem;
        box-sizing: border-box;
        border: 1px solid #333;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        ${media.desktop} {
            height: 350px;
            max-height: 350px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    .service-content {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.2;
        text-align: left;
        margin: 0 0 1rem 0;
        /*color: #b9b9b9;*/
        color: #af9777db;

        ${media.desktop} {
            text-align: justify;
        }


        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        .rich-text {
            
        }
    }
`

export const StyledOurServicesSection = styled.div`
    padding: 0 0 2rem 0;

    .services-tiles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 100%;
        
        .services-tile {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
            

            ${media.desktop} {
                flex-direction: row;
                gap: 0rem;

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
                border: 1px solid ${({ theme }) => theme.colors.mutedBeige};
                background: ${({ theme }) => theme.colors.mutedBeige};
                color: ${({ theme }) => theme.colors.darkOlive2};
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
                border: 1px solid ${({ theme }) => theme.colors.mutedBeige};
                background: ${({ theme }) => theme.colors.mutedBeige};
                color: ${({ theme }) => theme.colors.darkOlive2};
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
                border: 1px solid ${({ theme }) => theme.colors.mutedBeige};
                background: ${({ theme }) => theme.colors.mutedBeige};
                color: ${({ theme }) => theme.colors.darkOlive2};
                font-family: var(--font-montserrat);
                border-radius: 0;

                &:hover {
                    background: ${({ theme }) => theme.colors.mutedBeige};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
            }
        }

    }
`

export const StyledBlogsIndexPage = styled.div`
`

export const StyledBlogsSection = styled.div`
    padding: 0 0 2rem 0;

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

export const StyledSingleBlog = styled.div`
    .blog-media {
        width: 100%;
        height: 240px;
        max-height: 235px;
        overflow: hidden;
        padding: 1rem 1rem;
        box-sizing: border-box;
        border: 1px solid #333;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        ${media.desktop} {
            height: 550px;
            max-height: 550px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    .title {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
        padding: 2rem 0;
        text-align: center;
        color: var(--beige);
        border-top: 1px solid #333;

        ${media.desktop} {
            font-size: 1.7rem;
        }
    }

    .blog-content {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.2;
        text-align: left;
        margin: 0 0 1rem 0;
        /*color: #b9b9b9;*/
        color: #af9777db;

        ${media.desktop} {
            text-align: justify;
        }


        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        .rich-text {
            
        }
    }
`

export const StyledContactPage = styled.div`
    .contact-header {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.beige} !important;
        
        ${media.desktop} {
            font-size: 1.2rem;
        }

        p {
            margin: 0 0 1rem 0;
        }
    }

    .contact-form {
        padding-bottom: 2rem;

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
                color: ${({ theme }) => theme.colors.darkOlive2};
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
                color: ${({ theme }) => theme.colors.beige};
                font-family: var(--font-montserrat);
                border-radius: 0;
                transition: all 0.3s ease-in-out;
                font-weight: 400;

                &:hover {
                    background: ${({ theme }) => theme.colors.beige};
                    border: 1px solid ${({ theme }) => theme.colors.beige};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
            }
        }

    }
`

export const StyledInvestWithUsPage = styled.div`
    .contact-header {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.beige} !important;
        
        ${media.desktop} {
            font-size: 1.2rem;
        }

        p {
            margin: 0 0 1rem 0;
        }
    }

    .contact-form {
        padding-bottom: 2rem;

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
                color: ${({ theme }) => theme.colors.darkOlive2};
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
                color: ${({ theme }) => theme.colors.beige};
                font-family: var(--font-montserrat);
                border-radius: 0;
                transition: all 0.3s ease-in-out;
                font-weight: 400;

                &:hover {
                    background: ${({ theme }) => theme.colors.beige};
                    border: 1px solid ${({ theme }) => theme.colors.beige};
                    color: ${({ theme }) => theme.colors.darkOlive2};
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
            }
        }

    }

    .address-map {
    }
`

