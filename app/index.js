require ('./main.scss');

var cats = require('./cats');

var React = require('react');
var ReactDOM = require('react-dom');

// Create App Component

var App = React.createClass({
    render : function() {
        return (
            <div className="fruit">
                My favorite fruit is&nbsp;
                {this.props.fruit}.
            </div>
        )
    }
});

ReactDOM.render(<App fruit='strawberries'/>, document.querySelector('#bananas'));

