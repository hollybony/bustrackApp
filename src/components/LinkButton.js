import React from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  StyleSheet
} from 'react-native';

import Button from './Button';

const LinkButton = ({ style, children, ...rest }) => (
  <Button
    {...rest}
    style={[styles.button, style]}
  >
    {children}
  </Button>
);

LinkButton.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0
  }
});

export default LinkButton;
