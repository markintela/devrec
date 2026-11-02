/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // upload de imagens do portfólio pelo backoffice
    serverActions: { bodySizeLimit: "10mb" },
  },
};

export default nextConfig;
