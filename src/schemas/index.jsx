import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  firstname: yup.string().min(2).max(25).required("First Name is required..."),
  lastname: yup.string().min(2).max(25).required("Last Name is required..."),
  email: yup.string().email().required("Email is required..."),
  password: yup.string().min(8).required("Password is required..."),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Confirm Password must be equal to Password").required("Confirm Password is required...")
  
});

export default registrationSchema;