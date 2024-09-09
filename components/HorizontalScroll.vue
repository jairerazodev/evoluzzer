<template>
  <div ref="scrollContainerRef" class="scroll-container">
    <div class="flex-container">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :class="['card', { 'expanded': expandedStates[index] }]"
        @click="handleExpand(index)"
        :style="{ backgroundImage: `url(${section.image})` }"
      >
        <div class="content">
          <h1 class="title">{{ section.title }}</h1>
          <p class="text">{{ section.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const sections = [
  { 
    title: "VISUAL ARTS & 3D", 
    content: "Expert in 3D modeling and digital art with certifications in Blender and Adobe Illustrator. Specialized in creating visual experiences that blend technology and artistry, from conceptual design to final production.",
    image: "/assets/img/1.jpg" 
  },
  { 
    title: "CINEMA & DIGITAL VIDEO", 
    content: "Independent filmmaker and certified Adobe Premiere Pro user. Experienced in operating digital cinema cameras and producing content for the big screen and digital platforms, with a deep understanding of DIT and audiovisual production.",
      image: "/assets/img/2.jpg" 
  },
  { 
    title: "AUDIO & MUSIC PRODUCTION", 
    content: "Audio producer and sound designer, shaping immersive audio experiences. Skilled in mixing, mastering, and creating soundscapes that enhance multimedia projects across various platforms.",
    image: "/assets/img/3.jpg" 
  },
  { 
    title: "PHOTOGRAPHY & CAMERA OPERATION", 
    content: "Certified camera operator for digital cinema and television, with extensive experience in concert and event photography. As a photojournalist with Bunka Collective, I have covered cultural events and concerts, providing dynamic visual storytelling.",
    image: "/assets/img/4.jpg" 
  },
  { 
    title: "WEB DEVELOPMENT & DEVOPS", 
    content: "I merge 3D modeling, asset generation, and storytelling with strong development and DevOps skills. I deploy interactive experiences using Web3 technology to create virtual tours, AR experiences, and interactive websites. Proficient in IT across Linux, Windows, and macOS, I ensure smooth operations for creative digital projects.",
    image: "/assets/img/5.jpg" 
  },
  { 
    title: "MULTIMEDIA & DIGITAL CONTENT", 
    content: "Creative director with extensive experience in managing digital projects. As a multimedia content producer and digital marketer, I have led numerous projects in new media, focusing on branding, storytelling, and innovative content creation.",
    image: "/assets/img/7.jpg" 
  },
  { 
    title: "DATA & ARTIFICIAL INTELLIGENCE", 
    content: "Certified in Artificial Intelligence for Business and data preparation with Power BI, combining technical expertise with creativity to leverage AI for transformative digital solutions in content creation and user experience.",
    image: "/assets/img/6.jpg" 
  },
  { 
    title: "CULTURAL MANAGEMENT", 
    content: "Cultural manager and creative leader since 2008 with Bunka Collective, overseeing branding, identity, and image. Directed the cinema club 'La Otra Acera,' fostering a community-driven approach to independent cinema and audiovisual culture.",
    image: "/assets/img/8.jpg" 
  }
];

const scrollContainerRef = ref(null);
const expandedStates = reactive(Array(sections.length).fill(false));

const handleExpand = (index) => {
  expandedStates[index] = !expandedStates[index];
};

onMounted(() => {
  const scrollContainer = scrollContainerRef.value;
  if (scrollContainer) {
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener('wheel', handleWheel);
  }
});
</script>

<style scoped>
.scroll-container {
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  background-color: #ffebcd; /* Background color for the container */
}

.flex-container {
  display: flex;
  height: 100%;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
}

.card.expanded {
  width: 50vw; /* Expands to 50% of the viewport width */
}

.content {
  color: white;
  text-align: center;
  z-index: 1;
  max-width: 100%; /* Limita el ancho del contenido */
  margin: 0 auto; /* Centra el contenido */
  padding-right: 10%; /* Añade espacio alrededor del texto */
  padding-left: 10%; /* Añade espacio alrededor del texto */
}

.title {
  font-size: 3rem; /* Duplicado de 3.25rem */
  font-weight: bold;
  margin-bottom: 1rem; /* Duplicado de 1.75rem */
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
}

.text {
  font-size: 1.75rem; /* Duplicado de 1.2rem */
  line-height: 1.25;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: normal;
}

.card {
  /* ... otros estilos existentes ... */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
}
</style>