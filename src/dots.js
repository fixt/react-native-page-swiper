'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

import Dot from './dot';

export default class Dots extends Component {
  static propTypes = {
    total: PropTypes.number,
    active: PropTypes.number,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    total: 0,
    active: -1,
  };

  render() {
    const { total, active } = this.props;

    const range = Array.from(new Array(total), (x, i) => i);

    return (
      <View style={ [styles.dots, this.props.style] }>
       { range.map(i => {
          return (
            <Dot
              color={ i === active ? this.props.activeColor : this.props.color }
              key={ i }
            />
          );
        }) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dots: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
