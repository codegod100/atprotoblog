<script lang="ts">
  import { onMount } from "svelte";
  import { XRPC, CredentialManager } from "@atcute/client";
  import { marked } from "marked";
  import moment from "moment";
  import type {
    At,
    ComWhtwndBlogEntry,
    Records,
    ComWhtwndBlogGetAuthorPosts,
    ComAtprotoRepoListRecords,
    ComWhtwndBlogDefs,
    Queries,
  } from "@atcute/client/lexicons";
  // import type { ComWhtwndBlogEntry } from "@atcute/whitewind/lexicons";
  import "@atcute/whitewind/lexicons";
  const manager = new CredentialManager({
    service: "https://amanita.us-east.host.bsky.network",
  });
  const rpc = new XRPC({ handler: manager });
  console.log(manager.session);
  let entries: ComAtprotoRepoListRecords.Record[];
  onMount(async () => {
    const { data } = await rpc.get("com.atproto.repo.listRecords", {
      params: {
        collection: "com.whtwnd.blog.entry",
        repo: "nandi.dads.lol",
      },
    });
    // let params: ComWhtwndBlogGetAuthorPosts.Params = {
    //   author: "did:plc:ngokl2gnmpbvuvrfckja3g7p",
    // };
    // let output : ComWhtwndBlogGetAuthorPosts.Output;

    // }
    // let foo: Queries["com.whtwnd.blog.getAuthorPosts"];
    // const result = await rpc.get();
    // const result = await rpc.get(ComWhtwndBlogGetAuthorPosts);
    console.log({ result: data.records });
    entries = data.records;
  });
</script>

<main class="container wrap">
  <div class="mb-6">
    <div class="is-size-1">nandi's blog</div>
    <div>
      <a
        href="https://atproto-browser.vercel.app/at/did:plc:ngokl2gnmpbvuvrfckja3g7p/com.whtwnd.blog.entry"
        >https://atproto-browser.vercel.app/at/did:plc:ngokl2gnmpbvuvrfckja3g7p/com.whtwnd.blog.entry</a
      >
    </div>
  </div>
  {#each entries as entry}
    <div class="has-background-black-ter mb-3 p-2">
      <div class="is-size-2">{entry.value.title}</div>
      <div class="mb-5">{moment(entry.value.createdAt).fromNow()}</div>
      <div>{@html marked.parse(entry.value.content)}</div>
    </div>
  {/each}
</main>

<style>
  .wrap {
    /* max-width: 50%; */
    overflow-wrap: break-word;
  }
</style>
