<template>
  <div id="app">
    <!-- Componente de navegación fijo en la parte superior -->
    <NavigationLayout />

    <!-- Aquí va el contenido principal de la página -->
    <router-view />
  </div>
</template>

<script>
import NavigationLayout from './components/NavigationLayout.vue'; // Ruta del componente

export default {
  components: {
    NavigationLayout
  }
};
</script>

<style>
/* Estilos globales o específicos de App.vue */
</style>
