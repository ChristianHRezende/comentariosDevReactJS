import React from 'react'

const Comment = ({ comentario, index }) => {
        let comment = 'vazio'
        if (comentario && comentario.comment) {
                comment = comentario.comment
        }
        return <div key={index}>{comment}</div>
}

export default Comment