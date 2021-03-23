import React, { Component } from 'react'

export default class Counter extends Component {


state={
count : 0 ,
inputValue : ""
}

    render() {
        return (
            <div>
                

                <button type="button" onClick={()=>
                    
                    
                    this.state.count>0 ? this.setState({count : this.state.count -1}):null
                    
                    
                    
                    } class="btn btn-danger" style={{width:"50px" , marginRight:"20px"}}>-</button> 
                 <span>{this.state.count}</span> 
                  <button type="button" onClick={()=>this.setState({count : this.state.count +1}) } class="btn btn-success" style={{width:"50px" , marginLeft:"20px"}}>+</button> <br/>

             <input type="text" value={this.state.inputValue} onChange={(e)=> this.setState({inputValue: e.target.value })  } /> <br/>

            <p>{this.state.inputValue}</p>

            </div>
        )
    }
}
