import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function NameUpdateDoc() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">Updating A Store's Name</h1>
            <br />
            <p>
                Sometimes, a store's name might not feel right to you for some reason, or perhaps, there's a naming
                conflict that you'd like to resolve. This documentation covers the API endpoint to help you achieve just
                that. With this endpoint you can seamlessly update the store's name as needed.
            </p>
            <blockquote>
                <strong>Note</strong>: Only send <code>POST</code> requests to this endpoint.
            </blockquote>
            <div className="code-block">
                <h3>Endpoint URL</h3>
                <pre>{`https://estoresapi.com/api/v1/stores/update/name`}</pre>
            </div>
            <div className="code-block">
                <h3>Example Request</h3>
                <pre>
                    {`const API_KEY = "your_api_key";
const STORE_ID = "your_store_id";

async function changeStoreName(newName) {
    try {
        const response = await fetch(\`https://estoresapi.com/api/v1/stores/update/name?storeId=\$\{STORE_ID\}\`, {
            method: "POST",
            body: newName;
            headers: {
                "Content-Type": "text/plain",
                "Authentication": \`Bearer \$\{API_KEY\}\`
            }
        });

        if (!response.ok) throw new Error("Request failed");
        else alert("Store name updated successfully!");

        const updatedStore = (await response.json()).data;
    } catch {
        console.log("Error while changing store name", error);
    }
}

changeStoreName("Rex Collections");`}
                </pre>
            </div>
            <br />
            <h2 className="text-2xl font-semibold">Possible Responses</h2>
            <p>
                The endpoint returns a variety of responses, but all have the same structure; the <code>success</code>{" "}
                status, which is a <code>boolean</code> (<code>true</code> or <code>false</code>), the optional{" "}
                <code>message</code> which is <code>string</code> or the <code>data</code> containing the updated store.
            </p>
            <div className="code-block">
                <h3>
                    Success - <code>200 (OK)</code>
                </h3>
                <pre>{`{ success: true, data: <Updated_Store> }`}</pre>
            </div>
            <div className="code-block">
                <h3>
                    Incorrect Request Body <code>Content-Type</code> - <code>400 (Bad Request)</code>
                </h3>
                <pre>{`{ 
    success: false, 
    message: "Expected request body to be of type 'text/plain', got type <Incorrect_Content-Type> instead."
}`}</pre>
            </div>
            <p>
                Failure to provide your authorization token, or using an inactive token will result in a{" "}
                <code>401 - Unauthorized</code> error.
            </p>
            <p>Other errors that may arise include:</p>
            <ul className="list-disc list-inside">
                <li>
                    <code>429 - Too Many Requests</code>: This will only come up when you hit your rate limit.
                </li>
                <li>
                    <code>404 - Not Found</code>: This means your account has been deleted and is no longer on the
                    system.
                </li>
                <li>
                    <code>500 - Internal Server Error</code>: Signifies that an error occurred on the server.
                </li>
            </ul>
            <p>The error messages may differ even if the error codes are the same.</p>
            <br />
            <br />
            <br />
            <div className="flex justify-between items-center max-w-screen-md mx-auto">
                <Link to="../stores/get/single" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    <CgArrowLeft /> Fetching a single store information
                </Link>
                <Link
                    to="../stores/update/description"
                    className="flex items-center gap-2 hover:text-blue-600 hover:underline"
                >
                    Updating a store's description. <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
