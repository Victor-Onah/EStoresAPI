import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function StoreAPIDocHome() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">The Stores API</h1>
            <br />
            <p>
                The <code>Store</code> API contains endpoints for carrying out <code>Read</code>, <code>Update</code>,
                and <code>Delete</code> actions. The Create action is not provided for public use via the API, but you
                can create one on your dashboard. After successful creation of the store, you'll be provided with the
                store's ID which you'll be using for other allowed actions
            </p>
            <blockquote>
                <strong>Note:</strong> You cannot create a store using the API directly. Store creation is only
                available on your dashboard.
            </blockquote>
            <br />
            <h2 className="text-2xl font-semibold">Related Resources</h2>
            <ul className="list-disc list-inside">
                <li>
                    <Link className="text-blue-600 underline" to="./update/name">
                        Updating a store's name.
                    </Link>
                </li>
                <li>
                    <Link className="text-blue-600 underline" to="./update/description">
                        Updating a store's description.
                    </Link>
                </li>
                <li>
                    <Link className="text-blue-600 underline" to="./update">
                        Updating a store's general information.
                    </Link>
                </li>
                <li>
                    <Link className="text-blue-600 underline" to="./delete">
                        Deleting a store.
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
                <Link to="../store/create" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    Creating a store <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
