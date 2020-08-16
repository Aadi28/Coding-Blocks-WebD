let inp = require("./app")
const https = require("https")
const appid = "d2238a3b3699ea69ff0d91d667725f5b"
let url = `api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${appid}`

https.get(url, (res) => {
    res.on('data', (data) => {
        console.log(data)
    })
})

