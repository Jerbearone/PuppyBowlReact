import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>

            <div className="navLinkDiv">
                <Link className="navLink" to={"/"}>Home</Link>
                <Link className="navLink" to={"/newPlayer"}>Add to Team</Link>
            
            </div>
            

        </div>
        
    )
}