import { async } from "@firebase/util";
import { useState } from "react";
 import './sign-up-form.styles.scss' 
 import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
console.log(formFields);

const handleSubmit =async (event) =>{
    event.preventDefault();
    if (password !== confirmPassword){
        alert("password do not match");
        return;
        
    }
    
  
}
  const handleChange =(event) => {
    
    const {name,value} = event.target;
    setFormFields(({...formFields,[name]:value}))
   
  }
  return (
    <div className="sign-up-container">
        <h2>Don't have an accaunt</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

       
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

        
        <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password} />

       
        <FormInput label="confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <Button type="submit">Sign-up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
