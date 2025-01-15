'use client'
import React, { useState } from 'react';
import { StyledVideoSection } from './styles';
import Container from '@components/Container';
import Image from 'next/image';
import { GoPlay } from "react-icons/go";

interface HeroSectionProps {
    coverImage?: string;
    videoUrl?: string;
    SourceUrl?: string;
}

const VideoSection: React.FC<HeroSectionProps> = (props) => {
    const { coverImage, videoUrl, SourceUrl } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <StyledVideoSection>
            <Container>
                <div className="hero-video-content">
                    {!isPlaying ? (
                        <>
                            <div className='overlay' onClick={handlePlayVideo}></div>
                            <div className='hero-cover' onClick={handlePlayVideo}>
                                <Image
                                    src={coverImage}
                                    alt="hero-cover"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className='player-button' onClick={handlePlayVideo}>
                                <GoPlay />
                            </div>
                        </>
                    ) : (
                        <div className='video-frame'>
                            {videoUrl ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${videoUrl}?autoplay=1`}
                                    title="Hero Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <video width="100%" height="100%" controls autoPlay muted loop>
                                    <source src={SourceUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </StyledVideoSection>
    );
};

export default VideoSection;
