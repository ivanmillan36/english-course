# Guía de Uso - TaskMaster

## 🎯 Cómo usar la aplicación

### Primeros pasos

1. **Accede a la aplicación**: Abre tu navegador y ve a `http://localhost:4321`
2. **Explora la interfaz**: Verás tareas de ejemplo que te ayudarán a entender las funcionalidades
3. **Agrega tu primera tarea**: Usa el formulario en la parte superior para crear una nueva tarea

### Gestión de tareas

#### Agregar tareas
1. Escribe el texto de tu tarea en el campo "Nueva tarea"
2. Selecciona la prioridad (Baja 🟢, Media 🟡, Alta 🔴)
3. Haz clic en "Agregar" o presiona Enter

#### Completar tareas
- Haz clic en el checkbox ☐ al lado de cualquier tarea para marcarla como completada ✓
- Las tareas completadas aparecerán tachadas y con color gris

#### Eliminar tareas
- Pasa el mouse sobre una tarea para ver el icono de basura 🗑️
- Haz clic en el icono para eliminar (aparecerá una confirmación)

### Filtros y búsqueda

#### Filtros por estado
- **Todas**: Muestra todas las tareas
- **Pendientes**: Solo tareas sin completar
- **Completadas**: Solo tareas completadas

#### Ordenamiento
- **Más recientes**: Tareas nuevas primero
- **Más antiguas**: Tareas antiguas primero  
- **Por prioridad**: Alta → Media → Baja
- **Alfabético**: Orden A-Z

#### Búsqueda
- Usa la barra de búsqueda para encontrar tareas específicas
- La búsqueda es en tiempo real (no necesitas presionar Enter)
- Busca por cualquier palabra en el texto de la tarea

### Estadísticas

La sección de estadísticas te muestra:
- **Total**: Número total de tareas
- **Completadas**: Tareas que has terminado
- **Pendientes**: Tareas que aún necesitas hacer
- **Progreso**: Porcentaje de tareas completadas
- **Barra de progreso**: Representación visual de tu avance

### Funciones adicionales

#### Modo oscuro/claro
- Haz clic en el botón 🌙/☀️ en la esquina superior derecha
- El tema se guardará automáticamente para tu próxima visita

#### Limpiar completadas
- Usa el botón "Limpiar completadas" para eliminar todas las tareas terminadas de una vez

## 💡 Consejos y mejores prácticas

### Organización efectiva

1. **Usa las prioridades inteligentemente**:
   - 🔴 Alta: Tareas urgentes e importantes
   - 🟡 Media: Tareas importantes pero no urgentes
   - 🟢 Baja: Tareas que puedes hacer cuando tengas tiempo

2. **Sé específico en tus tareas**:
   - ❌ "Estudiar"
   - ✅ "Revisar capítulo 3 de matemáticas"

3. **Divide tareas grandes**:
   - En lugar de "Hacer proyecto final"
   - Crea: "Investigar tema", "Crear outline", "Escribir introducción"

### Flujo de trabajo recomendado

1. **Por la mañana**: Revisa tus tareas pendientes y ordena por prioridad
2. **Durante el día**: Marca tareas como completadas según las vayas terminando
3. **Por la noche**: Agrega nuevas tareas para el día siguiente
4. **Semanalmente**: Limpia las tareas completadas para mantener la lista organizada

### Atajos de teclado

- **Enter**: Agregar nueva tarea (cuando el formulario está enfocado)
- **Escape**: Limpiar campo de búsqueda
- **Tab**: Navegar entre elementos

## 🔧 Personalización avanzada

### Modificar estilos
Si quieres personalizar la apariencia:

1. Edita `src/styles/global.css` para cambios globales
2. Modifica las clases de Tailwind en los componentes
3. Los colores de prioridad se pueden cambiar en `TodoItem.astro`

### Agregar nuevas funcionalidades

La aplicación está diseñada para ser extensible:

```javascript
// Ejemplo: Agregar categorías a las tareas
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: string; // Nueva propiedad
  createdAt: Date;
}
```

### Integración con APIs externas

Aunque la aplicación funciona offline, puedes integrarla con servicios externos:

- **Google Tasks API**: Para sincronizar con Google Tasks
- **Notion API**: Para exportar tareas a Notion
- **Calendar APIs**: Para crear eventos basados en tareas

## 🚨 Solución de problemas

### Las tareas no se guardan
- Verifica que tu navegador soporte localStorage
- Revisa la consola del navegador por errores
- Asegúrate de que no estés en modo incógnito

### La aplicación se ve mal
- Verifica que JavaScript esté habilitado
- Actualiza tu navegador a la versión más reciente
- Limpia la caché del navegador

### Rendimiento lento
- Si tienes muchas tareas (>1000), considera usar la función "Limpiar completadas"
- Cierra otras pestañas que consuman mucha memoria

## 📱 Uso en móviles

La aplicación está optimizada para dispositivos móviles:

- **Touch-friendly**: Todos los botones son fáciles de tocar
- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Gestos**: Desliza para revelar acciones (en desarrollo)

### Instalar como PWA (Aplicación Web Progresiva)

Aunque no está implementado aún, puedes agregar la funcionalidad PWA:

1. Agrega un `manifest.json`
2. Implementa un Service Worker
3. Los usuarios podrán "instalar" la app en su dispositivo

## 🎓 Casos de uso

### Para estudiantes
- Lista de tareas escolares por materia
- Seguimiento de proyectos y entregas
- Planificación de estudio por prioridades

### Para profesionales
- Gestión de tareas diarias de trabajo
- Seguimiento de proyectos personales
- Lista de tareas del hogar

### Para equipos
- Aunque es una app personal, puedes exportar/importar tareas
- Usar como base para crear una versión colaborativa

---

¡Esperamos que disfrutes usando TaskMaster para organizar tu vida! 🎉
