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
    domains: ['imagedelivery.net'],
  },
};

module.exports = nextConfig;

//const rehypeStringify  = import('rehype-stringify')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
    rehypePlugins: [
      //require('rehype-stringify'),
    ],
    //providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'tsx', 'ts'],
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['imagedelivery.net'],
  },
});

// amp, analyticsId, assetPrefix, basePath, cleanDistDir, compiler, compress, configOrigin, crossOrigin, devIndicators, distDir, env, eslint, excludeDefaultMomentLocales, experimental, exportPathMap, generateBuildId, generateEtags, headers, httpAgentOptions, i18n, images, modularizeImports, onDemandEntries, optimizeFonts, output, outputFileTracing, pageExtensions, poweredByHeader, productionBrowserSourceMaps, publicRuntimeConfig, reactStrictMode, redirects, rewrites, sassOptions, serverRuntimeConfig, skipMiddlewareUrlNormalize, skipTrailingSlashRedirect, staticPageGenerationTimeout, swcMinify, target, trailingSlash, transpilePackages, typescript, useFileSystemPublicRoutes, webpack
