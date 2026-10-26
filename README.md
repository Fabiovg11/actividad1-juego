# WebQuest: El Reto de la Cultura Web

Juego de preguntas interactivo de cultura web desarrollado en Vanilla HTML, CSS y JavaScript puro. Diseñado para ejecutarse localmente sin servidor ni dependencias.

## Estructura del Proyecto
- `index.html`: Estructura semántica del juego.
- `styles.css`: Estilos visuales responsive y accesibles.
- `app.js`: Lógica del juego, control de puntuación y soporte de teclado.
- `requisitos.md`: Documentación de requisitos y registro de defectos corregidos.
- `prompt-v1.md` y `prompt-v2.md`: Versiones del prompt RTCFR utilizadas.

## Instrucciones de Prueba Local
1. Descarga o clona la carpeta `actividad-1-juego`.
2. Haz doble clic sobre el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Firefox, Edge).

## Pruebas Manuales Recomendadas
1. **Verificación de Respuesta Correcta e Incorrecta:**
   - Selecciona una respuesta correcta y comprueba que se suman 10 puntos al marcador y se resalta la opción en verde con el icono `✓`.
   - Avanza y selecciona una respuesta incorrecta; verifica que se muestra en rojo con `✗` y que la opción correcta se revela.
2. **Navegación por Teclado:**
   - Usa los números `1`, `2`, `3` o `4` del teclado para seleccionar las respuestas.
   - Pulsa `Enter` para avanzar a la siguiente pregunta sin utilizar el ratón.
3. **Ciclo Completo y Reinicio:**
   - Responde las 6 preguntas hasta llegar a la pantalla final de resultados.
   - Presiona el botón "Reiniciar partida" (o pulsa `Enter`) y verifica que la puntuación se restablece a 0 y la primera pregunta vuelve a cargarse con el foco activo.