<script setup>
import { useScene1Store } from '../stores/Scene1store.js'
import { ref } from 'vue'

//dodać pozycję ramki po starcie sceny
const emits = defineEmits(['koniec-gry']);

const store = useScene1Store()

//dowód na to, że stan się zmienia
console.log(store.count)
const ifChoice = ref(true)

function blurFocus(){
  document.getElementsByClassName("odpowiedz")[0].blur()
  document.getElementsByClassName("odpowiedz")[1].blur()
  document.getElementsByClassName("odpowiedz")[2].blur()
  document.getElementsByClassName("odpowiedz")[3].blur()
}

function changeActive() {
  store.is_Active1 = false
  store.is_Active2 = false
  store.is_Active3 = false
  store.is_Active4 = false
}

function afterLoose() {
  if (store.isAnswerBad) {
    setTimeout(() => {
      emits("koniec-gry")
      changeActive()
      store.count=0
    }, 2500)
  }
}

function odpowiedz1akcja() {
  if (store.ifChoice) {
    store.changeAkcja1()
    store.ifChoice = false
    store.closeWin()
    afterLoose()
    blurFocus()
  }

}

function odpowiedz2akcja() {
  if (store.ifChoice) {
    store.changeAkcja2()
    store.ifChoice = false
    store.closeWin()
    afterLoose()
    blurFocus()
  }
}

function odpowiedz3akcja() {
  if (store.ifChoice) {
    store.changeAkcja3()
    store.ifChoice = false
    store.closeWin()
    afterLoose()
     blurFocus()
  }
}

function odpowiedz4akcja() {
  if (store.ifChoice) {
    store.changeAkcja4()
    store.ifChoice = false
    store.closeWin()
    afterLoose()
     blurFocus()
  }
}

function endScene(){
emits("koniec-gry");
changeActive();
store.count=0
store.ramkPuntyX = "1445px"
store.ramkPuntyY = "870px"
}





</script>

<template>
  <div class="tlo">
    <div class="pytanie">
      <p class="pytanie-paragraf">
      {{ store.pytanie }}
      </p>
    </div>
    <div class="plansza-wygrana" v-if="store.isAnswerGood"></div>
    <div class="plansza-przegrana" v-if="store.isAnswerBad"></div>
    <button class="odpowiedz odpowiedz1" :class="{ active: store.is_Active1 }" @click="odpowiedz1akcja">{{ store.answerA }}</button>
    <button class="odpowiedz odpowiedz2" :class="{ active: store.is_Active2 }" @click="odpowiedz2akcja">{{ store.answerB }}</button>
    <button class="odpowiedz odpowiedz3" :class="{ active: store.is_Active3 }" @click="odpowiedz3akcja">{{ store.answerC }}</button>
    <button class="odpowiedz odpowiedz4" :class="{ active: store.is_Active4 }" @click="odpowiedz4akcja">{{ store.answerD }}</button>

    <button class="play-again" @click="endScene"></button>
    <div class="punktacja">
      <p class="czas">Czas na odpowiedź: 8</p>
    </div>
    <div class="ramka-punkty" :style="{ left: store.ramkPuntyX, top: store.ramkPuntyY }"></div>
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
  color: white;
  font-size: 30px;
  height: 620px;
  width: 1280px;
  top: 220px;
  left: 150px;
  position: absolute;
}

.pytanie-paragraf{
  position: absolute;
  top: 290px;
  left: 300px;
}

.odpowiedz {
  background-image: url("../assets/odpowiedz1b.png");
  background-size: 455px 95px;
  background-position: -7px -9px;
  background-repeat: no-repeat;
  border-radius: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: white;
  color: white;
  font-size: 30px;
  height: 81px;
  width: 440px;
  position: absolute;
  z-index: 3;
}

.odpowiedz:hover {
  cursor: pointer;
}

.odpowiedz:focus {
  outline: 8px solid #08e926;
}

.odpowiedz1 {

  top: 670px;
  left: 140px;
}

.odpowiedz2 {
  
  top: 670px;
  left: 640px;
}

.odpowiedz3 {

  top: 790px;
  left: 140px;
}

.odpowiedz4 {

  top: 790px;
  left: 640px;
}

.punktacja {
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

.ramka-punkty {
  background-image: url("../assets/ramka_punkty1.png");
  background-size: 430px 72px;
  /* background-position: -16px -18px; */
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 72px;
  width: 430px;
  /* top: 870px;
  left: 1445px; */
  position: absolute;
}

.czas {
  color: white;
  font-size: 40px;
  position: absolute;
  top: 40px;
  left: 1480px;
}

.active {
  backdrop-filter: invert(80%);
  outline: 8px solid #e90808 !important;
}

.plansza-wygrana {
  background-image: url("../assets/answer_good2.png");
  background-size: 1280px 620px;
  background-position: -16px -18px;
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 620px;
  width: 1280px;
  top: 220px;
  left: 150px;
  position: absolute;
  z-index: 2;
}

.plansza-przegrana {
  background-image: url("../assets/answer_bad2.png");
  background-size: 1280px 620px;
  background-position: -16px -18px;
  background-repeat: no-repeat;
  border-radius: 20px;

  height: 620px;
  width: 1280px;
  top: 220px;
  left: 150px;
  position: absolute;
  z-index: 2;
}
</style>