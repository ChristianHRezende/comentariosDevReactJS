import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {

    renderComentarios = (index,comentario) => <Comment key={index} index={index} comentario={comentario} />

    render() {
        const keys = Object.keys(this.props.comments)
        return <div>
            {keys.map((key) => this.renderComentarios(key,this.props.comments[key]))}
        </div>
    }
}

export default Comments