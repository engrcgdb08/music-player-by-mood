<template>
    <div class="row">
         <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
 <main class="grid">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/71SPLW4YsF00g1rAVnlNi9?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5zRMotDPBIeygM03tP2pv1?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/0wwD4FDfzmTIMJP4JSpdx0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXd5zUwdn6lPb?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3qCtbZnuGis09aQPjHOFig?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7MHZ2A5yvvqlqHZZlc5k86?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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