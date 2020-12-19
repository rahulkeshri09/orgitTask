import {useState} from 'react';
function RepositryName(props){

    return (
        <div className="show-repo">
            {props.allData.length>0 &&<div>
                {props.allData.map((a)=>{
                    return <div className="repo-name">
                            <div>REPOSITRY NAME : {a.name}</div>
                            <div> DESCRIPTION : {a.description}</div>
                            <div> FORKS : {a.forks_count}</div>
                            <div> WATCHERS : {a.watchers}</div>
                        </div>

                })}
            </div>}
        </div>
    )
}
export default RepositryName;