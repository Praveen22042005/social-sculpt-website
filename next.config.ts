// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, 
};

export default nextConfig;