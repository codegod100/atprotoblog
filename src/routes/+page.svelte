<script lang="ts">
  import { onMount } from "svelte";
  import { XRPC, CredentialManager } from "@atcute/client";
  import { marked } from "marked";
  import moment from "moment";
  import type { ComAtprotoRepoListRecords } from "@atcute/client/lexicons";
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

    console.log({ result: data.records });
    entries = data.records;
  });
</script>

{#each entries as entry}
  <div class="has-background-black-ter mb-3 p-2">
    <div class="is-size-2">
      <a href={entry.uri.split("/").slice(-1)}>{entry.value.title}</a>
    </div>
    <div class="mb-5">{moment(entry.value.createdAt).fromNow()}</div>
    <div>{@html marked.parse(entry.value.content)}</div>
  </div>
{/each}
