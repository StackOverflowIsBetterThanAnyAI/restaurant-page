import logo from './../assets/images/logo.jpg'

export const generateImprintContent = () => {
    const body = document.getElementById('body')
    const imprintWrapper = document.createElement('div')
    imprintWrapper.id = 'imprintWrapper'

    const h3 = document.createElement('h3')
    h3.textContent = 'Impressum'

    const imprintContainer = document.createElement('div')
    imprintContainer.id = 'imprintContainer'

    const imprintInfo = document.createElement('div')
    imprintInfo.id = 'imprintInfo'

    const accountable = document.createElement('span')
    accountable.textContent = 'Verantwortlicher:'
    const accountableName = document.createElement('div')
    accountableName.textContent = 'Hans Josef'
    const accountableAddress = document.createElement('div')
    accountableAddress.textContent = 'Himmelspforte 1'
    const accountablePlace = document.createElement('div')
    accountablePlace.textContent = '12345 Himmel'

    const contact = document.createElement('span')
    contact.textContent = 'Kontakt:'
    const contactTel = document.createElement('div')
    contactTel.textContent = 'Tel.: 0123/456 789'
    const contactMail = document.createElement('div')
    contactMail.textContent = 'E-Mail: hans_josef@himmel.tv'

    const tax = document.createElement('span')
    tax.textContent = 'Steuernummer:'
    const taxNumber = document.createElement('div')
    taxNumber.textContent = '1111/222/33/4'

    const location = document.createElement('span')
    location.textContent = 'Standort:'
    const locationAddress = document.createElement('div')
    locationAddress.textContent = 'Höllentor 69'
    const locationPlace = document.createElement('div')
    locationPlace.textContent = '66666 Hölle'

    const website = document.createElement('a')
    website.textContent = 'www.neumeier-gasthaus.de'
    website.setAttribute('href', '#')

    const route = document.createElement('a')
    route.textContent = 'Anfahrt und Parken'
    route.setAttribute('href', '#')

    const feedback = document.createElement('span')
    feedback.textContent = 'Fragen und Feedback?'
    const feedbackText = document.createElement('div')
    feedbackText.textContent =
        'Sie möchten uns Ihre Meinung mitteilen? Sie haben Anregungen, Fragen zur Webseite oder zum Gasthaus Neumeier? Dann nutzen Sie bitte unser Kontaktformular.'

    const socialMedia = document.createElement('span')
    socialMedia.textContent =
        'Besuchen Sie uns doch auch gerne auf unseren Social Media Kanälen:'
    const socialMediaFacebook = document.createElement('a')
    socialMediaFacebook.textContent = 'Facebook'
    socialMediaFacebook.setAttribute('href', '#')
    const socialMediaInstagram = document.createElement('a')
    socialMediaInstagram.textContent = 'Instagram'
    socialMediaInstagram.setAttribute('href', '#')

    const logoImage = document.createElement('img')
    logoImage.src = logo
    logoImage.setAttribute('alt', 'Gasthaus Neumeier')

    imprintInfo.appendChild(accountable)
    imprintInfo.appendChild(accountableName)
    imprintInfo.appendChild(accountableAddress)
    imprintInfo.appendChild(accountablePlace)
    imprintInfo.appendChild(contact)
    imprintInfo.appendChild(contactTel)
    imprintInfo.appendChild(contactMail)
    imprintInfo.appendChild(tax)
    imprintInfo.appendChild(taxNumber)
    imprintInfo.appendChild(location)
    imprintInfo.appendChild(locationAddress)
    imprintInfo.appendChild(locationPlace)
    imprintInfo.appendChild(website)
    imprintInfo.appendChild(route)
    imprintInfo.appendChild(feedback)
    imprintInfo.appendChild(feedbackText)
    imprintInfo.appendChild(socialMedia)
    imprintInfo.appendChild(socialMediaFacebook)
    imprintInfo.appendChild(socialMediaInstagram)
    imprintContainer.appendChild(imprintInfo)
    imprintContainer.appendChild(logoImage)
    imprintWrapper.appendChild(h3)
    imprintWrapper.appendChild(imprintContainer)
    body.appendChild(imprintWrapper)
}
