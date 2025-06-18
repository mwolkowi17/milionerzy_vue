<script setup>
import SceneStart from './SceneStart.vue';
import SceneGame1 from './SceneGame1.vue';
import { ref } from 'vue';

const ifStart = ref(false);
const ifSceneGame1=ref(true)

function koniec_gry(){
    ifStart.value=true
    ifSceneGame1.value=false
}

function start_gry(){
     ifStart.value=false
    ifSceneGame1.value=true
}
</script>

<template>
<SceneStart v-if="ifStart" @start-gry="start_gry"/>
<SceneGame1 v-if="ifSceneGame1" @koniec-gry="koniec_gry"/>
</template>

<style>

</style>