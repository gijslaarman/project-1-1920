const makeCall = async params => {
    const settings = {
        cors: 'https://cors-anywhere.herokuapp.com/',
        endpoint: 'https://zoeken.oba.nl/api/v1/search/',
        key: '1e19898c87464e239192c8bfe422f280'
    }

    let queryString = '&' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
    if (!params) queryString = ''

    const response = await fetch(`${settings.cors}${settings.endpoint}?output=json&authorization=${settings.key}${queryString}`)
    return response.json()
}

export default makeCall