// Modules
import FormHandler from './modules/SearchFormHandler.js'
import render, { setLoadingState } from './modules/render.js'
import './modules/onInputChange.js'

// Utilities
import getUser from './utilities/getUser.js'
import obaApi from './utilities/obaApi.js'

// Templates
import informationPage from './templates/informationPage.js'
const notFoundTemplate = `<section><h1>We hebben deze gebruiker niet in onze database staan.</h1></section>`

// Consts
const searchFormElement = document.getElementById('search-form')

new FormHandler(searchFormElement, { preventDefault: true }).onSubmit(values => {
    const lenerId = values.find(obj => obj.name === 'lener').value

    // Gathering data with calls, set load state for user feedback.
    setLoadingState()

    // Now search for the user
    getUser(lenerId).then(res => {
        const userData = res[0]
        console.log(userData)

        if (userData) {
            render(informationPage(userData.person))

            userData.books.forEach(book => {
                const query = {
                    q: book.ISBN
                }
                obaApi(query).then(res => console.log(res))
            })
        } else {
            render(notFoundTemplate)
        }


    })
    // Get user data from db.
})