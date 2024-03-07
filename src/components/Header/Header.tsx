import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { LoginForm } from "../AuthForm/LoginForm";
import { RegisterForm } from "../AuthForm/RegisterForm";
import { Link } from "react-router-dom";
import { GuestNavbarItems } from "../GuestNavbarItems";
import { UserNavbarItems } from "../UserNavbarItems";
import "./scss/Header.scss";
import { TypeUserFromServer } from "../../api/users/UsersTypes";

type TypeProps = {
    loginForm: {
        loginFormIsOpen: boolean;
        setLoginFormIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    registerForm: {
        registerFormIsOpen: boolean;
        setRegisterFormIsOpen: Dispatch<SetStateAction<boolean>>;
    }
    auth: {
        isAuthorized: boolean;
        setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    };
    user: TypeUserFromServer;
    setJwt: Dispatch<SetStateAction<string>>;
};

export const Header = ({ loginForm, registerForm, auth, user, setJwt }: TypeProps): ReactNode => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">
                    Городской портал
                </Link>
                <Navbar
                    dropdown={{ dropdownIsOpen, setDropdownIsOpen }}
                    user={user}
                    setIsAuthorized={auth.setIsAuthorized}
                    setJwt={setJwt}>
                    {auth.isAuthorized ? (
                        <UserNavbarItems />
                    ) : (
                        <GuestNavbarItems
                            setLoginFormIsOpen={loginForm.setLoginFormIsOpen}
                            setRegisterFormIsOpen={registerForm.setRegisterFormIsOpen}
                        />
                    )}
                </Navbar>
            </div>
            {dropdownIsOpen && <div className="dropdown__overlay" onClick={() => setDropdownIsOpen(false)}></div>}

            <LoginForm
                loginForm={loginForm}
                setIsAuthorized={auth.setIsAuthorized}
                setJwt={setJwt}
                setDropdownIsOpen={setDropdownIsOpen}
            />
            <RegisterForm registerForm={registerForm} />
        </header>
    );
};
