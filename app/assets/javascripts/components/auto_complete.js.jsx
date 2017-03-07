var AutoComplete = React.createClass({
  getDefaultProps: function () {
    return {
      url: null,
      interval: 60000,
      callback: null,
      countDown: null
    };
  },
  fetchData: function (url) {
    $.ajax({
      url: this.props.url,
      success: function (data) {
        this.props.callback(data);
      }.bind(this)
    });
  },
  
 	componentDidMount: function() {
    var countDown = setInterval(this.fetchData, parseInt(this.props.interval));
    this.setState({countDown: countDown});
	},

	componentWillReceiveProps: function() {
		clearInterval(this.state.countDown);
    var countDown = setInterval(this.fetchData, parseInt(this.props.interval));
    this.setState({countDown: countDown});
	},

  render: function () {
    return (<div className="loader"/>);
  }
});
