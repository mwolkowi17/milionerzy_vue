<script setup>
import SceneStart from './SceneStart.vue';
import { ref } from 'vue';

const ifStart = ref(true);
</script>

<template>
<SceneStart v-if="ifStart"/>
</template>

<style>

</style>