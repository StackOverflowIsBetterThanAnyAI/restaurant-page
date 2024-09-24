import logo from './../assets/images/logo.jpg'

export const generateContactContent = () => {
    const body = document.getElementById('body')
    const contactWrapper = document.createElement('div')
    contactWrapper.id = 'contactWrapper'

    const contactContainerHeader = document.createElement('div')
    contactContainerHeader.id = 'contactContainerHeader'

    const contactHeaderContainer = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.textContent = 'Kontakt'
    const h4 = document.createElement('h4')
    h4.textContent =
        'Rufen Sie uns an, schreiben Sie uns - wir freuen uns auf Sie!'

    const logoImage = document.createElement('img')
    logoImage.src = logo
    logoImage.setAttribute('alt', 'Gasthaus Neumeier')

    const contactContainerBody = document.createElement('div')
    contactContainerBody.id = 'contactContainerBody'

    const contactFormContainer = document.createElement('div')
    const contactForm = document.createElement('form')
    contactForm.setAttribute('action', '')
    contactForm.setAttribute('method', 'post')
    const contactNameLabel = document.createElement('label')
    contactNameLabel.textContent = 'Name: *'
    contactNameLabel.htmlFor = 'contactNameInput'
    const contactNameInput = document.createElement('input')
    contactNameInput.id = 'contactNameInput'
    contactNameInput.type = 'text'
    const contactMessageLabel = document.createElement('label')
    contactMessageLabel.textContent = 'Nachricht: *'
    contactMessageLabel.htmlFor = 'contactMessageInput'
    const contactMessageInput = document.createElement('textarea')
    contactMessageInput.id = 'contactMessageInput'

    const acceptContainer = document.createElement('div')
    acceptContainer.id = 'acceptContainer'
    const contactAcceptInput = document.createElement('input')
    contactAcceptInput.type = 'checkbox'
    contactAcceptInput.id = 'contactAcceptInput'
    const contactAcceptLabel = document.createElement('label')
    contactAcceptLabel.textContent =
        'Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. *'
    contactAcceptLabel.htmlFor = 'contactAcceptInput'

    const contactMandatoryInfo = document.createElement('div')
    contactMandatoryInfo.textContent = '* Kennzeichnet erforderliche Felder'
    const contactSubmitInput = document.createElement('input')
    contactSubmitInput.type = 'submit'
    contactSubmitInput.value = 'Absenden'
    contactSubmitInput.setAttribute('disabled', true)

    const contactInfoContainer = document.createElement('div')
    contactInfoContainer.id = 'contactInfoContainer'
    const phoneLabel = document.createElement('span')
    phoneLabel.textContent = 'Telefon:'
    const phoneNumber = document.createElement('a')
    phoneNumber.setAttribute('href', 'tel:0123456789')
    phoneNumber.textContent = '0123/456789'
    const emailLabel = document.createElement('span')
    emailLabel.textContent = 'E-Mail:'
    const emailAddress = document.createElement('a')
    emailAddress.setAttribute('href', 'mailto:hans_josef@himmel.tv')
    emailAddress.textContent = 'hans_josef@himmel.tv'
    const address = document.createElement('span')
    address.textContent = 'Anschrift:'
    const street = document.createElement('div')
    street.textContent = 'Höllentor 69'
    const location = document.createElement('div')
    location.textContent = '66666 Hölle'
    const openingTimes = document.createElement('span')
    openingTimes.textContent = 'Öffnungszeiten:'
    const thursday = document.createElement('div')
    thursday.textContent = 'Donnerstag: ab 18:00 Uhr'
    const friday = document.createElement('div')
    friday.textContent = 'Freitag: ab 17:30 Uhr'
    const saturday = document.createElement('div')
    saturday.textContent = 'Samstag: ab 10:30 Uhr'
    const privateEvents = document.createElement('span')
    privateEvents.textContent = 'Private Veranstaltungen und Familienfeiern:'
    const privateEventsInfo = document.createElement('div')
    privateEventsInfo.textContent = 'Gerne nach Absprache'

    contactHeaderContainer.appendChild(h3)
    contactHeaderContainer.appendChild(h4)
    contactContainerHeader.appendChild(contactHeaderContainer)
    contactContainerHeader.appendChild(logoImage)
    acceptContainer.append(contactAcceptInput)
    acceptContainer.append(contactAcceptLabel)
    contactForm.appendChild(contactNameLabel)
    contactForm.appendChild(contactNameInput)
    contactForm.appendChild(contactMessageLabel)
    contactForm.appendChild(contactMessageInput)
    contactForm.appendChild(acceptContainer)
    contactForm.appendChild(contactMandatoryInfo)
    contactForm.appendChild(contactSubmitInput)
    contactFormContainer.appendChild(contactForm)
    contactInfoContainer.appendChild(phoneLabel)
    contactInfoContainer.appendChild(phoneNumber)
    contactInfoContainer.appendChild(emailLabel)
    contactInfoContainer.appendChild(emailAddress)
    contactInfoContainer.appendChild(address)
    contactInfoContainer.appendChild(street)
    contactInfoContainer.appendChild(location)
    contactInfoContainer.appendChild(openingTimes)
    contactInfoContainer.appendChild(thursday)
    contactInfoContainer.appendChild(friday)
    contactInfoContainer.appendChild(saturday)
    contactInfoContainer.appendChild(privateEvents)
    contactInfoContainer.appendChild(privateEventsInfo)
    contactContainerBody.appendChild(contactFormContainer)
    contactContainerBody.appendChild(contactInfoContainer)
    contactWrapper.appendChild(contactContainerHeader)
    contactWrapper.appendChild(contactContainerBody)
    body.appendChild(contactWrapper)
}
