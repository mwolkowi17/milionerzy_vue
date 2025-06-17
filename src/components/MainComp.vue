<script setup>
import SceneStart from './SceneStart.vue';
import SceneGame1 from './SceneGame1.vue';
import { ref } from 'vue';

const ifStart = ref(false);
const ifSceneGame1=ref(true)
</script>

<template>
<SceneStart v-if="ifStart"/>
<SceneGame1 v-if="ifSceneGame1"/>
</template>

<style>

</style>