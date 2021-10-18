import React, { useState, useEffect } from 'react'

const useEffect1 = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count >=1){
            document.title = `Chats (${count})`
        } else{
            document.title = `Chats `
        }
        
    });
   

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={
                () => setCount(count + 1)}>Click it</button>
        </div>
    )
}

export default useEffect1
