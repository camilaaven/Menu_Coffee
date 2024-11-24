<template>
  <div class="contenedor">
    <img src="https://i.postimg.cc/Y9CYNsC4/Whats-App-Image-2024-11-22-at-3-56-15-PM.jpg" class="imagen" alt="imagen 1">
  </div>
</template>

<style>
.imagen {
  display: flex;
  height: 180px;
  width: 200px; 
  border-radius: 290px;
  margin-left: -60px;

}
.contenedor{
  display: flex;
}
@media screen and (min-width: 280px) and (max-width: 490px){
  .imagen {
  display: flex;
  height: 100px;
  width: 100px; 
  margin-left: 149px;
  margin-top: 10px;
}
.contenedor{
  display: flex;
}
}
</style>