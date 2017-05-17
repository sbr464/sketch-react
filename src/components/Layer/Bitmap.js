import React from 'react'
import classnames from 'classnames'


export default class Bitmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    this.props.model.image.getInstance().then(url => {
      this.setState({url});
    });
  }
  
  render() {
    let {model, ...props} = this.props;
    let {frame} = model;
    return <img style={{
      display: 'block',
      position: 'absolute',
      height: frame.height,
      width: frame.width,
      top: frame.y,
      left: frame.x,
      ...model.style.toStyle(model),
    }} src={this.state.url}
                {...props}
    />
  }
}