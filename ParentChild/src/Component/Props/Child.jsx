import React from 'react'

const Child = (props) => {

    console.log(props)

    const childArray = React.Children.map(props.children,(child,index) => {
     return (

        <div key={index}>Child {index}: {child.props.children}</div>
     );

    });
     
  return (
    <div>{childArray}</div>
  )
}

export default Child