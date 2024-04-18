import React, {Component} from 'react'


export default class App extends Component {
    constructor(){
        super()
        this.state={
           count:0
        }
    }
    render(){
        return (
          <div  className='flex flex-col justify-center items-center h-[100vh] gap-3'>
            <h1 className='font-[3rem]'>Count:{this.state.count}</h1>
           <button className='bg-blue-400'  onClick={()=>{this.setState({count:this.state.count +1})}}>Increment+</button>
           <button   onClick={()=>{this.state.count>0?this.setState({count:this.state.count-1}):alert('Negative number are not allowed')}}>Decrement-</button>
           <button>Reset</button>
          </div>
        )

    }
}

