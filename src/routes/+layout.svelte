<script>
  let { children } = $props();
 
</script>

<main class="container wrap">
  <div class="mb-6">
    <div class="is-size-1"><a href="./">nandi's blog</a></div>
    <div>
      <a
        href="https://atproto-browser.vercel.app/at/did:plc:ngokl2gnmpbvuvrfckja3g7p/com.whtwnd.blog.entry"
        >at://did:plc:ngokl2gnmpbvuvrfckja3g7p/com.whtwnd.blog.entry</a
      >
    </div>
  </div>
  {@render children()}
</main>

<style>
  .wrap {
    /* max-width: 50%; */
    overflow-wrap: break-word;
  }
</style>
