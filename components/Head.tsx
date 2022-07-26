import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout'

export const WEBSITE_HOST_URL = 'https://ubtech.vercel.app';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'UBCARE TECH BLOG',
    description:
      'Value creation for sustainable life',
    image: `${WEBSITE_HOST_URL}/images/ubTech_Blog_Preview.png`,
    type: 'Blog',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="UBCARE TECH BLOG" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
    </NextHead>
  );
};

export default Head;
