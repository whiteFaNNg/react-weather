var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require ('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    searchHandle: function(location){
        var that = this;
        this.setState({
            isLoading: true
        });

        openWeatherMap(location).then(
            function(res){
                that.setState({
                    location: location,
                    temperature: res,
                    isLoading: false
                });
            },
            function (res) {
                that.setState({
                    isLoading: false
                });
                alert(res);
            }
        );

    },
    render: function(){

        var {isLoading, location, temperature} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather....</h3>;
            }else if(location && temperature){
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }

        return(
            <div>
                <h1>Weather</h1>
                <WeatherForm onSearchFunc={this.searchHandle}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports=Weather;