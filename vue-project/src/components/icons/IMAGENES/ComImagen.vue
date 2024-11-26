<template>
  <div class="contenedor">
    <img src="https://i.postimg.cc/QMwjX2vk/Whats-App-Image-2024-11-23-at-10-53-04-PM.jpg" class="imagen" alt="imagen 1">
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
  width: 110px; 
  margin-left: 249px;
  margin-top: 10px;
}
.contenedor{
  display: flex;
}
}
</style>