/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Old Wix URLs → new pages, so existing links and search results keep working.
  async redirects() {
    return [
      { source: "/about-9", destination: "/rooms", permanent: true },
      // Single "The Room" page was replaced by the Studios pages.
      { source: "/room", destination: "/rooms", permanent: true },
      { source: "/es/room", destination: "/es/rooms", permanent: true },
      { source: "/general-5", destination: "/privacy", permanent: true },
      { source: "/booking-engine", destination: "/contact", permanent: true },
      { source: "/blank", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
