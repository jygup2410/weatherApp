const apiKey="7b42b379fd8249a6f5c9424d45dc4a80";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        async function checkWeather(city){
            const res= await fetch(apiUrl +city+ `&appid=${apiKey}`);
            let data=await res.json();
            if(res.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            document.querySelector(".city").innerText=data.name;
            document.querySelector(".temp").innerText=Math.round(data.main.temp)+ "°c";
            document.querySelector(".humidity").innerText=data.main.humidity+ " %";
            document.querySelector(".wind").innerText=data.wind.speed+ " km/hr";
            let weatherImage=document.querySelector(".weather-icon");
            if(data.weather[0].main== "Clouds"){
                weatherImage.src="images/clouds.png";
            }
            else if(data.weather[0].main== "Clear"){
                weatherImage.src="images/clear.png";
            }
            else if(data.weather[0].main== "Rain"){
                weatherImage.src="images/rain.png";
            }
            else if(data.weather[0].main== "Drizzle"){
                weatherImage.src="images/drizzle.png";
            }
            else if(data.weather[0].main== "Mist"){
                weatherImage.src="images/mist.png";
            }
        }
        }
        
        let btn=document.querySelector("button");
        btn.addEventListener("click",async ()=>{
            let input=document.querySelector("input");
            let city=input.value;
            checkWeather(city);
        })


