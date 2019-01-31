import React from 'react'

const Comment = ({comentario,index}) => {
        return <div key={index}>{comentario.comment}</div>
}

export default Comment