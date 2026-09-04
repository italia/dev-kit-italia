/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: required for the gh-pages/vercel static preview deployment.
  // Prerendering still runs in Node, so it still exercises the SSR crash path
  // documented in packages/dev-kit-italia/stories/frameworks/SSR.mdx.
  output: 'export',
  // The app is deployed under https://italia.github.io/dev-kit-italia/next-app/
  // or https://design-web-components.vercel.app/next-app/
  basePath: process.env.GH_PAGES_PATH ? `${process.env.GH_PAGES_PATH}/next-app` : '/next-app',
};

export default nextConfig;