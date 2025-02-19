/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {hostname: "images.pexels.com"}
        ]
    },


};

webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  }

export default nextConfig;
