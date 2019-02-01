import React from 'react'
import './setupTests'

import { shallow } from 'enzyme'

import Comments from './Comments'
import Comment from './Comment'
//**shallow monta o component de forma raza, nao renderiza filhos,isola os testess */

describe('<Comments/>', () => {
    it('should render Comments', () => {
        const comments =
        {
            a: { id: 'a', comment: 'Comentario 1' },
            b: { id: 'b', comment: 'Comentario 2' }
        }

        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find(Comment).length).toBe(2)
        expect(wrapper.find(Comment).get(0).props.comentario).toBe(comments.a)
        expect(wrapper.find(Comment).get(1).props.comentario).toBe(comments.b)

        expect(wrapper.find(Comment).get(0).key).toBe(comments.a.id)
        expect(wrapper.find(Comment).get(1).key).toBe(comments.b.id)
    })
    it('should work with no comments',()=>{
        const comments ={}
        const wrapper = shallow(<Comments comments={comments}/>)
        expect(wrapper.find(Comment).length).toBe(0)

    })
})