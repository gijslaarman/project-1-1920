const informationPage = (user) => new Promise((resolve, reject) => {
    const date = new Date()
    const age = date.getFullYear() - user.geboortejaar

    resolve(`
    <section class="general-information">
        <div class="text">
            <h2>Over jou</h2>
            <p><strong>Geslacht:</strong> ${user.geslacht}</p>
            <p><strong>Leeftijd:</strong> ${age - 1} of ${age} jaar oud</p>
            <p><strong>Lid sinds:</strong> ${dayjs(user.inschrijfDatum).format('DD MMMM, YYYY')}</p>
        </div>
        <div class="map">
            <h2><strong>Woonplaats:</strong></h2>
            <iframe src="https://maps.google.com/maps?q=${user.postcode} ${user.woonplaats}&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </section>
        
    <section>
        <h1>Gelezen boeken</h1>
        <div class="carousel" id="books"></div>
    </section>
    `)
})

export default informationPage