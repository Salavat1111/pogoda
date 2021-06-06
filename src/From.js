import React from 'react';
import './index.css';

class From extends React.Component{
    render () {
        return(
           
            <form  onSubmit={this.props.weatherMethod}>
                <input type='text' name='city' placeholder='Город' className="input__city"/>
                <button className="button__cnpk">Получить погоду</button>
            </form>
           
        )
    }
}

export default From;