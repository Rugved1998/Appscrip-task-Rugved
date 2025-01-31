/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com"], // ✅ Allow images from this domain
      },
      output: 'export',
};

export default nextConfig;
