export const setLoadingState = () => {
    render(`<svg class="spinner" width="300px" height="300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect class="spinner__rect" x="0" y="0" width="100" height="100" fill="none"></rect><circle class="spinner__circle" cx="50" cy="50" r="40" stroke="#999999" fill="none" stroke-width="6" stroke-linecap="round"></circle></svg>`)
}

export const render = template => {
    const app = document.querySelector('main')
    while (app.firstChild) app.removeChild(app.firstChild)
    document.body.id = 'active'
    return app.insertAdjacentHTML('afterbegin', template)
}

export default render