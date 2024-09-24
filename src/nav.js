export const generateNav = (currentIndex) => {
    const body = document.getElementById('body')
    const header = document.createElement('header')

    const nav = document.createElement('nav')
    const navContent = ['Startseite', 'Kontakt', 'Impressum']
    for (let i in navContent) {
        const element = document.createElement('button')
        element.id = navContent[i].toLowerCase()
        element.textContent = navContent[i]
        if (Number(i) === currentIndex) {
            element.style.backgroundColor = 'rgba(69, 26, 3, 0.25)'
            element.style.borderBottom = '2px #451a03 solid'
        }
        nav.appendChild(element)
    }

    header.appendChild(nav)
    body.appendChild(header)
}
