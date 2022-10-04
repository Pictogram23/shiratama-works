/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gs://shiratama-works.appspot.com'],
  },
}

module.exports = nextConfig
