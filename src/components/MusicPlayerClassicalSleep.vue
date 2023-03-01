<template>
    <div class="row">
         <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
 <main class="grid">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1eipGIWOF7ZQRboXm9e8dW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Sz1gsYZdwj?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5L206exYAgDPrNRHFMie2d?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3k0acUaJlC9Y6EsmjDU2jg?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2cdBIjquJ36O6az9ByTGIo?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0YaZrZvwBA0hmfL6mTCh1n?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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