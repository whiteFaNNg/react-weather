var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return{
            title: "Error"
        };
    },
    componentDidMount: function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, message} = this.props;
        return(
            <div className="reveal text-center small" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p>{message}</p>
                <button className="button hollow" data-close="">
                    Close Window
                </button>
            </div>
        );
    }
});

module.exports = ErrorModal;