<template>
  <div>
    Nuxt module playground!
    <EventTest />
  </div>
</template>

<script setup>

function alertHello () {
  console.log('hello')
  alert('Hello')
}
EventBus.$on('alertEvent', alertHello)

</script>
