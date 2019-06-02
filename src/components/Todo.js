import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
