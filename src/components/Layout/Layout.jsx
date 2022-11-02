import { Outlet } from "react-router-dom"
import { AppBar} from "../AppBar/AppBar"
import {Loader} from "../Loader/Loader"
import { Suspense } from "react"
import s from "./Layout.module.css"
export const Layout = () => {
    return (
    <div className={s.wrapper}>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
 }