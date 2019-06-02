import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Post from '~/components/Post';
import Header from '~/components/Header';
import './config/reactotron';
import './config/devtools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(196, 112, 121)',
  },
});
export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    const { container } = styles;
    return (
      <View style={container}>
        <Header />
        <ScrollView>
          {posts
            && posts.map(post => (
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                content={post.content}
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}
