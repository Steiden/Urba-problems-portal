import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { LoginForm } from "../AuthForm/LoginForm";
import { RegisterForm } from "../AuthForm/RegisterForm";
import { Link } from "react-router-dom";
import { GuestNavbarItems } from "../GuestNavbarItems";
import { UserNavbarItems } from "../UserNavbarItems";
import { TypeUser } from "../../api/types/DatabaseTypes";
import "./scss/Header.scss";

type TypeProps = {
    auth: {
        isAuthorized: boolean;
        setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    };
    user: TypeUser;
    setJwt: Dispatch<SetStateAction<string>>;
};

export const Header = ({ auth, user, setJwt }: TypeProps): ReactNode => {
    const [loginFormIsOpen, setLoginFormIsOpen] = useState(false);
    const [registerFormIsOpen, setRegisterFormIsOpen] = useState(false);
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
                            setLoginFormIsOpen={setLoginFormIsOpen}
                            setRegisterFormIsOpen={setRegisterFormIsOpen}
                        />
                    )}
                </Navbar>
            </div>
            {dropdownIsOpen && <div className="dropdown__overlay" onClick={() => setDropdownIsOpen(false)}></div>}

            <LoginForm
                loginForm={{ loginFormIsOpen, setLoginFormIsOpen }}
                setIsAuthorized={auth.setIsAuthorized}
                setJwt={setJwt}
                setDropdownIsOpen={setDropdownIsOpen}
            />
            <RegisterForm registerForm={{ registerFormIsOpen, setRegisterFormIsOpen }} />
        </header>
    );
};
