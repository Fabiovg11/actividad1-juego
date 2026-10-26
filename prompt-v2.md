# Prompt Versión 2 (Ajustes de Accesibilidad y Teclado)

Rol: Actúa como desarrollador/a frontend especializado/a en accesibilidad (WCAG 2.1 AA) para 2.º DAW.

Tarea: Construye un juego web de preguntas interactivo y accesible llamado WebQuest: El Reto de la Cultura Web.

Contexto: Ejecución local en navegador web sin servidor.
Preguntas: 6 preguntas sobre cultura web con 4 opciones cada una.

Requisitos funcionales y de interacción por teclado:
- Muestra una pregunta cada vez.
- Permite seleccionar opción mediante clics o atajos numéricos teclado (teclas 1 a 4).
- Al responder, deshabilita las opciones y mueve el foco automáticamente al botón 'Siguiente pregunta'.
- Marca respuestas mediante color e indicadores textuales (✓/✗).
- Muestra marcador en tiempo real (+10 por acierto).
- Al finalizar, transfiere el foco al título de la pantalla final y permite reiniciar con el botón o Enter.

Requisitos de accesibilidad y calidad:
- Uso estricto de HTML semántico, regiones ARIA (`aria-live`, `aria-label`).
- Sin dependencias, sin imágenes externas, sin almacenamiento de datos.
- Tres archivos independientes (`index.html`, `styles.css`, `app.js`).

Formato de salida:
- Árbol de archivos.
- Bloques de código completos para los 3 archivos.
- Guía de pruebas manuales.