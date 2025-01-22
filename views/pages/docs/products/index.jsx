import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function ProductsAPIDocHome() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">The Products API</h1>
            <br />
            <p>
                The <code>Products</code> API contains endpoints for carrying out <code>Create</code>, <code>Read</code>
                ,<code>Update</code>, and <code>Delete</code> actions. You can manage your product catalog using these
                endpoints.
            </p>
            <blockquote>
                <strong>Note:</strong> Ensure you have the necessary permissions to perform these actions on your
                products.
            </blockquote>
            <br />
            <h2 className="text-2xl font-semibold">Related Resources</h2>
            <ul className="list-disc list-inside">
                <li>
                    <Link className="text-blue-600 underline" to="./create">
                        Creating a new product.
                    </Link>
                </li>
                <li>
                    <Link className="text-blue-600 underline" to="./update">
                        Updating a product's information.
                    </Link>
                </li>
                <li>
                    <Link className="text-blue-600 underline" to="./delete">
                        Deleting a product.
                    </Link>
                </li>
            </ul>
            <br />
            <br />
            <br />
            <div className="flex justify-between items-center max-w-screen-md mx-auto">
                <Link to="../" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    <CgArrowLeft /> Getting Started
                </Link>
                <Link to="../products/create" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    Creating a product <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
