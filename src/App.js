import React  , {useState} from 'react'
import FunctionnalCounter from './components/FunctionnalCounter' ; 
import Counter from './components/Counter'
import './App.css'

const App = () => {

  const [display , setDisplay] = useState(true) ;

  return (
    <div className="App">
      <button onClick={()=> setDisplay(!display)} style={{marginBottom:"50px"}}>{display ? "cacher le compteur" : "afficher le compteur" } </button>
      
      { display ? (


      <Counter/>

      ) :""




// ( <FunctionnalCounter/> ) :



}
    </div>
  )
}

export default App






























//------------------------------------Class component---------------------------------------------------------------------


// import React, { Component } from 'react'
// import Counter from './components/Counter'
// import FunctionalCounter from './components/FunctionnalCounter'
// import './App.css'

// export default class App extends Component {

// state={

//   display : true
// }



//   render() {
//     return (
//       <div className="App">


//       <FunctionalCounter/>








//         {/* <button onClick={()=>this.setState({display : !this.state.display})} style={{marginBottom:"50px"}}>
//         {this.state.display ? "Hide couter" : "Show counter"}
//         </button>

//         { this.state.display ? ( 
//         <Counter/> ) :""

//   } */}
//       </div>
//     )
//   }
// }

