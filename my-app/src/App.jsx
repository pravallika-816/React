// import React, { Component } from "react";
// const App = () => {
//   // let ele = React.createElement("div",{ id: "demo" },
//   //   React.createElement("h1", null, "Header"),
//   //   React.createElement("p", null, "para")
//   // );
//   return (
//     <div id="demo">
//         <h1>Header</h1>
//         <p>para</p>
//         <input type="name" placeholder="Enter name"/>
//         <p>division 1000/2={1000/2}</p>
//     </div>
//   );
// }
// export default App;

// class parent {
//   constructor(name, age){
//     this.name=name;
//     this.age=age;
//   }
// }
// class child extends parent{
//   constructor(name, age, city){
//     super(name, age);
//     this.city=city;
//   }
// }

//! class based component
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Class Component</h1>
//     )
//   }
// }
// export default App;

//! Props
// import CBCPropsex1 from "./components/CBCPropsex1";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <hr/>
//         <CBCPropsex1 username="Sam"
//         age={19}
//         desig={["developer","tester"]}
//         userDetails={{city:"Hyd",area:"Maisammaguda"}}
//         sendFun={function(){alert("Hi I'm From parent Component")}}
//         />
//         <hr/>
//       </div>
//     )
//   }
// }
// export default App;

// import React from 'react'
// import FBDPropsex from './components/FBDPropsex'

// const App = () => {
//   return (
//     <div>
//       <FBDPropsex
//       username="Navya"
//       isLoggedIn={true}
//       hobbies={["Sleeping","Eating","Phone"]}/>
//     </div>
//   )
// }

// export default App

//! PROPS CHILDREN
// import React from 'react'
// import PropsChildrenEx from './components/PropsExample/PropsChildrenEx'
// import ChildProps from './components/PropsExample/ChildProps'
// const App = () => {
//   return (
//     <div>
//       <PropsChildrenEx username="Pravallika" company="Meta">
//         <h1>this data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrenEx>
//     </div>
//   )
// }

// export default App

//!CONTEXT API

// import React from "react";
// import Child1 from "./components/PropsExample/child1";
// const App = () => {
//   return (
//     <div>
//       <Child1 />
//     </div>
//   );
// };

// export default App;


//! State
// import React from 'react'
// import CBCSStateEx from './components/StateExample/CBCSStateEx'

// const App = () => {
//   return (
//     <div>
//       App
//       <hr/>
//       <CBCSStateEx/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import StateEx from './components/StateExample/StateEx'

// const App = () => {
//   return (
//     <div>
//       <StateEx/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FBCStateEx from './components/StateExample/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App

//! Inline Css
//  import React from 'react'
// import FunctionalComponent from './components/inline'
 
//  const App = () => {
//    return (
//      <div>
//       <FunctionalComponent city="Hyderabad"/>
//      </div>
//    )
//  }
 
//  export default App
 

//! External CSS
// import React from 'react'
// import EcternalCSS from './components/EcternalCSS'

// const App = () => {
//   return (
//     <div>
//       <EcternalCSS/>
//     </div>
//   )
// }

// export default App

//! Form
// import React from 'react'
// import { MyForm } from './components/MyForm'
// const App = () => {
//   return (
//     <div>
//       <MyForm/>
//     </div>
//   )
// }

// export default App

//! useEffect
import React from "react";
import ExUseEffect from "./components/hooks/ExUseEffect";
const App = () => {
  return (
    <div>
      <ExUseEffect />
    </div>
  );
};

export default App;
