<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-item">
        <a href="#" class="nav-link">J/E</a>
      </div>
      <ul class="nav-list">
        <li v-for="section in sections" :key="section.title" class="nav-item nav-item-desktop">
          <a href="#" class="nav-link">{{ section.title }}</a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="content">
    <!-- Aquí el contenido de las secciones -->
  </div>
</template>

<script setup>
const sections = [
  { 
    title: "3D ARTS",   
  },
  { 
    title: "DIGITAL CINEMA", 
  },
  { 
    title: "AUDIO PRODUCTION", 
  },
  { 
    title: "PHOTOGRAPHY & CAMERA", 
  },
  { 
    title: "WEB DEVELOPMENT",
  },
  { 
    title: "DIGITAL MEDIA", 
  },
  { 
    title: "ARTIFICIAL INTELLIGENCE",
  },
  { 
    title: "CULTURAL MANAGEMENT",
  }
];
</script>

<style scoped>
.header {
  background-color: rgba(0, 0, 0, 0.25); /* Fondo con opacidad */
  width: 100%;
  position: fixed; /* Fijar el encabezado en la parte superior */
  top: 0;
  left: 0;
  z-index: 9999; /* Asegura que esté por encima de todo */
  padding: 1.5rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  padding: 0 1rem;
}

.nav-link {
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.1);
  transition: color 0.3s;
}

.nav-link:hover {
  color: #14fe64;
}
</style>
