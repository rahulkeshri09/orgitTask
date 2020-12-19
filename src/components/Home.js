import repositryName from './RepositryName';
import {useState} from 'react';
import {useEffect} from 'react';
import RepositryName from './RepositryName';
function Home(){
    const [user,setUser]=useState();
    const [data,setData]=useState();
    // useEffect(()=>{
    //    if(user!=undefined){
    //        const url=`https://api.github.com/users/${user}/repos`
    //        fetch(url).
    //        then((res)=>res.json())
    //        .then((x)=>{
    //             setData(x);
    //        })
    //    }
    // },[])
    function callApi(userName){
        console.log("user",userName);
        const url=`https://api.github.com/users/${userName}/repos`
           fetch(url).
           then((res)=>res.json())
           .then((x)=>{
                setData(x);
                if(x.message=="Not Found"){
                    alert("User not found");
                }
           })
    }
    function setTheUser(){
        
        const text=document.getElementById("text");
        setUser(text.value);
        callApi(text.value);
    }
    return(
        <div>
            <div className="search-container">
                <input type="text" name="user" required id="text"/>
                <button onClick={setTheUser}>Fetch</button>
            </div>
            {data!=undefined &&<RepositryName allData={data} />}
        </div>
    )
}
export default Home;