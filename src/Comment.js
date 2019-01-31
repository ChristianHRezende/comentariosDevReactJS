import React, { Component } from 'react'

class Comment extends Component{

    render(){
        return <div key={this.props.index}>{this.props.comentario.comment}</div>
    }
}

export default Comment