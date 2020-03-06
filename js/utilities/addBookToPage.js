const addBookToPage = book => {
    const thisBook = book.results[0]
    const bookElement = document.getElementById('books')

    const element = (`
        <article>
            <img src="${thisBook.coverimages[1]}" />
            <div class="details">
                <h3>${thisBook.titles[0]}</h3>
                ${thisBook.authors ? '<h4>Auteur(s): ' + thisBook.authors.join(', ') + '</h4>' : null}
                ${thisBook.genres ? '<h4>Genre(s): ' + thisBook.genres.join(', ') + '</h4>' : '<h4>Geen genre gevonden.</h4>'}
                ${thisBook.languages ? '<h4>Taal: ' + thisBook.languages.join(', ') + '</h4>' : null}
            </div>
        </article>
    `)

    bookElement.insertAdjacentHTML('beforeend', element)
}

export default addBookToPage