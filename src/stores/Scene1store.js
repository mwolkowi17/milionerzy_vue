import { defineStore } from "pinia";
import gameData from "./source.json";

export const useScene1Store = defineStore("scene1", {
  // other options...
  state: () => ({
    is_Active1: false,
    is_Active2: false,
    is_Active3: false,
    is_Active4: false,

    corectAnswer: false,

    isAnswerGood: false,
    isAnswerBad: false,

    count: 0,

    ifChoice: true,

    ramkPuntyX: gameData.odpowiedzi[0].ramkaPositionX,
    ramkPuntyY: gameData.odpowiedzi[0].ramkaPositionY,

    pytanie: gameData.odpowiedzi[0].pytanie,
    answerA: gameData.odpowiedzi[0].odpowiedz1,
    answerB: gameData.odpowiedzi[0].odpowiedz2,
    answerC: gameData.odpowiedzi[0].odpowiedz3,
    answerD: gameData.odpowiedzi[0].odpowiedz4,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    changeAkcja1() {
      this.is_Active1 = true;
      this.is_Active2 = false;
      this.is_Active3 = false;
      this.is_Active4 = false;

      if (gameData.odpowiedzi[this.count].answer == "1") {
        this.isAnswerGood = true;
        this.isAnswerBad = false;
        this.increment();
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
        this.closeLose();
      }
    },
    changeAkcja2() {
      this.is_Active1 = false;
      this.is_Active2 = true;
      this.is_Active3 = false;
      this.is_Active4 = false;

      if (gameData.odpowiedzi[this.count].answer == "2") {
        this.isAnswerGood = true;
        this.isAnswerBad = false;
        this.increment();
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
        this.closeLose();
      }
    },
    changeAkcja3() {
      this.is_Active1 = false;
      this.is_Active2 = false;
      this.is_Active3 = true;
      this.is_Active4 = false;

      if (gameData.odpowiedzi[this.count].answer == "3") {
        this.isAnswerGood = true;
        this.isAnswerBad = false;
        this.increment();
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
        this.closeLose();
      }
    },
    changeAkcja4() {
      this.is_Active1 = false;
      this.is_Active2 = false;
      this.is_Active3 = false;
      this.is_Active4 = true;

      if (gameData.odpowiedzi[this.count].answer == "4") {
        this.isAnswerGood = true;
        this.isAnswerBad = false;
        this.increment();
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
        this.closeLose();
      }
    },

    closeWin() {
      setTimeout(() => {
        this.isAnswerGood = false;
        this.ifChoice = true;
        this.ramkPuntyX = gameData.odpowiedzi[this.count].ramkaPositionX;
        this.ramkPuntyY = gameData.odpowiedzi[this.count].ramkaPositionY;
        this.is_Active1 = false;
        this.is_Active2 = false;
        this.is_Active3 = false;
        this.is_Active4 = false;
      }, 2000);
    },

    closeLose() {
      setTimeout(() => {
        this.isAnswerBad = false;
        this.ifChoice = true;
      }, 2000);
    },
  },
});
