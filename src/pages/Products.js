import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
        <h2>Products Page</h2>
        <ul>
            <li><Link to="/products/p1"> A Book </Link></li>
            <li> <Link to="/products/p2">A Carpet</Link></li>
            <li> <Link to="/products/p3">An Online Course</Link></li>
            <li> <Link to="/products/p4">Conference invitation</Link></li>
        </ul>
        </section>
    )
};

export default Products;