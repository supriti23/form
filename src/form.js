import React, { Component, isValidElement, useState } from 'react';
import { Formik } from 'formik';
import './App.css';
import * as Yup from 'yup';

const FormApp = () => {

    return (
        <>
        <h1> Registration</h1>
        <Formik initialValues={{
                fullName : '',
                email : '',
                country : '',
                password: '',
                confirmPass: '',
                position: '',
                phone: '',
                city: '',
                gender: ''
        }}

        initialTouched={{ 
                fullName : true,
                email : true,
                country : true,
                password: true,
                confirmPass: true,
                position: true,
                phone: true,
                city: true,
                gender: true,
              }}
              
        validationSchema={Yup.object().shape({
                fullName : Yup
                .string()
                .required('Name cannot be blank')
                .min(2, 'Name should be greater than 1 character') 
                .matches(/^[aA-zZ\s]+$/,'No special character allowed'),
                position : Yup.string().required('Select one position'),
                email: Yup.string().email().required('Email is required'),
                phone : Yup.number().required('Phone number is required'),
                password: Yup.string().required('Password cannot be blank')
                .min(8, 'Password is too short - should be 8 chars minimum.'),
                confirmPass: Yup.string().required('Confirm your password')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                gender: Yup.string().required('choose one'),

        })}
        onSubmit={(val,actions) => {console.log('submitted');
        
          }}
        >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isValid
       }) => (
           <>
           <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                <label className="font-weight-bold" htmlFor="nm">Full Name</label>
                        <input id="nm" type="text"  name="fullName"
                        className="form-control"
                        placeholder="Please enter your full name" 
                        value={values.fullName}
                        onChange={handleChange}
                        />
                        {errors.fullName && touched.fullName ? 
                        <div className="errorStyle"> {errors.fullName} </div>: null}
                </div>
                
                <div className="col">
                    <label className="font-weight-bold">Position you are applying for</label>
                    <select className="form-control" name="position" 
                    value={values.position} onChange={handleChange} 
                     >
                    <option value=''>Choose...</option>
                    <option value="entry">Entry level Frontend Developer</option>
                    <option value="associate">Associate level Frontend Developer</option>
                    <option value="senior">Senior Frontend Developer</option>
                    </select>
                    {errors.position && touched.position ? 
                    <div className="errorStyle"> {errors.position} </div>: null}
                </div>
            </div>
            <div className="form-row">
                <div className="col ">
                        <label className="font-weight-bold">Email</label>
                        <input type="email"  name="email"
                        className="form-control"
                        placeholder="email@abc.com" 
                        value={values.email}
                        onChange={handleChange}/>
                        {errors.email && touched.email ?
                        <div className="errorStyle"> {errors.email} </div>: null}
                </div>
                <div className="col ">
                        <label className="font-weight-bold">Phone number</label>
                        <input type="tel" name="phone"
                        className="form-control"
                        placeholder="Phone number" 
                        value={values.phoneNo}
                        onChange={handleChange}/>
                        {errors.phone && touched.phone ?
                        <div className="errorStyle"> {errors.phone} </div>: null}
                </div>
            </div>
            <div className="form-row">
                <div className="col ">
                        <label className="font-weight-bold">Country</label>
                        <input type="email" name="country"
                        className="form-control"
                        placeholder="India" 
                        value={values.country}
                        onChange={handleChange}/>
                </div>
                <div className="col ">
                        <label className="font-weight-bold">city</label>
                        <input type="text" name="city"
                        className="form-control"
                        placeholder="Kolkata" 
                        value={values.city}
                        onChange={handleChange}/>
                </div>
             </div>
             <div className="form-row">
                <div className="col ">
                        <label className="font-weight-bold">Password</label>
                        <input type="text" name="password"
                        className="form-control"
                        placeholder="****" 
                        value={values.password}
                        onChange={handleChange}/>
                        {errors.password && touched.password ?
                        <div className="errorStyle"> {errors.password} </div>: null}
                </div>
                <div className="col ">
                        <label className="font-weight-bold">Confirm Password</label>
                        <input type="text" name="confirmPass"
                        className="form-control"
                        placeholder="****" 
                        value={values.confirmPass}
                        onChange={handleChange}/>
                </div>
             </div>
             <div className="form-row"> 
                 <label className="font-weight-bold"
                 value={values.gender}  onChange={handleChange}>Gender</label>
             </div>
             <div>
                <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radiobtn" id="male"
                        className="form-check-input" 
                        onChange={handleChange} />
                        <label htmlFor="male">Male</label> 
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radiobtn"id="fmale"
                        className="form-check-input "
                        onChange={handleChange}/>
                        <label htmlFor="fmale">Female</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radiobtn" id="other"
                        className="form-check-input"
                        onChange={handleChange}/>
                        <label htmlFor="other">Other</label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" name="radiobtn" id="unknown"
                        className="form-check-input"
                        onChange={handleChange}/>
                        <label htmlFor="unknown">Prefer not to say</label>
                </div>
            </div>
                <div>
                <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
           </>
       )}
        </Formik>
        </>
    )
}

export default FormApp;

