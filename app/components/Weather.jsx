var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require ('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    searchHandle: function(location){
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemperature(location).then(
            function(res){
                debugger;
                that.setState({
                    location: location,
                    temperature: res,
                    isLoading: false
                });
            },
            function (res) {
                that.setState({
                    isLoading: false,
                    errorMessage: res.message
                });
            }
        );

    },
    render: function(){

        var {errorMessage, isLoading, location, temperature} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h4>Fetching weather....</h4>;
            }else if(location && temperature){
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string'){
                return(
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return(
            <div>
                <h2 className="text-center page-title">Weather</h2>
                <WeatherForm onSearchFunc={this.searchHandle}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports=Weather;