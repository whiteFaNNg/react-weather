var React = require('react');

var About = React.createClass({
    render: function(){
        return(
            <div>
                <h2 className="text-center page-title">About Page</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed vehicula pharetra lacus, ut varius turpis ultricies vel. In tortor tortor, ultrices
                    nec ex ut, pellentesque consectetur sapien. Maecenas nec imperdiet eros.
                </p>
                <p>
                    Quisque eu pretium neque,
                    non pharetra nunc. Donec et vestibulum augue. Quisque non massa a eros lacinia hendrerit.
                    Pellentesque sit amet euismod ex.
                </p>
            </div>
        );
    }
});

module.exports=About;