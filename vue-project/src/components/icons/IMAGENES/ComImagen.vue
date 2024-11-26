<template>
  <div class="contenedor">
    <img src="C:\Users\camil\Downloads\WhatsApp Image 2024-11-23 at 10.53.22 PM.jpeg" class="imagen" alt="imagen 1">
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
  width: 120px; 
  margin-left: 249px;
  margin-top: 10px;
}
.contenedor{
  display: flex;
}
}
</style>