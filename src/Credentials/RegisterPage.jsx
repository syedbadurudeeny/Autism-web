import { useState } from "react";
import { Link } from "react-router-dom";


function Registerpage(){

    let initialErrors = {name:{required:false},email:{required:false},password:{required:false},customError:null};
    let initialInputs = {name:"",email:"",password:""}

    const [inputs,setInputs] = useState(initialInputs);
    const [errors,setErrors]=useState(initialErrors);


    const [haveError,setHaveerror]=useState(true)

    function handleChange(e){
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        let errors = initialErrors;
        let hasError=false;

        if(inputs.name === ""){
            errors.name.required = true;
            hasError=true;
        }
        if(inputs.email === ""){
            errors.email.required = true;
            hasError=true;
        }
        if(inputs.password === ""){
            errors.password.required = true;
            hasError=true;
        }


        setErrors({...errors})
        setHaveerror(hasError)

        if(!hasError){
            console.log("fetch datas")
        }
    }

    return(
        <>
        <main>
            <h2>Register Page</h2>
            <br/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={handleChange} />
            {errors.name.required ? <div>Enter Your Name</div> : null}
            <br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={handleChange} />
            {errors.email.required ? <div>Enter Your Email</div> : null}
            <br/>
            <label htmlFor="password">Name</label>
            <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handleChange} />
            {errors.password.required ? <div>Enter Your Passowrd</div> : null}
            <br/>
            <button disabled={!haveError} >Submit</button>
        </form>

        <div>Do You Have An Account ? <Link to={"/login"} >Login</Link></div>
        </main>
        </>
    )
}

export default Registerpage;