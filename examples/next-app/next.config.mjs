/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: required for the gh-pages/vercel static preview deployment.
  // Prerendering still runs in Node, so it still exercises the SSR crash path
  // documented in packages/dev-kit-italia/stories/frameworks/SSR.mdx.
  output: 'export',
  // The app is deployed under https://design-web-components.vercel.app/next-app/
  basePath: '/next-app',
};

export default nextConfig;
