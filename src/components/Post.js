import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    color: 'gray',
  },
});

const Post = ({ title, author, content }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
