import styled from "styled-components";
import { media } from "@utils/constants"

export const StyledHeader = styled.header`
    position: relative;
    z-index: 9999;
    width: 100%;
    padding: 1rem 0 0 0;
    background: ${({ theme }) => theme.colors.darkOlive2};
    border-bottom: 1px solid #333;
    
    ${media.desktop} {
        padding: 1rem 0 0 0;
    }
 
    .header-wrapper {
        width: 100%;
        padding-bottom: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        ${media.desktop} {
            grid-template-columns: repeat(3, 1fr);
            padding-bottom: 1rem;
        }

        .header-section {
            display: flex;
        }

        .header-left {
            align-items: end;
            justify-content: start;
        }

        .header-middle {
            align-items: center;
            justify-content: end;

            ${media.desktop} {
                align-items: center;
                justify-content: center;
            }
        }

        .header-right {
            display: none !important;
            align-items: center;
            justify-content: end;

            ${media.desktop} {
                display: flex !important;
            }
        }
    }
`

export const StyledHeaderLogo = styled.div`
    .logo {
        display: flex;
        /*width: 10rem;*/
        height: 3.3rem;
        margin: 0;

        ${media.desktop} {
            height: 4.35rem;
        }

        img {
            width: auto !important;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
`

export const StyledMenuButton = styled.button<{ $isOpen?: boolean }>`
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0 1rem 1rem;
    /*background: #333;*/

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    span {
        width: 40px;
        height: 2px;
        background: var(--beige);
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        position: relative;
    }

    span:nth-child(1) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 3px)' : 'rotate(0deg)'};
    }

    span:nth-child(2) {
        transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(4px, -2px)' : 'rotate(0deg)'};
    }
`

export const StyledHeaderMenu = styled.div`
`

export const StyledHeaderSocial = styled.div`
    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        align-items: center;
        margin: 0 0 0px 0;

        li {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                display: flex;
                color: var(--beige);
                transition: color 0.3s ease-in-out;
                /*width: 1rem;
                height: 1rem;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: ${({ theme }) => theme.colors.mutedBrown};
                padding: 0.65rem;*/
            }
        }
    }

    
`