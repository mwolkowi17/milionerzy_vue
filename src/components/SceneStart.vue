<script setup>

</script>

<template>

<div class="tlo">
    <button class="start anim1"></button>
</div>
</template>

<style scoped>
.tlo{
    background-image: url("../assets/plansza_startowa1.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width:1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.start {
    background-image: url("../assets/przycisk1.png");
    background-size: 432px 133px;
    background-position: -1px 0px; 
    background-repeat: no-repeat;
    border: 1px;
    border-radius: 20px;
    position: absolute;
    top: 600px;
    left: 720px;
    width: 431px;
    height: 130px;
    

}

.start:hover {
    cursor: pointer;
}

.start:focus{
outline: 8px solid #08e926;
    /* outline: thick double #08e926; */
}

/* The animation code */
@keyframes example {
  /* from {background-color: red;}
  to {background-color: yellow;} */
  from {opacity: 0;}
  to {opacity: 100;}
}

/* The element to apply the animation to */
.anim1 {
  
  animation-name: example;
  animation-duration: 1s;
}
</style>