// Modules
import render from '../modules/render.js'

// Utils
import getUser from './getUser.js'
import obaApi from './obaApi.js'
import addBookToPage from './addBookToPage.js'

// Templates
import buildInformationPage from '../templates/buildInformationPage.js'
const notFoundTemplate = `<section><h1>We hebben deze gebruiker niet in onze database staan.</h1></section>`

const loadUser = id => {
    getUser(id).then(res => {
        const userData = res[0]
        console.log(userData)

        if (userData) {
            buildInformationPage(userData.person)
            .then(template => render(template))
            .then(() => {
                userData.books.forEach(book => {
                    // Some books have an extra number added with a ',' behind the ISBN, but the search api can't find the books with the comma. So if the book contains a comma remove it.
                    if (typeof book.ISBN === 'string' && book.ISBN.includes(',')) {
                        book.ISBN = book.ISBN.split(',').shift()
                    }

                    const query = { q: book.ISBN }
                    obaApi(query).then(book => addBookToPage(book))
                })
            })
        } else {
            render(notFoundTemplate)
        }
    })
}

export default loadUser