import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useQuery, useLazyQuery } from "@apollo/client"
import { LOGIN } from "../services/graphql/queries/uddQueries";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import RegularInput from "../components/Inputs/RegularInput";
// import { authenticationService } from "../services/authentication.service";

// layout for page
import Auth from "layouts/Auth.js";


function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);
}

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  const [redirectPath, setRedirectPath] = useState("udd")

  const [loginAdmin, { loading, error, data}] = useLazyQuery(
      LOGIN, {
        variables: {
          email: email,
          password: password,
        },
      }
  );

  if (error) {
    console.error(error);
  }

  if (loading) {
    return <h2>Loading</h2>
  }

  if (data) {
    // alert(JSON.stringify(data, null, 2));
    const currentAdmin = data.login;
    if (currentAdmin !== null) {
      if (currentAdmin.status == false) {
        alert("Status anda tidak aktif, mohon hubungin superadmin PMI anda")
        setEmail("")
        setPassword("")
      } else {
        localStorage.setItem("currentUser", currentAdmin.role);
        localStorage.setItem("currentBranch", currentAdmin.branch.id);
        const role = localStorage.getItem("currentUser");
        router.push({pathname: "admin/udd", query: { role }});
      }
    }
  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in
                  </h6>
                </div>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: ""
                }}
                validationSchema={
                  Yup.object().shape({
                    email: Yup.string().email().required(),
                    password: Yup.string().required()
                  })
                }
                onSubmit={values => {
                  // alert(JSON.stringify(values, null, 2));
                  setEmail(values.email)
                  setPassword(values.password)
                  loginAdmin()
                }}
              >
                <Form>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="relative w-full mb-3">
                      <RegularInput label="email" name="email" type="email" showLabel={true}/>
                    </div>
                    <div className="relative w-full mb-3">
                      <RegularInput label="Password" name="password" type="password" showLabel={true}/>
                    </div>
                    {/*<div>*/}
                    {/*  <label className="inline-flex items-center cursor-pointer">*/}
                    {/*    <input*/}
                    {/*        id="customCheckLogin"*/}
                    {/*        type="checkbox"*/}
                    {/*        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"*/}
                    {/*    />*/}
                    {/*    <span className="ml-2 text-sm font-semibold text-blueGray-600">*/}
                    {/*      Remember me*/}
                    {/*    </span>*/}
                    {/*  </label>*/}
                    {/*</div>*/}
                    <div className="text-center mt-6">
                      <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                          // onClick={handleLogin}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Index.layout = Auth;
