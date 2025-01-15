'use client';
import React, { useEffect, useRef, useState } from "react";
import { StyledPortfolioSection } from "./styles";
import Container from "@components/Container";
import Box from "@components/Box";
import FlexBox from "@components/FlexBox";
import { portfolioLogos } from "@lib/data";
import ModalWithSlider from "@components/ModalWithSlider";

const PortfolioLogosSection: React.FC = () => {
    const logosRef = useRef<HTMLDivElement | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlides, setCurrentSlides] = useState<React.ReactNode[]>([]);

    const slides = ['Slide 1.1', 'Slide 1.2', 'Slide 1.3']

    const openModal = (slides: React.ReactNode[]) => {
        setCurrentSlides(slides);
        setIsModalOpen(true);
    };

    return (
        <React.Fragment>
            <StyledPortfolioSection>
                <Container>
                    <div className="section-title">
                        <h2>Our Companies</h2>
                    </div>

                    <div className="company-logos" ref={logosRef}>
                        {portfolioLogos.map((portfolioItem) => (
                            <Box key={portfolioItem.id} className="company-logo" onClick={() => openModal(slides)}>
                                <Box display="flex" flexDirection="column" alignItems="center" width="60%">
                                    <img
                                        src={portfolioItem.logo_src}
                                        alt={portfolioItem.name}
                                        width={250}
                                    />

                                    <FlexBox flexDirection="column" alignItems="center" className="learn-more-label">
                                        <span className="bg-line"></span>
                                        <span className="label">LEARN MORE</span>
                                    </FlexBox>
                                </Box>


                                <Box className="hoverImageOverlay">
                                    <div className="content-wrapper">
                                        <div className="overlay"></div>
                                        <img
                                            src={portfolioItem.hover_image_src}
                                            alt={portfolioItem.name}
                                        />

                                        <FlexBox flexDirection="row" alignItems="center" className="learn-more-label-hover">
                                            <span className="bg-line"></span>
                                            <span className="label">DISCOVER MORE ABOUT {portfolioItem.name}</span>
                                            <span className="bg-line"></span>
                                        </FlexBox>
                                    </div>
                                </Box>
                            </Box>
                        ))}

                        <ModalWithSlider
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            slides={currentSlides}
                        />
                    </div>
                </Container>
            </StyledPortfolioSection>
        </React.Fragment>
    );
}

export default PortfolioLogosSection;
