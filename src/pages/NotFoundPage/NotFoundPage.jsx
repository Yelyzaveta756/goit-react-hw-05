import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>Ooops... Page not found, you can return to the <Link to="/"style={{color: "orangered"}}>Home page</Link></div>
    )
}