const request = require('postman-request')
const appConst = require('../../appConst')


const geocode = (place, callback) => {
    const url = `${appConst.BASE_URL_GEO}/${place}.json?access_token=${appConst.API_KEY_GEO}&limit=1`
    request(url, null, (error, response) => {
        if (error) {
            callback('Unable to fetch location data', null)
        } else if (response.body && response.body.error) {
            callback('Unable to find location in the response', null)
        } else {
            const data = JSON.parse(response.body)
            const resp = data.features[0].center
            const details = {
                lat: resp[1],
                lon: resp[0],
                name: data.features[0].place_name
            }

            // console.log('geocode');
            // console.log(details);

            callback(null, details)
        }
    })
}

module.exports = {
    geocode: geocode
}