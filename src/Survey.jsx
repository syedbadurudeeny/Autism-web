import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Survey(){

    let initialFields = {name:"",level:"",content:""}

    const [fields,setFields] = useState(initialFields);

    function handleChange(e){
        const {name,value} = e.target;
        setFields({...fields,[name]:value})
    }

    function handleSend(e){
        e.preventDefault();
        // let url =  "http://localhost:5000/api/parents/survey";
        // axios.post(url,{
        //     name : fields.name,
        //     level : fields.level,
        //     content : fields.content
        // }).then((res)=>console.log(res))
        // .catch((err)=>console.log(err))
    }

    return(
        <>
        <header>
       <h2>Survey Page</h2>
       <br/>
       <nav>
            <ul>
                <li><Link to={"/register"} >Register</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
                <li><Link to={"/"} >Dashboard</Link></li>
                <li><Link to={"/awareness"} >Awareness</Link></li>
                <li><Link to={"/survey"} >Survey</Link></li>
                <li><Link to={"/study/module"} >StudyModule</Link></li>
                <li><Link to={"/communication/low/module"} >CommunicationLowModule</Link></li>
                <li><Link to={"/communication/high/module"} >CommunicationHighModule</Link></li>
                <li><Link to={"/test/module"} >TestModule</Link></li>
            </ul>
        </nav>
       </header>
        <main>
        <form onSubmit={handleSend}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="name" onChange={handleChange} placeholder="Name Of Your Child..." />
            <br/>
            <label htmlFor="level">Level</label>
            <input type="text" id="level" name="level" className="level" onChange={handleChange} placeholder="Level Of Autism..." />
            <br/>
            <label htmlFor="content">Survey Content</label>
            <textarea type="text" id="content" name="content" className="content" onChange={handleChange} placeholder="Type Survey Content" ></textarea>
            <br/>
            <button>Send</button>
        </form>
        </main>
        </>
    )
}


export default Survey
;