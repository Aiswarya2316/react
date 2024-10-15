// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sample_class from './component/Sample';

import New_class from "./component/New"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => count>0 && setCount((count) => count - 1)}>
//           -
//         </button>
//         <h1>{count}</h1>
//         <button onClick={() => setCount((count) => count + 1)}>
//           +
//         </button>
        
//       </div>
//     </>
//   )
// }

// export default App




// function App() {
//   const data=[
//     {id:1,name:'aisu',age:20},
//     {id:2,name:'ponnu',age:21},
//     {id:3,name:'aiswarya',age:22},
    
//   ]

//   return (
//     <>
//       <h1>student details</h1>
//       <table>
//         <thead>
//           <th>id</th>
//           <th>name</th>
//           <th>age</th>
//         </thead>
//         <tbody>
//           {data.map((element)=>(
//             <tr key={element.id}>
//               <td>{element.id}</td>
//               <td>{element.name}</td>
//               <td>{element.age}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
  
//     </>
//   )
// }

// export default App



function App(){
  return(
    <>
    <div>
      <Sample_class color='red' width='100px'/>
      <New_class/>

    </div>
    </>
  )
}
export default App



// function App(){
//   return(
//     <>
//     <div>
//       <New_class/>
//     </div>
//     </>
//   )
// }
// export default App