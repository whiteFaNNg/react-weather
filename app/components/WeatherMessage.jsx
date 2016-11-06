var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        return(
            <h3>It is {this.props.temperature} degrees in {this.props.location}</h3>
        );
    }
});

module.exports=WeatherMessage;