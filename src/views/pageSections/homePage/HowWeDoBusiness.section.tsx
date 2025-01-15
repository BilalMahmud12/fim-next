'use client'
import React, { useState } from "react";
import HomeSection from '@views/partials/HomeSection';
import { StyledHowWeDoBusinessSection, StyledSectionTitle } from "./styles";
import Container from "@components/Container";
import FlexBox from "@components/FlexBox";
import Image from 'next/image';
import { GoPlay } from "react-icons/go";

interface HowWeDoBusinessSectionProps {
    business: any;
}

const HowWeDoBusinessSection: React.FC<HowWeDoBusinessSectionProps> = ({ business }) => {
    const { Video = {} } = business;
    const { URL, Source, Cover } = Video;

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <React.Fragment>
            <HomeSection id='how-we-do-business' title='How We Do Business' bg='#1f2d1f'>
                <StyledHowWeDoBusinessSection>
                    <Container>
                        <FlexBox className="content-wrapper" flexDirection="column" alignItems="center">
                            <div className="video-container">
                                {!isPlaying ? (
                                    <>
                                        <div className="video-overlay" onClick={handlePlayVideo}></div>
                                        <div className="video-icon" onClick={handlePlayVideo}>
                                            <GoPlay />
                                        </div>
                                        <div className="video-cover-bg">
                                            <Image src={Cover?.url || ''} alt='About Us' width={500} height={300} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="video-frame">
                                        {!Source ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`${URL}?autoplay=1`}
                                                title="How We Do Business Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <video
                                                width="100%"
                                                height="100%"
                                                controls
                                                autoPlay
                                            >
                                                <source src={URL} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                )}
                            </div>
                        </FlexBox>
                    </Container>
                </StyledHowWeDoBusinessSection>
            </HomeSection>
        </React.Fragment>
    );
};

export default HowWeDoBusinessSection;
