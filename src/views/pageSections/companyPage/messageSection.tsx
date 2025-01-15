'use client'
import React from 'react'
import Container from '@components/Container';
import Typography from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { StyledMessageSection } from './styles'

interface MessageSectionProps {
    messageData: {
        title: string;
        message: string;
        websiteURL: string;
        websiteLabel: string;
        phone: string;
        slogan?: string
    };
}

const MessageSection: React.FC<MessageSectionProps> = (props) => {
    const { messageData } = props
    return (
        <StyledMessageSection>
            <Container>
                <div className='message'>
                    <Typography variant='h1' className='title'>{messageData.title}</Typography>
                    <Typography variant='p' className='description'>{messageData.message}</Typography>
                    <div className='links'>
                        <Link href={messageData.websiteURL} className='website'>
                            <span>{messageData.websiteLabel}</span>
                        </Link>
                        <Link href={messageData.phone} className='phone'>
                            <span>{messageData.phone}</span>
                        </Link>
                    </div>
                    <div className='about'>{messageData.slogan}</div>
                </div>
            </Container>
        </StyledMessageSection>
    )
}

export default MessageSection