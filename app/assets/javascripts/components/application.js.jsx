var Application = React.createClass({
  getInitialState: function () {
    return {
      earthPic: this.props.earthPic
    }
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream earthPic={this.state.earthPic}/>
          </div>
        </div>
        <AutoComplete url="/records.json" interval="60000" callback={this.updateMe}/>
      </div>
    );
  },

  updateMe: function (earthPic) {
    this.setState({
      earthPic: earthPic.earthPic
    })
  }
});
