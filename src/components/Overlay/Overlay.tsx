import { ReactNode } from "react";
import "./scss/Overlay.scss";

type TypeProps = {
    onClick: () => void;
}

export const Overlay = ({ onClick }: TypeProps): ReactNode => {
    return (
        <div className="overlay" onClick={onClick}></div>
    )
}