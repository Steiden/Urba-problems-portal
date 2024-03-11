import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProblemsPage } from "./components/ProblemsPage";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { ProfilePage } from "./components/ProfilePage";
import { RequestsPage } from "./components/RequstsPage";
import { NewRequestPage } from "./components/NewRequestPage";
import { getJWT, removeJWT } from "./helpers/jwtHelper";
import { TypeUserFromServer } from "./api/users/UsersTypes";
import { getMe } from "./api/auth/Auth";
import "./App.scss";

export const App = (): ReactNode => {
    const [loginFormIsOpen, setLoginFormIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [registerFormIsOpen, setRegisterFormIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const [isAuthorized, setIsAuthorized]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [user, setUser]: [TypeUserFromServer, Dispatch<SetStateAction<TypeUserFromServer>>] = useState({} as TypeUserFromServer);
    const [jwt, setJwt]: [string, Dispatch<SetStateAction<string>>] = useState("");

    useEffect(() => {
        const title: HTMLHeadElement = document.querySelector("title") as HTMLHeadElement;
        title.textContent = "Городские проблемы";

        const head: HTMLElement = document.querySelector("head") as HTMLElement;
        const link: HTMLLinkElement = document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";
        link.href = "../img/1476434895129645719.jpg";

        head.appendChild(link);
    }, []);

    useEffect(() => {
        setJwt(getJWT());
    }, []);

    useEffect(() => {
        async function checkAuth(): Promise<void> {
            if (!jwt) {
                setUser({} as TypeUserFromServer);
                setIsAuthorized(false);
                return;
            }

            const user: TypeUserFromServer = await getMe(getJWT()) as TypeUserFromServer;

            if (user instanceof Error) {
                setUser({} as TypeUserFromServer);
                setIsAuthorized(false);
                removeJWT();
                return;
            }

            setUser(user as TypeUserFromServer);
            setIsAuthorized(true);
        }

        checkAuth();
    }, [jwt]);

    const PageNotFound = (): ReactNode => <h1>Страница не найдена</h1>;
    return (
        <Router>
            <Header
                loginForm={{ loginFormIsOpen, setLoginFormIsOpen }}
                registerForm={{ registerFormIsOpen, setRegisterFormIsOpen }}
                auth={{ isAuthorized, setIsAuthorized }}
                user={user}
                setJwt={setJwt}
            />
            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                loginForm={{ isOpen: loginFormIsOpen, setIsOpen: setLoginFormIsOpen }}
                                registerForm={{ isOpen: registerFormIsOpen, setIsOpen: setRegisterFormIsOpen }}
                                isAuthorized={isAuthorized}
                            />
                        }
                    />
                    <Route path="/problems" element={<ProblemsPage isAuthorized={isAuthorized} />} />
                    <Route path="/me" element={<ProfilePage userData={{ user, setUser }} isAuthorized={isAuthorized} />} />
                    <Route path="/me/requests" element={<RequestsPage isAuthorized={isAuthorized} user={user} />} />
                    <Route path="/me/new-request" element={<NewRequestPage isAuthorized={isAuthorized} user={user} />} />
                    <Route path="*" Component={PageNotFound} />
                </Routes>
            </Main>
        </Router>
    );
};

export default App;
