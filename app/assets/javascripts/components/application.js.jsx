var Application = React.createClass({
  getInitialState: function () {
    return {
      earthPic: this.props.earthPic,
      interval: 60,
    }
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <div>
              <label>Refresh interval (seconds): </label>
              <input type="number" value={this.state.interval} onChange={this.updateInterval} min="5"/>
            </div>
            <Stream earthPic={this.state.earthPic}/>
          </div>
        </div>
        <AutoComplete url="/records.json" interval={this.state.auto_complete_interval} callback={this.updateMe}/>
      </div>
    );
  },

	updateInterval: function(event) {
		var value = event.target.value;

		if (value < 5) {
		 value = 5;
		}
		this.setState({
			interval: event.target.value,
		  auto_complete_interval: value * 1000,
		});
	},

  updateMe: function (earthPic) {
    this.setState({
      earthPic: earthPic.earthPic
    })
  }
});
