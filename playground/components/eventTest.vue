<template>
  <div>
    Helllo from test
    <!--
    <button @click="$emit('emitEvent')">
      click to check $emit to console
    </button> -->

    <button @click="clicked()">
      click to check $emit to alert
    </button>
  </div>
</template>

<script setup>

// const emits = defineEmits(['emitEvent', 'alertEvent'])
function clicked () {
  EventBus.$emit('alertEvent')
}

</script>
