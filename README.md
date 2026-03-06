# 🧪 Taller: Módulos en Angular

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación y organización de módulos y componentes en una aplicación Angular.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Proyecto en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

```npm run start``` o ```ng serve```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`


## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

## ⚙️ Generación de Archivos con Angular CLI
A continuación se presentan los comandos más utilizados para generar módulos y componentes.

### 📦 Generar un módulo con archivo de rutas

```ng g m [ruta]/[nombre-modulo] --routing```

#### Ejemplo:

```ng g m modules/users --routing```

#### Archivos Generados

```
src/app/modules/users
├──users.module.ts
└──users-routing.module.ts
```

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente] --standalone=false```

#### Ejemplo:

```ng g c modules/users/components/table-users --standalone=false```

#### Archivos Generados

```
src/app/modules/users/components/table-users/
├── table-users.html
├── table-users.scss
├── table-users.spec.ts
└── table-users.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --standalone=false --flat```

#### Ejemplo:

```ng g c modules/users/components/table-users/table-users.component --standalone=false --flat```

#### Archivos Generados

```
src/app/modules/users/components/table-users/
├──table-users.component.html
├──table-users.component.scss
├──table-users.component.spec.ts
└──table-users.component.ts
```

### 🎓 Observaciones Importantes

- En este taller NO se utilizan componentes standalone
- Todos los componentes deben pertenecer a un NgModule
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Usar Angular CLI evita errores de configuración manual


## Comandos generales Angular CLI

A continuación se listan los comandos más comunes para generar archivos en la carpeta modules:

### Generar módulo con routing
ng g m modules/[nombre] --routing 
o
### Generar componente contenedor (shell)
ng g c modules/[nombre] --flat --standalone=false

### Generar página de listado
ng g c modules/[nombre]/pages/list-[nombre] --standalone=false

### Generar componente de tabla
ng g c modules/[nombre]/components/table-[nombre] --standalone=false

### Generar servicio
ng g s modules/[nombre]/services/[nombre]

### Generar interfaz base
ng g i modules/[nombre]/interfaces/[nombre]

## APIs utilizadas

Este proyecto consume datos de dos APIs públicas:

### 1) REST Countries (módulo `countries`)
- URL base: `https://restcountries.com/v3.1/all`
- Endpoint usado:
  `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2`
- Uso: obtener el listado de países con campos optimizados para la tabla.

### 2) JSONPlaceholder (módulo `comments`)
- URL base: `https://jsonplaceholder.typicode.com`
- Endpoint usado:
  `https://jsonplaceholder.typicode.com/comments`
- Uso: obtener comentarios (`postId`, `id`, `name`, `email`, `body`) para el listado del módulo de comentarios.
