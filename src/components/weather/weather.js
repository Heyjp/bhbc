import React from 'react';

class WeatherWidget extends React.Component {

    constructor(props) {
        super(props)
        this._ref = React.createRef
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://darksky.net/widget/default-small/42.360082,-71.05888/us12/en.js?width=undefined&height=70&title=Full Forecast&textColor=333333&bgColor=FFFFFF&skyColor=333&fontFamily=Default&customFont=&units=us"
        script.async = true;
        console.log(this._ref)
        this._ref.appendChild(script);
    }
    
    render () {
        return (
            <div className="darksky-widget-container" ref={this._ref}>   
                
            </div>
        )
    }
}

export default WeatherWidget;

