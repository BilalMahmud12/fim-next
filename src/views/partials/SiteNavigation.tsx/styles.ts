import styled from "styled-components";
import { media } from "@utils/constants"

export const StyledSiteNavigation = styled.section`
    background-color: ${({ theme }) => theme.colors.darkOlive2};
    width: 100%;
    padding: 1.5rem 0;
    overflow: hidden;

    .menu-container {
        padding: 3.5rem 0 0 0;

        ${media.desktop} {
            padding: 5rem 0 0 0;
        }
    }

    .nav-header {
        color: ${({ theme }) => theme.colors.lightGrey};
        font-size: 1.5rem;
        font-family: var(--font-montserrat);
        font-weight: 400;
        margin-bottom: 1.5rem;

        ${media.desktop} {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }

    .nav-body {
        color: ${({ theme }) => theme.colors.lightGrey};
        font-size: 1.4rem;
        font-family: var(--font-montserrat);
        font-weight: 400;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.colors.lightGrey};
        padding: 1.5rem 0;

        ${media.desktop} {
            font-size: 1.8rem;
        }

        nav {
            ul.parent-links {
                list-style: none;
                padding: 0;
                margin: 0;


                li.parent-list-item {
                    position: relative;
                    border-bottom: 1px solid transparent;

                    &:has(ul.child-links) {
                        &:hover {
                            border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
                        }
                    }

                    &:hover > a.parent-link {
                        color: ${({ theme }) => theme.colors.beige};
                    }

                    &:hover > ul.child-links {
                        opacity: 1;
                        visibility: visible;
                    }

                    a.parent-link {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        padding: .5rem 0;
                        font-family: var(--font-montserrat);
                        font-weight: 200;
                        text-decoration: none;
                        text-transform: uppercase;
                        color: ${({ theme }) => theme.colors.lightGrey};
                        transition: color 0.4s ease-in-out, border-bottom 0.4s ease-in-out;
                        
                        &:hover {
                            color: ${({ theme }) => theme.colors.beige}; 
                        }
                    }
                }
            }

            ul.child-links {
                position: absolute;
                top: -1px;
                left: 50%;
                width: 50%;
                z-index: 1;
                list-style: none;
                padding: 0;
                margin: 0;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                background-color: ${({ theme }) => theme.colors.darkOlive2};

                li.child-list-item {
                    a.child-link {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                        padding: .5rem 3rem;
                        font-family: var(--font-montserrat);
                        font-weight: 200;
                        text-decoration: none;
                        text-transform: uppercase;
                        color: ${({ theme }) => theme.colors.lightGrey};
                        border: 1px solid ${({ theme }) => theme.colors.lightGrey};
                        border-bottom: 0;
                        transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;

                        &:hover {
                            color: ${({ theme }) => theme.colors.beige};
                            background-color: #1f2d1f;
                        }
                    }

                    &:last-child {
                        a {
                            border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
                        }
                    }
                }                
            }
        }
    }

    .customer-support {
        padding: 1.5rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
        color: ${({ theme }) => theme.colors.beige};
        font-family: var(--font-montserrat);
        font-weight: 200;
        font-size: .9rem;
    }

    .email-subscription {
        padding: 1.5rem 0;
        color: ${({ theme }) => theme.colors.beige};
        font-family: var(--font-montserrat);
        font-weight: 200;
        font-size: .9rem;

        input {
            background-color: transparent;
            border: 0;
            border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
            color: ${({ theme }) => theme.colors.lightGrey};
            padding: .5rem 1rem;
            margin-right: 1rem;
            width: 315px;

            &:focus {
                outline: none;
            }   
        }

        .sub-line {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 1rem;


            button {
                background-color: ${({ theme }) => theme.colors.darkOlive2};
                color: ${({ theme }) => theme.colors.beige};
                padding: .5rem 1rem;
                border: 1px solid;
                border-color: ${({ theme }) => theme.colors.beige};
                cursor: pointer;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        
    }
`;
