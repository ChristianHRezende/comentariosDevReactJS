import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';

class App extends Component {
  state = {
    comments: [],
    newComment: '',
    isLoading: false
  }

  sendComment = (comment) => {
    const id = this.props.database.ref().child('comments').push().key;
    const comments = {}
    comments['comments/'+id]= {
      comment
    }
    this.props.database.ref().update(comments)

  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.comments = this.props.database.ref('comments');
    this.comments.on('value', snapshot => {
      console.log('passou aqi')
      this.setState({ comments: snapshot.val(), isLoading: false })
    })
  }

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment}></NewComment>
        {this.state.isLoading 
          ? <p>Carregado...</p>
          : <Comments comments={this.state.comments}></Comments>
        }
      </div>
    );
  }
}

export default App;
