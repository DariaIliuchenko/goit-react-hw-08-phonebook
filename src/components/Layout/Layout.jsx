import { Outlet } from "react-router-dom"
import { AppBar} from "../AppBar/AppBar"
import {Loader} from "../Loader/Loader"
import { Suspense } from "react"
export const Layout = () => {
    return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
 }