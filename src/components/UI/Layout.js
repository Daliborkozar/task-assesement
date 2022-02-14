import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({cartAction}) => {
    return(
        <main>
            <Navbar cartAction={cartAction}/>
            <Outlet/>  
        </main>
    )
}