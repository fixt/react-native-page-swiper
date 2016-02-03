'use strict'

import React, {
  Component,
  View,
} from 'react-native'

export default class Dot extends Component {
  static propTypes = {
    color: React.PropTypes.string,
    diameter: React.PropTypes.number,
    style: View.propTypes.style,
  };

  static defaultProps = {
    color: 'rgba(192, 192, 192, 1)',
    diameter: 10,
  };

  render() {
    const { color, diameter } = this.props

    return (
      <View
        style={[{
          backgroundColor: color,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }, this.props.style]}
      />
    )
  }
}
