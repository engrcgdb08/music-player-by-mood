<template>
    <div class="row">
         <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
 <main class="grid">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/20AlNu9tlMqbU5nzBZoshA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1zlqkyCVoRvxJSbbTU1FHL?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6zGUqeLdE94U6MF98o56lb?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6KtQWEUiFB6wrssA0SclNP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/0JGWWmsxGB6UyiwDXdBJwS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3KvC6qnnWQILbcUzaOpNKh?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</main>
  </ul>
    </div>
</template>

<style scoped>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px;
  align-items: stretch;
  }
.grid img {
  border: 1px solid #ccc;
  box-shadow: 6px 6px 6px 6px  rgba(0,0,0,0.3);
  max-width: 100%;
}
</style>