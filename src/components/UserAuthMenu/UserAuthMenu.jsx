import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authOperations";
import s from "./UserAuthMenu.module.css"
export const UserAuthMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
            <p className={s.text}>Welcome, {user?.name}</p>
            <button className={s.btn} type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
 }