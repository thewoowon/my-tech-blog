/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

//const rehypeStringify  = import('rehype-stringify')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins:[],
    //providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx','md','tsx','ts'],
});