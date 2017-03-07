var headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    margin: '20px 10px'
};
var Header = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'Default header'
        };
    },
    render: function() {
        return ( <
            h2 style = {
                headerStyle
            } > {
                this.props.text
            } </h2>
        );
    }
});
