---
name: lamen-magic-expert
description: Especialista en el mantenimiento y evolución de la landing page y el concepto de negocio de Lamen Magic Experience. Úsalo para actualizar el catálogo de ramen, ajustar la guía de autoservicio o mantener la estética moderna/cyberpunk de la web.
---

# Lamen Magic Expert

Esta skill proporciona las directrices para trabajar en el proyecto Lamen Magic Experience en Getafe.

## Concepto de Negocio
- **Self-Service Ramen:** El cliente elige entre +30 sabores, usa estaciones de agua caliente y utensilios del local.
- **Asian Market:** Snacks exóticos y novedosos con opción de calentado en microondas.
- **Experiencia Guiada:** Todo debe estar explicado de forma sencilla y visual.

## Directrices de Diseño (UI/UX)
- **Paleta de Colores:** Fondo oscuro (#0d0d0d), acento rojo (#e63946), dorado (#ffd700).
- **Tipografía:** Serif (Playfair Display) para títulos, Sans-serif (Plus Jakarta Sans) para cuerpo.
- **Iconografía:** Uso de Lucide React para representar acciones (llama, bolsa de compra, rayo).

## Stack Tecnológico
- **Frontend:** React 18 + TypeScript.
- **Build Tool:** Vite.
- **CSS:** Vanilla CSS con variables personalizadas.
- **Deployment:** GitHub Pages a través de GitHub Actions (`.github/workflows/deploy.yml`).

## Flujos de Trabajo
- **Actualizar Ramen:** Modificar el array `menuItems` en `src/App.tsx`.
- **Cambiar Imágenes:** Usar URLs directas de Google Maps o Unsplash con enfoque gastronómico asiático.
- **Despliegue:** Realizar push a la rama `main` para activar la GitHub Action automática.
