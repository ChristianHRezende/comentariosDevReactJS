import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import './setupTests'

import Comments from './Comments'
import NewComment from './NewComment'
import { EventEmitter } from 'events'

describe('<App/>', () => {
  it('renders without crash', () => {
    const database = {
      ref: jest.fn()
    }
    database.ref.mockReturnValue({ on: jest.fn() })
    const wrapper = shallow(<App database={database} />)
    console.log(wrapper.text())
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find(Comments).length).toBe(0)
    expect(wrapper.find('p').length).toBe(1)
  })
  it('adds a newComment', () => {
    //Mocks Functions and Returns
    const child = jest.fn()
    const database = {
      ref: jest.fn(),

    }
    const update = jest.fn()
    database.ref.mockReturnValue(
      {
        on: jest.fn(),
        child,
        update
      }
    )
    const push = jest.fn()
    child.mockReturnValue({
      push
    })
    push.mockReturnValue({ key: '1' })

    //testes
    const wrapper = shallow(<App database={database} />)
    wrapper.instance().sendComment('new comment')
    expect(child).toBeCalledWith('comments')

    expect(update).toBeCalledWith({ 'comments/1': { comment: 'new comment' } })
  })

/*   it('renders comments from firebase', () => {
    const ref = jest.fn()
    const database = {
      ref
    }
    const eventsEmitter = new EventEmitter()
    const on = jest.fn()
    ref.mockReturnValue({
      on
    })
    on.mockReturnValue({ eventsEmitter })

    const wrapper = shallow(<App database={database} />)

    //Nao recebeu comments
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find(Comments).length).toBe(0)
    expect(wrapper.find('p').length).toBe(1)

    //Recebeu
    const comments = {
      'a': { comment: 'comment 1' },
      'b': { comment: 'comment 2' }
    }
    const val = jest.fn()
    val.mockReturnValue(comments)
    eventsEmitter.emit('value', val)

    //Test
    expect(wrapper.state().isLoading).toBeFalsy()
    expect(wrapper.state().comments).toBe(comments)
  }) */
})