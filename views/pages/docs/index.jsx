import { Link } from "react-router-dom";

export default function DocsHome() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">Welcome to the eStoresAPI Docs</h1>
            <br />
            <p>
                The eStoresAPI provides e-commerce APIs that offer endpoints for most of the essential functionalities
                required to build a robust e-commerce application without the need for a creating a backend. Frontend
                developers can use these APIs to:
            </p>
            <ul className="list-disc pl-6">
                <li>Manage stores, including creation, updates, and deletion.</li>
                <li>Perform CRUD operations on products and categories.</li>
                <li>Handle customer accounts and authentication.</li>
                <li>Enable full-text search for products.</li>
                <li>Manage shopping carts and checkout processes.</li>
                <li>Track customer orders and statuses.</li>
                <li>Integrate with payment processing systems.</li>
            </ul>
            <p>
                Each endpoint is well-documented with detailed request and response structures, making integration
                seamless and efficient for frontend developers.
            </p>
            <p>
                Whether it's a gig or side project, <b>eStoresAPI</b> provides all the necessary endpoints to build a
                fully functional and standard e-commerce application.
            </p>
            <br />
            <h2 className="text-2xl font-semibold">How To Get Started?</h2>
            <p>
                To get started using the eStoresAPI, you'll have to create an account with us and get your API keys. On
                successful registration, you'll be given 2 (two) API keys, one for development and the other for
                production.
            </p>
            <p>
                There's not much difference in using the API keys, any operation that can be carried out with the
                production API key can also be carried out with the development API key. The only major distinction is,
                with the development key, you are limited to 100 requests per minute. This is because, we do not expect
                much traffic from development servers (basically servers running on your PC). Using the production keys
                gets you more requests per minutes (
                <Link className="underline text-blue-600" to="./pricing">
                    Visit the pricing documentation page for more info
                </Link>
                ), but only secure HTTP requests will be accepted.
            </p>
            <blockquote className="p-4 border-l-4 bg-zinc-900">
                <strong>NOTE</strong>: Using the productions keys from a development environment will lead to warnings,
                if these warnings are not adhered to after several attempts, your account will be blocked till further
                notice.
            </blockquote>
            <br />
            <h2 className="text-2xl font-semibold">Using The API</h2>
            <p>
                Consuming the API is pretty straightforward. Once you've got your API key(s), all you have to do is send
                a request to the specific endpoint you want to use. Below is an aggregation of documentations of the
                various available endpoints.
            </p>
            <blockquote className="p-4 border-l-4 bg-zinc-900">
                <strong>NOTE</strong>: Before you can use most of the APIs meaningfully, you'll need to create a{" "}
                <b>store</b>.
            </blockquote>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <Link to="./stores" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">Stores API</h3>
                    <p className="text-sm text-zinc-300">
                        Includes APIs for updating, deleting, and getting store information.
                    </p>
                </Link>
                <Link to="./products" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">Products API</h3>
                    <p className="text-sm text-zinc-300">
                        Includes APIs for creating, deleting, updating, and getting product information.
                    </p>
                </Link>
                <Link to="./stores" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">User API</h3>
                    <p className="text-sm text-zinc-300">
                        Includes APIs for creating, deleting, updating, getting user information, and carrying out
                        actions on users behalf.
                    </p>
                </Link>
                <Link to="./stores" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">Auth API</h3>
                    <p className="text-sm text-zinc-300">Includes APIs for user authentication and authorization.</p>
                </Link>
                <Link to="./stores" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">Cart API</h3>
                    <p className="text-sm text-zinc-300">Includes APIs for managing users carts.</p>
                </Link>
                <Link to="./stores" className="p-4 border border-zinc-700 rounded-md bg-zinc-800/50 backdrop-blur-lg">
                    <h3 className="text-lg">Orders API</h3>
                    <p className="text-sm text-zinc-300">
                        Includes APIs for creating and managing users orders (marking orders as completed, pending,
                        shipped, etc.)
                    </p>
                </Link>
            </div>
        </div>
    );
}
