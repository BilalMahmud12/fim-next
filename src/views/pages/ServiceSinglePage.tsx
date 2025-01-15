'use client'
import React from 'react'
import Image from 'next/image';
import FlexBox from '@components/FlexBox';
import Breadcrumbs from '@components/Breadcrumbs';
import Container from '@components/Container';
import PageTitle from '@components/PageTitle';
import { StyledSingleServicePage } from './styles';
import { convertMarkdownToHtml } from '@utils/helpers';

interface ServicePageProps {
  service: any;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const [contentHtml, setContentHtml] = React.useState<string>('');

  React.useEffect(() => {
    if (service.Content) {
      convertMarkdownToHtml(service.Content).then((html) => {
        setContentHtml(html);
      });
    }
  }, [service.Content]);

  return (
    <StyledSingleServicePage>
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Services',
            href: '/services',
          },
        ]}
      />

      <PageTitle title={service.Title} />

      <Container>
        <FlexBox flexDirection="column">
          <div className="service-media">
            <Image
              src={service.Cover.url}
              alt={service.Title}
              width={1000}
              height={500}
            />
          </div>

          <div
            className="service-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </FlexBox>
      </Container>
    </StyledSingleServicePage>
  )
}

export default ServicePage