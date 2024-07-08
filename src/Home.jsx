import React,{useState,useEffect,useContext,useRef} from 'react'
import { context } from '.'


const Row=()=>{
    const data=useContext(context);
    const customelement=useRef(null);
    useEffect(() => {
      console.log(customelement.current)
    })
    
    return <div ref={customelement}>
        {data}
    </div>
}

const Home = ({data}) => {
    //* HERE basically we are studying react hooks
    //* it returns an array
    //* in array we use to thing one variable and one function
    //* and with function we updatevalue
    //* usestate is to rerender the code whenever the page reloads or value changes
    const [a,setA]=useState(0);
    const increment=()=>{
        setA(a+1)
        console.log(a);
    }

    const decrement=()=>{
        setA(a-1)
        console.log(a);
    }


    useEffect(()=>{
        console.log("showing details");
    },[a])
    //*useffect works when the component is mounted to window 
    //* plus it also works whenever array elements changes




  return (
    <div>
        <button onClick={increment}>Add</button>
        <p>{a}</p>
        <button onClick={decrement}>Subtract</button>



       <Row/>

    </div>



 

  )
}

export default Home