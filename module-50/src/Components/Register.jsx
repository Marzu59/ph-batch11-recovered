import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebaseinit";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [success, setsuccess] = useState(false);
  const [errormessege, setErrrormessege] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const term = e.target.terms.checked
    console.log(email, password , term);
    if(!term){
      setErrrormessege('Please Accept our conditions')
      return
    }
    setErrrormessege("");
    setsuccess(false);

    //password validate
    const checkNum = /\d/;
    if (checkNum.test(password) === false) {
      setErrrormessege("No numbr found in password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        
         //   sendEmailVerification(result.user) or
         sendEmailVerification(auth.currentUser) 
         .then(()=>{
             setsuccess(true);
             
         })

         const profile = {
           displayName: name
           }
           updateProfile(auth.currentUser, profile)
           .then(()=>{
            console.log('name given')
           })
           .catch(error=>{
            console.log(error)
           })
      })
      .catch((error) => {
        console.log(error);
        setErrrormessege(error.message);
      });
  };

  return (
    <div className="mx-auto max-w-sm mt-5">
      <form onSubmit={handleRegister}>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
              />
            </label>

   
         {/* name */}
         <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="text"
                name="name"
                placeholder="your name"
                required
              />
            </label>


            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
        </div>
        <br />
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              // minLength="8"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            

            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="btn-sm absolute"
            >
              {" "}
              {showPassword ? (
                <FaEyeSlash> </FaEyeSlash>
              ) : (
                <FaEye> </FaEye>
              )}{" "}
            </button>
          </div>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <br />
        <label className="label">
          <input type="checkbox" name="terms" className="checkbox" />
         Accept Terms and condition
        </label>
        <br />
        <button className="btn btn-primary">Signup</button>
      </form>
      {errormessege && <p className="text-blue "> {errormessege} </p>}

      {success && <p className="text-green-700"> Signup Success! </p>}

      <p>Alredy have accoun please <Link to={'/login'}>Signin</Link> </p>
    </div>
  );
};

export default Register;
