import React from 'react'
import Count from './Header/Count.js'
import Fecth from './Header/fecth.js'
import Render from './Header/Render.js'
import Form from './Header/Form.js'
import Todo from './Header/Todo.js'
import Effect from './Header/Effect.js'

const App = () => {
  return (
    <div className='App'>
      <Count/>
      <Fecth/>
      <Render/>
      <Form/>
      <Todo/>
      <Effect/>
    </div>
  )
}

export default App
