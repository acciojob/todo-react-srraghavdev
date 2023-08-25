
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[search,Setsearch]=useState('')
  let [arr,Setarr]=useState([])
  function addata(){
    if(search){
      Setarr([...arr,search])
      Setsearch('')
    }
  }
  function deletefn(data){
    let temparr=[...arr]
    for(let i=0;i<arr.length;i++){
      if(arr[i]==data){
        temparr.splice(i,1)
      }
    }
    Setarr(temparr)
  }
  return (
    <div>
       <div>
        <h1>To-Do-List</h1>
        <input type='text' value={search} onChange={(event)=>Setsearch(event.target.value)}></input>
        <button onClick={addata}>Add-To-Do</button>
       </div>
       <div>
        {
          arr.map(element=>{
            return (
              <div>
                <p>{element}</p>
                <button onClick={()=>deletefn(element)}>Delete</button>
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default App
