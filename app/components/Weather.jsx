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
            errorMessage: undefined,
            temperature: undefined,
            location: undefined
        });

        openWeatherMap.getTemperature(location).then(
            function(res){
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
    componentDidMount: function(){
        var location = this.props.location.query.location;
        if(location && location.length>0){
            this.searchHandle(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        if(location && location.length>0){
            this.searchHandle(location);
            window.location.hash = '#/';
        }
    },
    render: function(){

        var {errorMessage, isLoading, location, temperature} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h4 className="text-center">fetching weather...</h4>;
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