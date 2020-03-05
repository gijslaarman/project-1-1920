const getUser = async id => {
    const response = await fetch(`https://obaapi.gijsbertcharles.com/member/${id}`)
    return response.json()
}

export default getUser