import { useNavigate } from "react-router-dom";
import Notification from "./Notification";

export default function Navbar () {
    const navi = useNavigate ();
    const cart = useNavigate();
    const signout= () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navi('/');
    }
    return (
        <nav className="Navigation">
            <Notification /> |
            <button onClick={() =>cart('/Cart')}>Cart</button> |
            <button onClick={signout}>Signout</button>
        </nav>
    )
}