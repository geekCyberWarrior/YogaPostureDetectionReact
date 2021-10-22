import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useHistory } from "react-router-dom";

const RegisterNew = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        name: "",
    });
    const { signup } = useAuth();
    const history = useHistory();

    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(state);
        const { email, password, name } = state;

        signup(email, password, name)
            .then((id) => {
                // setLoading(false);
                console.log("ROUTING", id);
                history.push("/home-page");
            })
            .catch((err) => {
                // setError(err.message);
                console.log("error", err.message);
                // setLoading(false);
            });

        console.log("ROUTED!!!");
    };

    return (
        <div className="App">
            <div className="appAside" />
            <div className="appForm">
                <div className="formTitle">
                    <NavLink
                        to="/sign-in"
                        activeClassName="formTitleLink-active"
                        className="formTitleLink"
                    >
                        Sign In
                    </NavLink>{" "}
                    or{" "}
                    <NavLink
                        exact
                        to="/"
                        activeClassName="formTitleLink-active"
                        className="formTitleLink"
                    >
                        Sign Up
                    </NavLink>
                </div>
                <div className="formCenter">
                    <form onSubmit={handleSubmit} className="formFields">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="formFieldInput"
                                placeholder="Enter your full name"
                                name="name"
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label
                                className="formFieldLabel"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                                value={state.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                                E-Mail Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="formFieldInput"
                                placeholder="Enter your email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="formField">
                            <button className="formFieldButton">Sign Up</button>{" "}
                            <Link to="/sign-in" className="formFieldLink">
                                I'm already member
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterNew;
