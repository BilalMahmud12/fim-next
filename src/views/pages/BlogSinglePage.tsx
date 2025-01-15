'use client';
import React from 'react';
import Image from 'next/image';
import FlexBox from '@components/FlexBox';
import Breadcrumbs from '@components/Breadcrumbs';
import Container from '@components/Container';
import PageTitle from '@components/PageTitle';
import { convertMarkdownToHtml } from '@utils/helpers';
import { StyledSingleBlog } from './styles';

interface BlogSinglePageProps {
  blogPost: any;
}

const BlogSinglePage: React.FC<BlogSinglePageProps> = ({ blogPost }) => {
  const [contentHtml, setContentHtml] = React.useState<string>('');

  React.useEffect(() => {
    if (blogPost.Content) {
      convertMarkdownToHtml(blogPost.Content).then((html) => {
        setContentHtml(html);
      });
    }
  }, [blogPost.Content]);

  return (
    <StyledSingleBlog>
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blogs',
            href: '/blogs',
          },
        ]}
      />
      <PageTitle title={blogPost.Title} />
      
      <Container>
        <FlexBox flexDirection="column">
          <div className="blog-media">
            <Image
              src={blogPost.Cover.url}
              alt={blogPost.Title}
              width={1000}
              height={500}
            />
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </FlexBox>
      </Container>
    </StyledSingleBlog>
  );
};

export default BlogSinglePage;
