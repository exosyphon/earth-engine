var Stream = React.createClass({
  getInitialState: function () {
    return {
      earthPic: null
    }
  },
  render: function () {
    return (
      <StreamEarth earthPic={
                    this.props.earthPic
                }
        />
    );
  }
});
