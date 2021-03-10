const request = require('postman-request')
const appConst = require('../../appConst')


const forecast = (lat, lon, callback) => {
    const url = `${appConst.BASE_URL}/current?access_key=${appConst.API_KEY}&query=${lat},${lon}`
    request(url, null, (error, response) => {
        if (error) {
            callback('Unable to fetch weather data', null)
        } else if (response.body && response.body.error) {
            callback('Unable to find weather in the response', null)
        } else {

            // console.log('forecast');
            // console.log(response.body);

            // console.log(url);

            const data = JSON.parse(response.body)
            // console.log(data);

            const details = {
                temperature: data.current.temperature,
                rainPercent: data.current.precip,
            }
            // const details = {
            //     temperature: 10,
            //     rainPercent: 0,
            // }
            callback(null, details)
        }
    })
}

module.exports = {
    forecast: forecast
}