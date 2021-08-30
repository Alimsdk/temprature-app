const loadWeather=()=>{
    const userInput=document.getElementById('input-field');
    const inputValue=userInput.value;
    
    userInput.value='';
    loadWeatherInfo(inputValue);
}

const loadWeatherInfo=async(inputValue)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=15d5f76aec8050256d0dc29d2d9563ab`
    const res= await fetch(url);
    const value=await res.json();
    showWeatherInfo(value);
}



const showWeatherInfo=(tempValue)=>{
    console.log(tempValue);
    // change icon
    const icon=document.getElementById('icon');
    console.log(tempValue.weather[0].icon);
    icon.setAttribute('src',`https://openweathermap.org/img/wn/${tempValue.weather[0].icon}@2x.png`  );
    // tempreture
    const temp=document.getElementById('temp');
    const kelvinToC=tempValue.main.temp
    temp.innerText=`${(tempValue.main.temp-273.15).toFixed(2)}`
  
    // location

    const location=document.getElementById('city');
    location.innerText=`${tempValue.name}`

    // weather condition

    const condition=document.getElementById('condition');
    condition.innerText=`${tempValue.weather[0].main}`
}