# Requisitos del Juego: WebQuest - El Reto de la Cultura Web

## Especificaciones
- **Nombre del juego:** WebQuest: El Reto de la Cultura Web
- **Público objetivo:** Jóvenes de una asociación juvenil interesados en la tecnología y la cultura web.
- **Número de preguntas:** 6 preguntas de opción múltiple (4 opciones por pregunta).
- **Sistema de puntuación:** +10 puntos por cada acierto.
- **Condición de finalización:** Muestra de puntuación final al responder la última pregunta y botón de reinicio.
- **Diseño y Navegación:** Responsive, centrado en pantalla de ordenador, con soporte completo para teclado (teclas 1-4 para seleccionar opciones, Enter para siguiente/reiniciar).
- **Estructura:** 3 archivos independientes (`index.html`, `styles.css`, `app.js`).
- **Restricciones estrictas:** Sin librerías externas, sin imágenes remotas, sin almacenamiento ni recolección de datos personales.

## Defectos 

1. **Defecto:** Al presionar Enter tras responder, se enviaba una selección accidental si el foco de teclado permanecía en uno de los botones de respuesta.
   - *Solución:* Se programó la lógica en `app.js` para mover automáticamente el foco al botón "Siguiente pregunta" o "Reiniciar" una vez que la pregunta actual ha sido respondida, evitando dobles pulsaciones involuntarias.

2. **Defecto:** Pérdida de foco accesible cuando se ocultaba la sección de preguntas y se mostraba la pantalla final de resultados.
   - *Solución:* Se añadió `tabindex="-1"` al título principal de la pantalla de resultados y se usó `document.getElementById('final-title').focus()` al finalizar la partida para asegurar que los lectores de pantalla y la navegación por teclado se posicionen correctamente.

3. **Decisión de Diseño/Accesibilidad:** Las opciones marcadas como correctas e incorrectas solo dependían del color (verde/rojo), lo que afectaba a la accesibilidad visual.
   - *Solución:* Se integraron indicadores textuales implícitos (prefijo de icono `✓ Correcto` y `✗ Incorrecto` en el texto de las opciones al responder) además del cambio de estilos CSS.

## Revisión del Prompt (Paso 3)

1. **¿Se puede saber cuándo el juego está terminado?**  
   Sí, se especifica en los requisitos funcionales al indicar que se muestra la puntuación final y un botón para reiniciar al finalizar la última pregunta.
2. **¿Se especifica dónde debe vivir cada parte del código?**  
   Sí, se indica la separación explícita en `index.html`, `styles.css` y `app.js`.
3. **¿Qué salida será posible comprobar en el navegador?**  
   Una interfaz funcional local con preguntas interactivas, marcador en tiempo real, estilos limpios y navegación por teclado.
4. **¿Qué requisito impediría que el resultado dependiera de un servicio externo?**  
   La restricción explícita de no utilizar dependencias, imágenes remotas ni servicios externos, ejecutándose 100% en local.   