const button = document.querySelector("#button")
const name_city = document.querySelector(".name")
const temperature = document.querySelector(".temp")
const description = document.querySelector(".desc")
const high_low = document.querySelector(".hi-low")

const appid = 'd2238a3b3699ea69ff0d91d667725f5b'

button.addEventListener("click", () => {
    const inp = document.querySelector(".city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${appid}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var nameVal = data["name"] + ", " + data["sys"]["country"];
            var temp = Math.round(data["main"]["temp"]);
            var desc = data["weather"][0]["description"];
            var hi_low = data["main"]["temp_min"] + "&degC/ " + data["main"]["temp_max"] + "&degC"
            var icon = data["weather"][0]["icon"];
            name_city.innerHTML = nameVal;
            temperature.innerHTML = temp + "&degC" + `<img src="http://openweathermap.org/img/wn/${icon}.png"></img>`;
            description.innerHTML = desc;
            high_low.innerHTML = hi_low;
        })
    document.querySelector(".city").value = "";
})

