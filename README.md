# TaskMaster - Aplicación de Gestión de Tareas

Una aplicación web moderna de gestión de tareas construida completamente con **Astro** y **Tailwind CSS**. Se ejecuta 100% en el navegador sin necesidad de backend.

## 🚀 Características

- ✅ **Gestión completa de tareas** - Agregar, completar y eliminar tareas
- 🎯 **Sistema de prioridades** - Organiza tus tareas por importancia (Alta, Media, Baja)
- 🔍 **Búsqueda y filtros avanzados** - Encuentra tareas específicas fácilmente
- 📊 **Estadísticas en tiempo real** - Visualiza tu progreso con métricas detalladas
- 🌙 **Modo oscuro/claro** - Cambia entre temas con un clic
- 💾 **Persistencia local** - Tus tareas se guardan automáticamente en localStorage
- 📱 **Diseño responsive** - Funciona perfectamente en todos los dispositivos
- ⚡ **Rendimiento óptimo** - Carga rápida y navegación fluida

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios rápidos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **TypeScript** - Tipado estático para JavaScript
- **LocalStorage** - Persistencia de datos en el navegador

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   cd english-course
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Visita `http://localhost:4321` para ver la aplicación

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Utilidades
npm run astro        # Ejecuta comandos de Astro CLI
```

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro         # Layout principal de la aplicación
├── components/
│   ├── AddTodo.astro        # Formulario para agregar tareas
│   ├── TodoItem.astro       # Componente individual de tarea
│   ├── TodoStats.astro      # Estadísticas y métricas
│   └── TodoFilters.astro    # Filtros y búsqueda
├── pages/
│   └── index.astro          # Página principal
└── styles/
    └── global.css           # Estilos globales y personalizados
```

## 🎯 Funcionalidades Detalladas

### Gestión de Tareas
- **Agregar tareas** con diferentes niveles de prioridad
- **Marcar como completadas** con un simple clic
- **Eliminar tareas** con confirmación
- **Ordenamiento** por fecha, prioridad o alfabético

### Sistema de Filtros
- **Filtrar por estado**: Todas, Pendientes, Completadas
- **Búsqueda por texto** en tiempo real
- **Ordenamiento múltiple** con diferentes criterios

### Estadísticas
- Contador de tareas totales, completadas y pendientes
- Porcentaje de progreso con barra visual
- Actualización automática en tiempo real

### Persistencia
- Todas las tareas se guardan automáticamente en `localStorage`
- Los datos persisten entre sesiones del navegador
- No se requiere conexión a internet después de la carga inicial

## 🎨 Personalización

### Temas
La aplicación incluye soporte completo para modo oscuro/claro:
- Cambio automático basado en preferencias del sistema
- Toggle manual para cambiar entre temas
- Persistencia de la preferencia del usuario

### Estilos
Puedes personalizar los estilos editando:
- `src/styles/global.css` - Estilos globales y variables CSS
- Componentes individuales - Cada componente tiene sus propios estilos con Tailwind

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Opciones de Despliegue
Esta aplicación puede desplegarse en cualquier servicio de hosting estático:
- **Netlify** - Deploy automático desde Git
- **Vercel** - Integración perfecta con proyectos Astro
- **GitHub Pages** - Hosting gratuito para proyectos públicos
- **Servidor web tradicional** - Sirve los archivos estáticos generados

### Ejemplo con Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `dist`
4. ¡Despliega automáticamente!

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- **Astro Team** - Por crear un framework increíble
- **Tailwind CSS** - Por hacer que los estilos sean un placer de escribir
- **La comunidad open source** - Por todas las herramientas y recursos

---

**¡Disfruta gestionando tus tareas con TaskMaster!** 🎉