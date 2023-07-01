import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginRegister = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string().required("Password Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      localStorage.setItem("access_token", "hahaha");
      navigate("/");

      // setLoading(true);
      try {
        // console.log(values, "ini values");
        // const res = await loginMenu(values.email, values.password);
        // console.log(res, "Res");
        // if (res.status === 200) {
        //   // setLoading(false);
        //   navigate("/home-fashion");
        //   // dispatch(
        //   //   showSnackbar({
        //   //     isOpen: true,
        //   //     message: "success Login",
        //   //     severity: "success",
        //   //   })
        //   // );
        //   // setOpen(true);
        //   // console.log(snack, "snack ketika oke");
        //   localStorage.setItem("access_token", res.data.access_token);
        //   // localStorage.setItem("name", res.data.name);
        //   // localStorage.setItem("id", res.data.id);
        //   // localStorage.setItem("picture", res.data.picture);
        //   // dispatch(
        //   //   setUser({
        //   //     picture: res.data.picture,
        //   //   })
        //   // );
        // }
      } catch (error) {
        console.log(error);
        // setLoading(false);
        // setOpen(true);
      }
    },
  });

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Login Register",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={formik.handleSubmit}>
                              <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                id="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={
                                  formik.touched.email && formik.errors.email
                                }
                              />
                              <label>
                                {formik.touched.email && formik.errors.email}
                              </label>
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={
                                  formik.touched.password &&
                                  formik.errors.password
                                }
                              />
                              <label>
                                {formik.touched.password &&
                                  formik.errors.password}
                              </label>
                              <div className="button-box">
                                {/* <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div> */}
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Nama Lengkap"
                              />
                              <input
                                type="email"
                                name="user-email"
                                placeholder="Email"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <input
                                name="user-notelp"
                                placeholder="No Telp"
                                type="number"
                              />
                              <input
                                name="user-alamat"
                                placeholder="Alamat"
                                type="text"
                              />
                              <input
                                name="user-kota"
                                placeholder="Kota"
                                type="text"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
