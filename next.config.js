/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "openweathermap.org", 
      "flagcdn.com", 
      "firebasestorage.googleapis.com",
    ],
  }
}

module.exports = nextConfig
