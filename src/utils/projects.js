export const projects = [
    {id: 1, title: 'React Router', desc: 'React Router - это легкая, полнофункциональная библиотека маршрутизации для библиотеки React JavaScript. React Router работает везде, где работает React; в Интернете, на сервере (используя node.js ), и на React Native (мобильная разработка).', link: 'https://v5.reactrouter.com/web/guides/quick-start', tags: 'react, router'},
    {id: 2, title: 'React Spectrum', desc: 'React Spectrum - это реактивная реализация Spectrum, системы проектирования Adobe. Он предоставляет компоненты, которые адаптируются к взаимодействиям и размерам экрана на разных устройствах, а также включает полноэкранную программу чтения и поддержку навигации с клавиатуры для обеспечения доступности.', link: 'https://react-spectrum.adobe.com/react-spectrum/getting-started.html', tags: 'react, UI'},
    {id: 3, title: 'Radix', desc: 'Radix Primitives - это низкоуровневая библиотека компонентов пользовательского интерфейса с акцентом на доступность, настройку и удобство для разработчиков. Вы можете использовать эти компоненты либо в качестве базового уровня вашей системы проектирования, либо внедрять их постепенно.', link: 'https://www.radix-ui.com/', tags: 'react, UI'},
    {id: 4, title: 'Radix', desc: 'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.', link: 'https://www.radix-ui.com/', tags: 'react, UI'},
]

export const getRandProject = (projectsArr) => {
    return projectsArr[Math.floor(Math.random() * projectsArr.length)]
}