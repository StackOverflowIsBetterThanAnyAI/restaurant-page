import mainImage from './../assets/images/main.jpg'
export const generateMain = () => {
    const mainContent = [
        {
            title: 'Biergarten',
            content:
                'Genießen Sie gesellige Stunden in unserem Biergarten. Unsere Auswahl an erfrischenden Bieren und herzhaften Speisen lässt keine Wünsche offen.',
        },
        {
            title: 'Gutbürgerliche Küche',
            content:
                'Wir kochen frisch und bieten Ihnen ein wechselndes Angebot an warmen und kalten Schmankerln.',
        },
        {
            title: 'Wirtshaus und Saal',
            content:
                'In unserem urigen Wirtshaus können Sie in gemütlicher Atmosphäre in kleiner oder großer Runde feiern.',
        },
    ]
    const body = document.getElementById('body')
    const main = document.createElement('main')
    main.id = 'main'

    const h3 = document.createElement('h3')
    h3.textContent = 'Bayerische Gemütlichkeit im Herzen von Altheim'

    const mainContainer = document.createElement('div')
    mainContainer.id = 'mainContainer'

    for (let i in mainContent) {
        const container = document.createElement('div')
        container.classList.add('mainCard')
        const image = document.createElement('img')
        image.src = mainImage
        image.alt = ''
        const title = document.createElement('span')
        title.textContent = mainContent[i].title
        const content = document.createElement('div')
        content.textContent = mainContent[i].content
        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(content)
        mainContainer.appendChild(container)
    }

    main.appendChild(h3)
    main.appendChild(mainContainer)
    body.appendChild(main)
}
