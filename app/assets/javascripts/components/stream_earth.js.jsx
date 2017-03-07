var StreamEarth = React.createClass({
    render: function() {
        return (
          <section>
            <DeleteButton earthPic = {
            	this.props.earthPic
						}
						/>
            <Header text = {
                this.props.earthPic.title
            }
            />
            <EarthPic earthPic = {
                this.props.earthPic
            }
            />
         </section>
        );
    }
});
