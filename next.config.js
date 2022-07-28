/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx','tsx','ts'],
});