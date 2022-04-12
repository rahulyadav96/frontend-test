
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
    const { auth, handleAuth } = useContext(AppContext);

    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <nav className="bg-gray-800" style={{ padding: "10px" }}>
            <div style={{ color: "#fff", display: "flex", justifyContent: "space-around" }}>
                <Link href="/">Home</Link>
                <Link href="/keyData">Key data</Link>
                {
                    auth ? <button onClick={handleAuth}>Logout</button> :
                        <Link href="/login">Login</Link>
                }
            </div>
        </nav>
    )
}