var DeleteButton = React.createClass({
    deletePic: function() {
			 $.ajax({url: "/records/" + this.props.earthPic.id, type: 'DELETE'});
		},

    render: function() {
        return (
          <div>
            <button type="submit" onClick={this.deletePic}>Remove Picture</button>
          </div>
        );
    }
});
