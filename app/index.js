require ('./main.scss');

var cats = require('./cats');

var React = require('react');
var ReactDOM = require('react-dom');

// Create App Component

var App = React.createClass({
    render : function() {
        return (
            <div className="fruit">Apples</div>
        )
    }
});

ReactDOM.render(<App/>, document.querySelector('#bananas'));