import eventsImage from './../assets/images/events.jpg'
export const generateEvents = () => {
    const eventsContent = [
        {
            title: 'Zünftige Musik',
            content:
                'Feiern Sie mit uns, wenn das nächste Festl steigt! Mit Gesang, Quetschn oder auch mal mit Blasmusik. Stimmung ist in jedem Fall garantiert!',
        },
        {
            title: 'Bayerische Schmankerl',
            content:
                'Bei unseren Veranstaltungen lassen wir uns für Sie immer etwas Besonderes einfallen! Ob Spanferkel, Schweinerollbraten oder Riesen-Currywurst: Es schmeckt!',
        },
        {
            title: 'Süffiges Bier',
            content:
                'Natürlich darf ein gschmackiges Bier nicht fehlen! Helles, Dunkles, Weißbier oder Radler - Prost!',
        },
    ]

    const body = document.getElementById('body')
    const events = document.createElement('div')
    events.id = 'events'

    const h3 = document.createElement('h3')
    h3.textContent = 'Veranstaltungen'

    const eventsContainer = document.createElement('div')
    eventsContainer.id = 'eventsContainer'

    for (let i in eventsContent) {
        const container = document.createElement('div')
        container.classList.add('eventsCard')
        const image = document.createElement('img')
        image.src = eventsImage
        image.alt = ''
        const title = document.createElement('span')
        title.textContent = eventsContent[i].title
        const content = document.createElement('div')
        content.textContent = eventsContent[i].content
        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(content)
        eventsContainer.appendChild(container)
    }

    events.appendChild(h3)
    events.appendChild(eventsContainer)
    body.appendChild(events)
}
