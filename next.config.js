/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
  //     },
  //     {
  //       source: "/api/movies/:id",
  //       destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko-KR`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
