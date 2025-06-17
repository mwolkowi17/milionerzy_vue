<script setup>

</script>

<template>
  <div class="tlo">
    <div class="pytanie"></div>
    <button class="odpowiedz odpowiedz1"></button>
    <button class="odpowiedz odpowiedz2"></button>
    <button class="odpowiedz odpowiedz3"></button>
    <button class="odpowiedz odpowiedz4"></button>

    <button class="play-again"></button>
    <div class="punktacja">
      <p class="czas">Czas na odpowiedź: 8</p>  
    </div>
    <div class="ramka-punkty"></div>
  </div>

</template>

<style scoped>
.tlo {
  background-image: url("../assets/plansza_startowa1.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}

.play-again {
  background-image: url("../assets/play_again_b.png");
  background-size: 205px 100px;
  background-position: -16px -18px;
  background-repeat: no-repeat;
  border-radius: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: white;
  height: 72px;
  width: 178px;
  top: 20px;
  left: 40px;
  position: absolute;
  z-index: 2;
}

.play-again:hover {
  cursor: pointer;
}

.play-again:focus {
  outline: 8px solid #08e926;
}

.pytanie {
  background-image: url("../assets/przycisk_pytanie.png");
  background-size: 1280px 620px;
  background-position: -16px -18px;
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 620px;
  width: 1280px;
  top: 220px;
  left: 150px;
  position: absolute;
}

.odpowiedz{
  background-size: 455px 95px;
  background-position: -7px -9px;
  background-repeat: no-repeat;
  border-radius: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: white;
  height:81px;
  width:440px;
  position: absolute;
  z-index: 3;
}

.odpowiedz:hover{
  cursor: pointer;
}

.odpowiedz:focus {
  outline: 8px solid #08e926;
}

.odpowiedz1{
  background-image: url("../assets/odpowiedz1b.png");
  top: 670px;
  left: 140px;

}

.odpowiedz2{
  background-image: url("../assets/odpowiedz2b.png");
  top: 670px;
  left: 640px;
}

.odpowiedz3{
  background-image: url("../assets/odpowiedz3b.png");
  top: 790px;
  left: 140px;
}

.odpowiedz4{
  background-image: url("../assets/odpowiedz4b.png");
  top: 790px;
  left: 640px;
}

.punktacja{
  background-image: url("../assets/punktacja_1.png");
  background-size: 1920px 1080px;
  /* background-position: -16px -18px; */
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}

.ramka-punkty{
    background-image: url("../assets/ramka_punkty1.png");
  background-size: 430px 72px;
  /* background-position: -16px -18px; */
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 72px;
  width: 430px;
  top: 870px;
  left: 1445px;
  position: absolute;
}

.czas{
  color: white;
  font-size: 40px;
  position: absolute;
  top: 40px;
  left: 1480px;
}
</style>