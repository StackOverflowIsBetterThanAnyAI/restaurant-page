export const generateFooter = () => {
    const body = document.getElementById('body')
    const footer = document.createElement('footer')

    const tos = document.createElement('a')
    tos.setAttribute('href', '#')
    tos.textContent = 'Datenschutzerklärung'

    const copyright = document.createElement('span')
    const date = new Date()
    const year = date.getFullYear()
    copyright.textContent = `© Gasthaus Neumeier ${year}. Alle Rechte vorbehalten.`

    footer.appendChild(tos)
    footer.appendChild(copyright)
    body.appendChild(footer)
}
