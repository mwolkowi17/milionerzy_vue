<script setup>
import { useScene1Store } from '../stores/Scene1store.js'

const props = defineProps(['timerData'])

const store = useScene1Store()



</script>

<template>
     
      <p class="czas">Czas na odpowiedź: {{ props.timerData }}</p>   
</template>

<style scoped>
.czas {
  color: white;
  font-size: 40px;
  position: absolute;
  top: 40px;
  left: 1480px;
}
</style>