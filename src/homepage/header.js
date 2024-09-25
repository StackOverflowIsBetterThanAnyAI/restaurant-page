import headerImage from './../assets/images/header.jpg'

export const generateHeader = () => {
    const body = document.getElementById('body')
    const heading = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = 'Gasthaus Neumeier'

    const h2 = document.createElement('h2')
    h2.textContent =
        'Genießen Sie unsere gut bürgerliche Küche sowie die bayerische Gemütlichkeit in unserer urigen Gaststube'

    const imageContainer = document.createElement('div')
    imageContainer.id = 'imageContainer'

    const headerLeft = document.createElement('img')
    headerLeft.src = headerImage
    headerLeft.setAttribute('loading', 'lazy')
    headerLeft.setAttribute('alt', 'Gaststube des Gasthauses')

    const headerCenter = document.createElement('img')
    headerCenter.src = headerImage
    headerCenter.setAttribute('loading', 'lazy')
    headerCenter.setAttribute('alt', 'Festlich gedeckte Tische')

    const headerRight = document.createElement('img')
    headerRight.src = headerImage
    headerRight.setAttribute('loading', 'lazy')
    headerRight.setAttribute('alt', 'Zünftige musikalische Umrahmung')

    heading.appendChild(h1)
    heading.appendChild(h2)

    imageContainer.appendChild(headerLeft)
    imageContainer.appendChild(headerCenter)
    imageContainer.appendChild(headerRight)

    heading.appendChild(imageContainer)
    body.appendChild(heading)
}
