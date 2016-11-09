var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function(){
        return(
            <div>
                <h2 className="text-center page-title">Examples</h2>
                <p>Here are some location examples:</p>
                <ol>
                    <li>
                        <Link to="/?location=Ohrid">Ohrid</Link>
                    </li>
                    <li>
                        <Link to="/?location=Skopje">Skopje</Link>
                    </li>
                    <li>
                        <Link to="/?location=Bitola">Bitola</Link>
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports=Examples;