import React from 'react';
import From from './From';
import Weather from './Weather';
import Info from './Info'
import "./index.css";
import PGD from './page/pngtree-hand-drawn-cartoon-weather-background-design-image_272674.jpg';



const API_KEY = 'b2e3d98ce7d4df70a57b0435fb7713a5';

class App extends React.Component{
 
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
       
      if(city){
        const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        const sunset = data.sys.sunset;
        const date = new Date();
        date.setTime(sunset);
        const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


        this.setState({
           temp: data.main.temp,
           city: data.name,
           country: data.sys.country,
           pressure: data.main.pressure,
           sunset: sunset_date,
           error: undefined
        });
      } else {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Введите название города"
         });
      }
}
    render (){
       return(
         <div >
           
           <div className="body2 ">
             

           <div aria-busy="true" aria-label="Loading" role="progressbar" class="container">
  <div class="swing">
    <div class="swing-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="swing-r"></div>
  </div>
  <div class="shadow">
    <div class="shadow-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="shadow-r"></div>
  </div>
 </div>




                       <div className="content__block-2  z__index-3"> 
               <Info />
               <From weatherMethod={this.gettingWeather}/>
               <Weather 
               temp={this.state.temp}
               city={this.state.city}
               country={this.state.country}
               pressure={this.state.pressure}
               sunset={this.state.sunset}
               error={this.state.error}
               />
                        </div>
                </div>
            </div>
   
       )
    }
}

export default App;