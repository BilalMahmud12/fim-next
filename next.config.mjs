/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    publicRuntimeConfig: {
        theme: "DEFAULT"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fimwebsite.s3.eu-central-1.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;