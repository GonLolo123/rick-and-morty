import React from "react";
import {Link} from 'react-router-dom'
import styled from './forms.module.css'

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i;

export default function Forms({login}){

    const [inputs, setInputs] = React.useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        email: "",
        password: ""
    })

    function validate(inputs){
        const errors = {}

        if(!inputs.email){
            errors.email = "Debe haber un email"
        }else if(!inputs.password){
            errors.password = "Debe haber un password"
        }else if(!regexEmail.test(inputs.email)){
            errors.email = "debe ser un email valido"
        }else if(!regexPassword.test(inputs.password)){
            errors.password = "debe ser un password valido"
        }
        return errors
    }

    function handleChange(event){
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })

        setErrors(validate({
            ...inputs,
            [event.target.name]:event.target.value
        }))
    }

    function handleSubmit(event){
        event.prevent.default()
        const aux = Object.keys(errors)
        if(aux.length===0){
          setInputs({
            email:"",
            password:""
          })  

          setErrors({
            email:"",
            password:""
          }) 
          login(inputs)
          return alert("OKEY")
        }
        return("Error")
    }


    return(
    <div  className={styled.container}>

        <form onSubmit={handleSubmit}>
            <div className={styled.divForms}>

            <label className={styled.labelemail}>Email: </label>
            <input className={styled.input} name="email" onChange={handleChange}
            value={inputs.email}></input>
            <p className={styled.danger}>{errors.email}</p>


            <label className={styled.labelpassword}>Password: </label>
            <input className={styled.input} name="password" onChange={handleChange}
            value={inputs.password}/>
            <p className={styled.danger}>{errors.password}</p>

            <div className={styled.containerButton}>

            {Object.keys(errors).length ===0?(
                <Link to="/home">
                <button className={styled.buttonSubmit} type="submit">Submit</button>
                </Link>
            ): null }

            </div>

            </div>
       
        </form>
    </div>
    )
}