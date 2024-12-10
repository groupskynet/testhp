# Movie Search App 🎬

Una aplicación web moderna construida con React, TypeScript y Vite que permite buscar y filtrar películas utilizando la API de OMDB.

## 🚀 Características

- Búsqueda de películas en tiempo real
- Filtrado por tipo (películas, series, episodios)
- Filtrado por rango de años
- Autenticación de usuarios con Firebase
- Diseño responsive con Tailwind CSS
- Validación de formularios con Formik y Yup

## 🛠️ Tecnologías Principales

- React 18
- TypeScript
- Vite
- Firebase Authentication
- Tailwind CSS
- Formik + Yup
- Zustand

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Una cuenta en Firebase
- Una API key de OMDB (http://www.omdbapi.com/)

## 🔧 Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/movie-search-app.git
   cd movie-search-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   VITE_OMDB_API_KEY=tu_api_key_de_omdb
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre tu navegador y visita `http://localhost:5173`

## 🚀 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Previsualiza la versión de producción
- `npm run lint`: Ejecuta el linter
- `npm run test`: Ejecuta los tests

## 📦 Estructura del Proyecto

src/
├── components/ # Componentes reutilizables
├── models/ # Interfaces y tipos
├── pages/ # Componentes de página
├── providers/ # Contextos y providers
├── services/ # Servicios y lógica de negocio
├── store/ # Estado global (Zustand)
├── utils/ # Utilidades y helpers
└── firebase/ # Configuración de Firebase

## 🔐 Autenticación

La aplicación utiliza Firebase Authentication para manejar el registro y login de usuarios. Las características incluyen:

- Registro con email y contraseña
- Login con email y contraseña
- Rutas protegidas
- Persistencia de sesión

## 🎨 Estilos

El proyecto utiliza Tailwind CSS para los estilos, con un tema personalizado definido en `tailwind.config.js`. Los colores principales y otros estilos pueden ser modificados en este archivo.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## 📝 Licencia

[MIT](LICENSE)