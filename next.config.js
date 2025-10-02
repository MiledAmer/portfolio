/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      // If you want to restrict more tightly to your project dataset, use:
      // { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/vijf8f2k/production/**" }
    ],
  },
};

export default config;
