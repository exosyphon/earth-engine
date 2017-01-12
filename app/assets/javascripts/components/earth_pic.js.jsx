var earthStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '1300px',
    height: '1400px',
    margin: '10px'
};
var imageStyle = {
    maxHeight: '700px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
};
var EarthPic = React.createClass({
    propTypes: {
        earthPic: function(properties, propertyName, componentName) {
            var earthPic = properties[propertyName];
            if (!earthPic) {
                return new Error('earthPic must be set.');
            }
        },
    },
    render: function() {
        var earthPic = this.props.earthPic;
        var earthMediaUrl = earthPic.url;
        return (
          <div style = {
                earthStyle
            } >
            <img src = {
                earthMediaUrl
            }
            style = {
                imageStyle
            }
            />
          </div>
        );
    }
});
