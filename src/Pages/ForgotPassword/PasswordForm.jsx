import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import '../../Assets/CssFiles/PasswordForgot.css'
import axios from 'axios';
import { useState } from 'react';
import { apiUrl } from '../../AppServices/AppService';

const PasswordForm = () => {
    const[email, setEmail] = useState("")
    const changeHandler = (e) => {
        setEmail(e.target.value)
    }
    const [reset, setReset] = useState(false)
    const clickHandler = async() => {
        try{
            const resetData = await axios.post(`${apiUrl}/jkegov/user/forgotPassword`, {
                email: email
            })
            setReset(true)
            console.log(resetData)
            

        }catch(error){

        }
    }
    return(
        <>
        <div className='d-flex justify-content-center align-items-center flex-column mt-4'>
            <h4 className=''>Reset Password</h4>

        <Form className='d-flex justify-content-center flex-column px-5 py-4 rounded shadow mt-4' style={{width: "27%"}}>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' onChange={changeHandler}/>
            <Button type='button' onClick={clickHandler} className='m-auto mt-4' style={{width: "40%"}}>Reset</Button>  
        </Form>
        </div>
        </>
    )
}
export default PasswordForm