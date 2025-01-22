import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";

export default function DeleteStoreDoc() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">Deleting A Store</h1>
            <br />
            <p>
                There might be situations where you need to delete a store, such as when the store is no longer active
                or needed. This documentation covers the API endpoint to help you achieve just that. With this endpoint,
                you can seamlessly delete a store as needed.
            </p>
            <blockquote>
                <strong>Note</strong>: Only send <code>DELETE</code> requests to this endpoint.
            </blockquote>
            <CodeBlock language="plaintext" code={`https://estoresapi.com/api/v1/stores/:id`} heading="Endpoint URL" />
            <CodeBlock
                code={`const API_KEY = "your_api_key";
const STORE_ID = "your_store_id";

async function deleteStore() {
    try {
        const response = await fetch(\`https://estoresapi.com/api/v1/stores/\$\{STORE_ID\}\`, {
            method: "DELETE",
            headers: {
                "Authentication": \`Bearer \$\{API_KEY\}\`
            }
        });

        if (!response.ok) throw new Error("Request failed");
        else alert("Store deleted successfully!");

    } catch {
        console.log("Error while deleting store", error);
    }
}

deleteStore();`}
                language="javascript"
                heading="Example Request"
            />
            <br />
            <h2 className="text-2xl font-semibold">Possible Responses</h2>
            <p>
                The endpoint returns a variety of responses, but all have the same structure; the <code>success</code>{" "}
                status, which is a <code>boolean</code> (<code>true</code> or <code>false</code>), the optional{" "}
                <code>message</code> which is <code>string</code>.
            </p>
            <CodeBlock
                code={`{ success: true, message: "Store and all its products have been deleted successfully." }`}
                language="json"
                heading={
                    <>
                        Success - <code>200 (OK)</code>
                    </>
                }
            />
            <CodeBlock
                code={`{ 
    success: false, 
    message: "Store not found"
}`}
                language="json"
                heading={
                    <>
                        Store Not Found - <code>404 (Not Found)</code>
                    </>
                }
            />
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
                    <code>500 - Internal Server Error</code>: Signifies that an error occurred on the server.
                </li>
            </ul>
            <p>The error messages may differ even if the error codes are the same.</p>
            <br />
            <br />
            <br />
            <div className="flex justify-between items-center max-w-screen-md mx-auto">
                <Link
                    to="../stores/update/extras"
                    className="flex items-center gap-2 hover:text-blue-600 hover:underline"
                >
                    <CgArrowLeft /> Adding custom data to store
                </Link>
                <Link to="../stores" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    Products API <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
