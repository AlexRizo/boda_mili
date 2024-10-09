import { Outlet } from "react-router-dom"
import { Footer, Header } from "../UI"

export const Layout = () => {
    return (
        <>
            {/* <Header /> */}

            <Outlet />

            {/* <Footer /> */}
        </>
    )
}
