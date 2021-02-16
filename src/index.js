console.log("Hello");



async function getTempF(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3665979cfe86d7791e40a7595465d684`,
      {
        mode: "cors",
      }
    );
    const cityData = await response.json();
    console.log(cityData);
    return `The tempature is ${Math.round(cityData.main.temp)}℉ in ${
      cityData.name
    }. 
The local conditions are ${cityData.weather[1].description}`;
  } catch (e) {
    console.log(`${city} not found`);
  }
};

async function getTempC(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3665979cfe86d7791e40a7595465d684`,
      {
        mode: "cors",
      }
    );
    const cityData = await response.json();
    return `The tempature is ${Math.round(cityData.main.temp)}°C in ${
      cityData.name
    }.
The local conditions are: ${cityData.weather[0].description}`;
  } catch (e) {
    console.log(`${city} not found`);
  }
}

async function drawData(city) {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.innerHTML =  await getTempF(city)
  content.appendChild(info)
}

drawData("Boston")



// getTempF("Boston");
// getTempC("Boston");

// getTempF("Orlando");
// getTempC("Orlando");

// getTempF("Poop Town");
