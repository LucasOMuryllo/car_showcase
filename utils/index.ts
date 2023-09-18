export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0fc5710ae1msh02b65813baabf80p1f4dadjsn5b573eb77530',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers
    })

    const result = await response.json()

    return result
}