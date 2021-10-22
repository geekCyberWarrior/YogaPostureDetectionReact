import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const LoginNew = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
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
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(state);

        const { email, password } = state;

        signin(email, password)
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
                    <form className="formFields" onSubmit={handleSubmit}>
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
                            <button className="formFieldButton" type="submit">
                                Sign In
                            </button>{" "}
                            <Link to="/" className="formFieldLink">
                                Create an account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginNew;
