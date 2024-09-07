/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack(config, { isServer }) {
      // Custom Webpack configuration
      return config;
    },
    env: {
      CUSTOM_VARIABLE: process.env.CUSTOM_VARIABLE,
    },
    images: {
      domains: ['example.com'],
    },
  };
  
  export default nextConfig;
