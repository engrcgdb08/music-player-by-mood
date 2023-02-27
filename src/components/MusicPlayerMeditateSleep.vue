<template>
    <div class="row">
         <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
 <main class="grid">
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0d8fizC1Lqam8HcOizfGIq?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7C5Jj9bLdoC9ig586ZBdvM?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0Y0379kblVnhjemIu6xArR?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6jl4Y1wYmwlKiYkuPf1Mzl?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1fhvOcfwrRWjAfjs9tqgkm?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3qOVr1ltueWUfbf5ZEYSQU?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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