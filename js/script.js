const searchField = document.getElementById('search-field')
const memberIdInput = document.getElementById('member-id')

memberIdInput.addEventListener('keyup', () => {
    if (memberIdInput.value.length < 1) {
        document.body.id = ""
    }
})

const getUser = async (id) => {
    const response = await fetch(`https://obaapi.gijsbertcharles.com/member/${id}`)
    return response.json()
}

const getBook = async isbn => {
    console.log(isbn)
    const response = await fetch(`https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&q=${isbn}&output=json`)
    return response.json()
}

getBook(9789036429160).then(res => console.log(res))

const createInformationElement = data => {
    const date = new Date()
    const age = date.getFullYear() - data.person.geboortejaar

    return (`
        <section class="general-information">
            <div class="text">
                <h2>Over jou</h2>
                <p><strong>Geslacht:</strong> ${data.person.geslacht}</p>
                <p><strong>Leeftijd:</strong> ${age - 1} of ${age} jaar oud</p>
                <p><strong>Lid sinds:</strong> ${dayjs(data.person.inschrijfDatum).format('DD MMMM, YYYY')}</p>
            </div>

            <div class="map">
                <h2><strong>Woonplaats:</strong></h2>
                <iframe src="https://maps.google.com/maps?q=${data.person.postcode} ${data.person.woonplaats}&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </section>
            
        <section>
        </section>
    `)
}

const templateParts = {
    information: data => createInformationElement(data),
    loader: `<svg class="spinner" width="300px" height="300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <rect class="spinner__rect" x="0" y="0" width="100" height="100" fill="none"></rect>
    <circle class="spinner__circle" cx="50" cy="50" r="40" stroke="#999999" fill="none" stroke-width="6" stroke-linecap="round">
    </circle>
    </svg>`,
    notFound: `<h1>Deze gebruiker bestaat niet.</h1>`,
    error: message => `<h2>${message}</h2>`
}

const render = template => {
    const app = document.querySelector('main')
    while (app.firstChild) app.removeChild(app.firstChild)
    document.body.id = 'active'
    app.insertAdjacentHTML('afterbegin', template)
}

searchField.addEventListener('submit', (e) => {
    e.preventDefault()
    const lenerId = e.target[0].value // Gets input value

    render(templateParts.loader) // Load spinner

    getUser(lenerId).then(res => {
        if (!res[0]) {
            render(templateParts.error('Geen gebruiker gevonden.'))
            throw new Error('Fetch, no member found')
        } else {
            return res[0]
        }
    })
        .then(user => {
            console.log(user)
            setTimeout(() => {
                render(templateParts.information(user))
            }, 250);
        })
})