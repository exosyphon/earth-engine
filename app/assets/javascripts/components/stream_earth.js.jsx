var StreamEarth = React.createClass({
    render: function() {
        return (
          <section>
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
