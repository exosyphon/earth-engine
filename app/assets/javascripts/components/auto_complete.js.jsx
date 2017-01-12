var AutoComplete = React.createClass({
  getDefaultProps: function () {
    return {
      url: null,
      interval: 60000,
      callback: null
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
  componentDidMount: function () {
    setInterval(this.fetchData, parseInt(this.props.interval));
  },
  render: function () {
    return (<div className="loader"/>);
  }
});