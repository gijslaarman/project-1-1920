const getBook = async isbn => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?authorization=1e19898c87464e239192c8bfe422f280&q=${isbn}&output=json`)
    return response.json()
}

const getInformationPage = async data => {
    return new Promise((reject, resolve) => {
        const date = new Date()
        const age = date.getFullYear() - data.person.geboortejaar
    
        const createBookOverview = () => {
            data.books.forEach(book => {
                getBook(book.ISBN).then(res => {
                    const bookElement = document.getElementById('books')
                    bookElement.insertAdjacentHTML('beforeend', `<div>${res.titles[0]}</div>`)
                })
            })
        }
    
        // createBookOverview()
    
        resolve(`
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
            </section id="books">
            <section>
            </section>
        `)
    })
}