var React = require('react');

var WeatherForm = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if(location.length>0){
            this.refs.location.value='';
            this.props.onSearchFunc(location);
        }else{
            alert("Invalid Input, try again");
        }
    },
    render: function(){
        return(
            <form onSubmit={this.onSearch}>
                <input type="search"  ref="location" placeholder="search weather..."/>
                <button className="button expanded hollow">Get Weather</button>
            </form>
        );
    }
});

module.exports=WeatherForm;