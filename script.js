 let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const serchInput = document.getElementById("search-input");
const serchButton = document.getElementById("search-button");

serchButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {

      const Api_key = "5c86490ff1685b81ccc2dcc182a48a32";

      const api = `https://api.openweathermap.org/data/2.5/weather?q=${serchInput.value}&units=metric&appid=${Api_key}`

      fetch(api).then((response) => {

        return response.json();
      }).then(data => {
        const { name } = data;
        const { feels_like } = data.main;
        const { id, main } = data.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like)

      })
    }


    )
  }

})




