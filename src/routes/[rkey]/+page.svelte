<script lang="ts">
  import { onMount } from "svelte";
  import { XRPC, CredentialManager } from "@atcute/client";
  import { marked } from "marked";
  import moment from "moment";
  import type { ComAtprotoRepoGetRecord } from "@atcute/client/lexicons";
  import "@atcute/whitewind/lexicons";
  const manager = new CredentialManager({
    service: "https://amanita.us-east.host.bsky.network",
  });
  import { page } from "$app/stores";
  const rpc = new XRPC({ handler: manager });
  console.log(manager.session);
  let entry: ComAtprotoRepoGetRecord.Output;
  onMount(async () => {
    const { data } = await rpc.get("com.atproto.repo.getRecord", {
      params: {
        collection: "com.whtwnd.blog.entry",
        repo: "nandi.dads.lol",
        rkey: $page.params.rkey,
      },
    });
    console.log({ data });
    entry = data;
  });
</script>

{#if entry}
  <div class="has-background-black-ter mb-3 p-2">
    <div class="is-size-2">
      {entry.value.title}
    </div>
    <div class="mb-5">{moment(entry.value.createdAt).fromNow()}</div>
    <div>{@html marked.parse(entry.value.content)}</div>
  </div>
{/if}

<style>
  .wrap {
    /* max-width: 50%; */
    overflow-wrap: break-word;
  }
</style>
