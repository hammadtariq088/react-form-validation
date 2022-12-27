import React from 'react';
import { useFormik } from 'formik';
import registrationSchema from "../schemas";

const FormValidation = () => {

   const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik(
   {
    initialValues:{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    },

    validationSchema: registrationSchema,

    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
    },

   });

        // console.log(formik);
        // console.log(values);
        // console.log(errors);

    return (
        <section id="contact">
            <div className="section-content">
                <h1 className="section-header"><span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s">Registration Form</span></h1>
            </div>
            <div className="contact-section">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 form-line">
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter First Name"
                                    />                          
                                </div>
                                {(errors.firstname && touched.firstname) ? <p className='text-white'>{errors.firstname}</p> : null}                               
                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Last Name"
                                        name="lastname"
                                        
                                    />
                                </div>
                                {(errors.lastname && touched.lastname) ? <p className='text-white'>{errors.lastname}</p> : null}                         
                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id=""
                                        placeholder=" Enter Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {(errors.email && touched.email) ? <p className='text-white'>{errors.email}</p> : null}  
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id=""
                                        placeholder=" Enter Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>                          
                                {(errors.password && touched.password) ? <p className='text-white'>{errors.password}</p> : null}
                                <div className="form-group mb-4">
                                    <input type="password"
                                        className="form-control"
                                        id=""
                                        placeholder=" Enter Confirm Password"
                                        name="confirmpassword"
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>                     
                                {(errors.confirmpassword && touched.confirmpassword) ? <p className='text-white'>{errors.confirmpassword}</p> : null}
                                <div>
                                    <input type="submit" className="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormValidation;