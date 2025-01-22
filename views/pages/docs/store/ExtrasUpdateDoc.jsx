import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function ExtrasUpdateDoc() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">Adding and Updating Custom Information to Store</h1>
            <br />
            <p>
                Sometimes, you might need to add or update custom information for a store to better manage your data.
                This documentation covers the API endpoint to help you achieve just that. With this endpoint, you can
                seamlessly add or update custom information for the store as needed.
            </p>
            <blockquote>
                <strong>Note</strong>: Only send <code>POST</code> requests to this endpoint.
            </blockquote>
            <div className="code-block">
                <h3>Endpoint URL</h3>
                <pre>{`https://estoresapi.com/api/v1/stores/update/extras`}</pre>
            </div>
            <div className="code-block">
                <h3>Example Request</h3>
                <pre>
                    {`const API_KEY = "your_api_key";
const STORE_ID = "your_store_id";

async function updateStoreExtras(newExtras) {
    try {
        const response = await fetch(\`https://estoresapi.com/api/v1/stores/update/extras?storeId=\$\{STORE_ID\}\`, {
            method: "POST",
            body: JSON.stringify(newExtras),
            headers: {
                "Content-Type": "application/json",
                "Authentication": \`Bearer \$\{API_KEY\}\`
            }
        });

        if (!response.ok) throw new Error("Request failed");
        else alert("Store extras updated successfully!");

        const updatedStore = (await response.json()).data;
    } catch {
        console.log("Error while updating store extras", error);
    }
}

updateStoreExtras({ customField: "customValue" });`}
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
    message: "Expected request body to be of type 'application/json', got type <Incorrect_Content-Type> instead."
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
                <Link
                    to="../stores/update/description"
                    className="flex items-center gap-2 hover:text-blue-600 hover:underline"
                >
                    <CgArrowLeft /> Updating a store's description
                </Link>
                <Link to="../stores/delete" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    Deleting a store <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
