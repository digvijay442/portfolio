import { g as generateOgImageForSite } from './index_MPj2rovi.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: { "Content-Type": "image/png" }
});

export { GET };
