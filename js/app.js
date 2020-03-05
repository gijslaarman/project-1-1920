// Modules
import FormHandler from './modules/SearchFormHandler.js'
import { setLoadingState } from './modules/render.js'
import './modules/onInputChange.js'

// Utilities
import loadUser from './utilities/loadUser.js'

// Consts
const searchForm = new FormHandler(document.getElementById('search-form'), { preventDefault: true })

searchForm.onSubmit(values => {
    // Find the value of 'lener' in the array of values from the form.
    const lenerId = values.find(obj => obj.name === 'lener').value

    // Gathering data with calls, set load state for user feedback.
    setLoadingState()
    
    // Now search for the user & load Template
    loadUser(lenerId)
})