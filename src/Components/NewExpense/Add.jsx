import React,{useState} from 'react'

export const Add = (props) => {
  
    const[full,setFull]=useState('')
   const [storedValue, setStoredValue] = useState("");

    const AddChangeHandler =(event)=>{
        setFull(event.target.value)
    
      }
      function handleFormChange(event) {
        event.preventDefault();
        setStoredValue(full)
      }
    return (
    <div>
        <form onSubmit={handleFormChange}>
       <input type='text'  placeholder='full name' value={full}  onChange={AddChangeHandler} />
       <button type='submit'>Submit</button>
</form>
<h1>Welcome: <span>{storedValue}</span></h1>

 </div>
  )
}
