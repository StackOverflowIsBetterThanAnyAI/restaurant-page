import './styles.css'

import { generateNav } from './nav'
import { generateHeader } from './homepage/header'
import { generateMain } from './homepage/main'
import { generateFooter } from './footer'
import { generateEvents } from './homepage/events'
import { generateImprintContent } from './imprint/imprint'
import { generateContactContent } from './contact/contact'

const _generateLayout = (() => {
    generateNav(0)
    generateHeader()
    generateMain()
    generateEvents()
    generateFooter()
})()

const generateHomepage = () => {
    document.title = 'Gasthaus Neumeier | Altheim'
    document.getElementById('body').replaceChildren()
    generateNav(0)
    generateHeader()
    generateMain()
    generateEvents()
    generateFooter()
}

const generateContact = () => {
    document.title = 'Gasthaus Neumeier | Kontakt'
    document.getElementById('body').replaceChildren()
    generateNav(1)
    generateContactContent()
    generateFooter()
}

const generateImprint = () => {
    document.title = 'Gasthaus Neumeier | Impressum'
    document.getElementById('body').replaceChildren()
    generateNav(2)
    generateImprintContent()
    generateFooter()
}

document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id
        if (buttonId === 'startseite') {
            generateHomepage()
        } else if (buttonId === 'kontakt') {
            generateContact()
        } else if (buttonId === 'impressum') {
            generateImprint()
        }
    }
})
