var Application = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream earthPic={this.props.earthPic}/>
          </div>
        </div>
      </div>
    );
  }
});
