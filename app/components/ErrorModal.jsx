var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return{
            title: "Error"
        };
    },
    componentDidMount: function(){
        var {title, message} = this.props;
        var ModalMarkup = (
            <div className="reveal text-center small" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p>{message}</p>
                <button className="button hollow" data-close="">
                    Close Window
                </button>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(ModalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return(
            <div>

            </div>
        );
    }
});

module.exports = ErrorModal;