import React from 'react'
import Comment from './Comment'

import { render } from 'enzyme'
import './setupTests'

it('should render', () => {
    const c = {
        comment: 'teste'
    }
    const wrapper = render(<Comment comentario={c} />)
    expect(wrapper.text()).toBe('teste')
})
it('should render empty', () => {
    const c = {
        comment: ''
    }
    const wrapper = render(<Comment comentario={c} />)
    expect(wrapper.text()).toBe('vazio')
})