import React, { Component } from 'react'
import Message from './Message'
export default class Counter extends Component {


state={
count: 0 ,
inputValue : "" ,
chrono : 0 ,
date : ""
}

componentDidMount(){

console.log('the component is mounted');

setInterval(()=> {

let date = new Date();

this.setState({date : `${date.getHours().toString()} : ${date.getMinutes().toString()} : ${date.getSeconds().toString()} `})

} , 1000 )

setInterval(()=> this.setState({chrono : this.state.chrono +1}) , 1000 )



}
 componentDidUpdate(){

    console.log('component update')
 }

 componentWillUnmount(){

console.log('component is dead !!');

 }






    render() {
        return (
            <div>
                

                <button type="button" onClick={()=>
                    
                    
                    this.state.count>0 ? this.setState({count : this.state.count -1}):null
                    
                    
                    
                    } class="btn btn-danger" style={{width:"50px" , marginRight:"20px"}}>-</button> 
                 <span>{this.state.count}</span> 
                  <button type="button" onClick={()=>this.setState({count : this.state.count +1}) } class="btn btn-success" style={{width:"50px" , marginLeft:"20px"}}>+</button> <br/>

             <input type="text" placeholder="enter a message" style={{marginTop:"30px"}} value={this.state.inputValue} onChange={(e)=> {
                 
                 this.setState({inputValue: e.target.value });
                
                 
                 
                 
                 }} /> <br/>

            <p>{this.state.inputValue }</p>




            <Message count={this.state.count}/>

            <p>{this.state.chrono}</p>

            <p>{this.state.date}</p>

            </div>
        )
    }
}
