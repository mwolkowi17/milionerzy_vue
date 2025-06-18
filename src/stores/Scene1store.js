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
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
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
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
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
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
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
      } else {
        this.isAnswerGood = false;
        this.isAnswerBad = true;
      }
    },
  },
});
