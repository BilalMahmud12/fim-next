import styled from "styled-components";
import { media } from "@utils/constants"

export const StyledHeroSection = styled.section`
    .hero-video-content {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        margin-bottom: 50px;

        ${media.desktop} {
            height: 600px;
        }

        .overlay {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .hero-cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .player-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 128px;
            height: 128px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 2;
            opacity: .5;

            svg {
                width: 128px;
                height: 128px;
                fill: #fff;
            }
        }

        .video-frame {
            width: 100%;
            height: 100%;
        }

        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const StyledTabsSection = styled.section`
`

export const StyledVideoSection = styled.section`
    .hero-video-content {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        margin-bottom: 50px;

        ${media.desktop} {
            height: 550px;
        }

        .overlay {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .hero-cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .player-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 128px;
            height: 128px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 2;
            opacity: .5;

            svg {
                width: 128px;
                height: 128px;
                fill: #fff;
            }
        }

        .video-frame {
            width: 100%;
            height: 100%;
        }

        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const StyledProjectsSection = styled.section`
    padding: 0 0 1rem 0;

    ${media.desktop} {
        padding: 0 0 2rem 0;
    }

    .section-title {
        margin: 0 0 3rem 0;
        text-align: center;
        color: ${({ theme }) => theme.colors.mutedBeige};
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    .project-tiles {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        max-width: 100%;

        .project-tile {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;


            ${media.desktop} {
                flex-direction: row;
                gap: .5rem;

                &:nth-child(even) {
                    flex-direction: row-reverse;
                }

                .project, .media {
                    width: 50%;
                    max-width: 50%;
                    box-sizing: border-box;
                }
            }

            .project {
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
                }

                .description, .value {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.2rem;
                    text-align: justify;
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
                    width: 190px;
                    font-size: .8rem;
                    text-decoration: none;
                    text-align: center;

                    ${media.desktop} {
                        width: 250px;
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
                    height: 415px;
                    max-height: 415px;
                }
            }
        }
    }
`

export const StyledMessageSection = styled.section`
    padding: 2rem 0 1rem 0;

    ${media.desktop} {
        padding: 2rem 0 0;
    }

    .message {
        .title {
            margin: 0 0 2rem 0;
            text-align: justify;
            text-align-last: center;
            color: ${({ theme }) => theme.colors.mutedBeige};
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 600;
        }

        .description {
            margin: 0 0 1rem 0;
            text-align: justify;
            text-align-last: center;
            color: ${({ theme }) => theme.colors.mutedBeige};
            font-size: .9rem;
            font-weight: 300;
            font-family: var(--font-montserrat);
            max-width: 85%;
            margin: 0 auto;
        }

        .links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;

            .website, .phone {
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${({ theme }) => theme.colors.mutedBeige};
                margin-top: 2.5rem;
                font-size: 2rem;
                text-decoration: none;
                font-weight: 600;
            }

            .phone {
                border: 1px solid ${({ theme }) => theme.colors.mutedBeige};
                padding: 1rem 2rem;
                
            }
        }
    }

    .about {
        padding: 2rem 0;
        text-align: center;
        color: ${({ theme }) => theme.colors.beige};
        border-top: 1px solid ${({ theme }) => theme.colors.beige};
        font-size: .9rem;
        font-weight: 400;

    }

    
`