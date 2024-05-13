import React,{useMemo,useState} from 'react'


function register() {
    function handleregister(event){
        event.preventDefault();//do nor reloading the screen onn calling this function

        console.log("hello world")

    }
    let age=19;
    let emailid="kareamol18@gmail.com"
  return (
    <form>

    {age > 18 && emailid =="kareamol18@gmail.com" ?(

  

  <div> 
  <input type="email" placeholder="type ur email here"></input>
        <button onClick={handleregister}>submit</button></div>
    )
  : (<h1>you are not amol fut le yaha se</h1>)}
      
       
   
      </form>     


    
  )
}

export default register
//conditional rendering

