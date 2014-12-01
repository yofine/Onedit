var React = require('react');
var jsx = require('react-tools')
var coffee = require('coffee-script')
var marked = require('marked')

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: localStorage.code || "console.log 'coffee-script'"};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.getDOMNode().value});
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <div className="col-md-6 col-xs-12 write-content">
          <textarea
            name="text"
            className="form-control mono mousetrap"
            rows="28"
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value}>
          </textarea>
        </div>
        <div id="wmd-preview" className="col-md-6 col-xs-12 write-preview fmt content">
          <pre>
          <code
            className=""
            dangerouslySetInnerHTML={{
              //__html: marked(this.state.value, {bare: false})
              __html: coffee.compile(this.state.value, {bare: true})
              //__html: jsx.transform(this.state.value)
            }}>
          </code>
          </pre>
        </div>
      </div>
    );
  }
});

React.renderComponent(<MarkdownEditor />, document.getElementById('markdown'));
