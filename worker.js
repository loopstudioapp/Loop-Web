// loopstudio.tech redirects to www (same 307 Vercel used, path and query kept); everything else is the static site.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "loopstudio.tech") {
      url.hostname = "www.loopstudio.tech";
      return Response.redirect(url.toString(), 307);
    }
    return env.ASSETS.fetch(request);
  },
};
