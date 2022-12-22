/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  videoOptimization: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['www.youtube.com'],
    path: '/_next/image',
    loader: 'default',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;

//const rehypeStringify  = import('rehype-stringify')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
    rehypePlugins: [],
    //providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'tsx', 'ts'],
});
