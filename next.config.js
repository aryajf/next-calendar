/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'mhipedpedgurkmgjwfup.supabase.co',
        pathname: '**',
      },
    ]
  },

}

module.exports = nextConfig
