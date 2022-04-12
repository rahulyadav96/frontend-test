
import Link from "next/link";

export const Navbar = ()=>{
    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="bg-gray-800" style={{padding:"10px"}}>
          <div  style={{color:"#fff", display:"flex", justifyContent:"space-around" }}>
              <Link href="/">Home</Link>
              <Link href="/keyData">Key data</Link>
              <Link href="/login">Login</Link>
          </div>
        </nav>
    )
}