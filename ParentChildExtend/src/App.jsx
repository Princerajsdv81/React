import React, { Fragment } from 'react'
import User from './Component/Props/User'

const App = () => {
  let users=[{id:1,userName:'Pawan'},{id:2,
  userName:'Shubham'},{id:3,userName:'Rakesh'}]
  return (
    <Fragment>
     <User  property={users}></User>
    </Fragment>
  )
}

export default App