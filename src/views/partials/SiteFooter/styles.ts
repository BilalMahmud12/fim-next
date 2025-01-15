import styled from "styled-components";
import { media } from "@utils/constants"

export const StyledFooter = styled.footer`
    /*border-top: 1px solid;
    border-color: ${({ theme }) => theme.colors.lightGrey};*/

    .footer-top {
        padding: 2rem 0;
        color: ${({ theme }) => theme.colors.beige};
        font-family: var(--font-montserrat);
        font-size: 1.2rem;
        text-align: center;
        font-weight: 300;
    }

    .footer-middle {
        color: ${({ theme }) => theme.colors.lightGrey};
        .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
            border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};

            ${media.desktop} {
                grid-template-columns: 3fr 5fr; 
            }
        }

        .footer-logo-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};

            ${media.desktop} {
                grid-template-columns: 3fr 2fr;
                border-bottom: none;
            }

            .footer-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 0;
            }

            .footer-links {
                list-style: none;
                padding: 2rem 2.5rem;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: .75rem;
               
                border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};

                li {
                    text-transform: uppercase;
                    a {
                        color: ${({ theme }) => theme.colors.beige};
                        text-decoration: none;
                        font-family: var(--font-montserrat);
                        font-size: 0.75rem;
                    }
                }
            }
        }

        .footer-contact {
            display: flex;
            flex-direction: column;
            border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
            color: ${({ theme }) => theme.colors.beige};
            
            p {
                margin: 0;
                font-size: 1rem;
                font-weight: 300;
                line-height: 1.6;
                font-family: var(--font-montserrat);
            }

            .address {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 2rem 3rem;
                border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
            }

            .subscribe {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 2rem 3rem;

                label {
                    font-family: var(--font-montserrat);
                    font-size: 0.9rem;
                }

                .subscribe-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    @media (min-width: 768px) {
                        flex-direction: row; /* Align items in a row on desktop */
                    }

                    .subscribe-input {
                        padding: 0.75rem;
                        flex: 2;
                        border: 1px solid ${({ theme }) => theme.colors.beige};
                        background: ${({ theme }) => theme.colors.darkOlive2};
                        color: ${({ theme }) => theme.colors.mutedBeige};
                        font-family: var(--font-montserrat);

                        &:focus {
                            outline: none;
                        }
                    }

                    .subscribe-button {
                        padding: 0.75rem 1.5rem;
                        flex: 1;
                        background: ${({ theme }) => theme.colors.beige};
                        color: ${({ theme }) => theme.colors.darkOlive2};
                        font-weight: 600;
                        border: none;
                        font-family: var(--font-montserrat);
                        cursor: pointer;
                        transition: background 0.3s ease;

                        &:hover {
                            background: ${({ theme }) => theme.colors.lightGrey};
                        }
                    }
                }
            }
        }
    }

    .footer-bottom {
        padding: 2rem 0;
        color: ${({ theme }) => theme.colors.lightGrey};
        font-family: var(--font-montserrat);
        font-size: .8rem;
        text-align: center;
        font-weight: 300;
    }
`
