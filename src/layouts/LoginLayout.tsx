import React from "react";
import { Outlet } from "react-router-dom";

function LoginLayout() {
    return (
        <section className="flex">
            <div className="w-[100%] h-[100vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white">
                <div className="w-[100%] bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default LoginLayout;
