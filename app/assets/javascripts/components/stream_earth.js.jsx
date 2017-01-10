var StreamEarth = React.createClass({
   getInitialState: function() {
        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    },
    //componentDidMount: function() {
        //var componentDOMRepresentation = React.DOM.findDOMNode(this);
        //window.snapterest.headerHtml = componentDOMRepresentation.
        //children[0].outerHTML;
        //window.snapterest.earthPicHtml = componentDOMRepresentation.
        //children[1].outerHTML;
    //},

    render: function() {
        return (
          <section>
            <Header text = {
                this.state.headerText
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
