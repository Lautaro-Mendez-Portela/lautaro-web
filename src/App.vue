<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import CourtReservationSystemSection from './components/CourtReservationSystemSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import AmbientBackground from './components/AmbientBackground.vue'
import { useVisualEffects } from './composables/useVisualEffects'

const portfolio = ref<HTMLElement | null>(null)
useVisualEffects(portfolio)
</script>

<template>
  <div ref="portfolio">
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <AmbientBackground />
    <Navbar />
    <main id="main-content" class="flex-grow relative z-10" tabindex="-1">
      <HeroSection />
      <ServicesSection />
      <CourtReservationSystemSection />
      <ProjectsSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
