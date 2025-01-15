'use client'
import React from "react"
import Container from "@components/Container";
import styled from "styled-components";
import { media } from "@utils/constants"

interface SectionProps {
    title: string;
    id?: string;
    bg?: string;
    children?: React.ReactNode;
    padding?: string;
}

const HomeSection: React.FC<SectionProps> = (props) => {
    const { id, title, bg, children, padding } = props;

    return (
        <StyledSection id={id} $bg={bg} $padding={padding}>
            <Container>
                <div className="section-title">
                    <h2>{title}</h2>
                </div>

                <div className="section-content">
                    {children}
                </div>
            </Container>
        </StyledSection>
    )
}

export default HomeSection

const StyledSection = styled.section<{ $bg?: string, $padding?: string }>`
    padding: ${props => props.$padding || '4rem 0'};
    background-color: ${props => props.$bg || 'transparent'};
    .section-title {
        padding: 0 0 2.5rem 0;

        h2 {
            font-family: var(--font-noto-serif-display);
            font-size: 34px;
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
`