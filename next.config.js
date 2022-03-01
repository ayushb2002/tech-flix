/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.uacdn.net", "avatars.dicebear.com", "via.placeholder.com"],
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
