import { Component } from 'react'

// component to EXTEND from the very first class component that exists: Component
class ImageComponent extends Component {
  render() {
    return <img src={this.props.specialSource} alt={this.props.specialAlt} />
  }
}

export default ImageComponent;