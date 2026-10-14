# t3_act4_react

## Actividad 4 — Introducción a React

Este proyecto fue desarrollado como práctica para aprender los conceptos fundamentales de React utilizando Vite.

La aplicación consiste en un pequeño planificador de estudio que muestra información del estudiante, un contador de sesiones de estudio y una lista dinámica de temas relacionados con React.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- JSX
- CSS
- Git y GitHub
- GitHub Pages

## Funcionalidades

El proyecto incluye:

- Un componente funcional simple.
- Un componente que recibe props.
- Un componente que utiliza el hook `useState`.
- Manejo de eventos mediante `onClick`.
- Renderizado condicional.
- Una lista dinámica generada a partir de un arreglo utilizando `.map()`.
- Uso de `key` para identificar los elementos de la lista.
- Despliegue mediante GitHub Pages.

## Componentes

### Header

Es un componente funcional simple utilizado para mostrar el encabezado de la aplicación.

### ProfileCard

Es un componente que recibe mediante props el nombre, carrera y materia del estudiante.

### StudyCounter

Utiliza `useState` para almacenar el número de sesiones de estudio realizadas. Los botones permiten aumentar, disminuir o reiniciar el contador.

También utiliza renderizado condicional para mostrar un mensaje diferente dependiendo del número de sesiones registradas.

### TopicList

Contiene un arreglo de temas de React que es recorrido utilizando el método `.map()` para generar dinámicamente los elementos de la lista.

Cada elemento utiliza un identificador único como `key`.

# Preguntas

## a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente recibe desde otro componente, normalmente desde un componente padre. Se utilizan para pasar información y el componente que las recibe no debe modificarlas directamente.

El state, en cambio, representa información que puede cambiar dentro de un componente durante el uso de la aplicación. Cuando el estado cambia, React vuelve a renderizar el componente para mostrar el nuevo valor.

En este proyecto utilicé props en el componente `ProfileCard` para recibir el nombre, la carrera y la materia del estudiante.

## b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` permite que React identifique de manera única cada elemento de una lista.

Esto es importante porque si los elementos cambian, se agregan, se eliminan o cambian de posición, React puede reconocer cuál elemento corresponde a cada dato y actualizar solamente lo necesario.

En este proyecto cada tema contiene un `id` único y se utiliza como `key`.

## c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` permite crear y guardar un valor que puede cambiar mientras el usuario utiliza la aplicación.

Al utilizar `useState`, React proporciona el valor actual del estado y una función para modificarlo. Cuando se utiliza esa función para cambiar el estado, React actualiza automáticamente la información que aparece en pantalla.

En este proyecto utilicé `useState` en el componente `StudyCounter` para controlar el número de sesiones de estudio.

El estado comienza en cero:

```jsx
const [sesiones, setSesiones] = useState(0)
```

Cada vez que el usuario presiona el botón para agregar una sesión, se modifica el estado y el nuevo número aparece automáticamente en pantalla.

## d) Enlace del repositorio de GitHub

https://github.com/pavelrami/t3_act4_react

## e) Enlace del proyecto desplegado en GitHub Pages

https://pavelrami.github.io/t3_act4_react/

## Antes de entregar

1. Ejecuta `npm install`.
2. Ejecuta `npm run dev` para comprobar que funciona.
3. Sube el proyecto al repositorio `t3_act4_react`.
4. Ejecuta `npm run deploy` para publicar en GitHub Pages.
