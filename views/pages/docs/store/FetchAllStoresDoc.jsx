import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import CodeBlock from "../../../components/CodeBlock";

export default function FetchAllStoresDoc() {
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold">Fetching All Stores</h1>
            <br />
            <p>
                This documentation covers the API endpoint to fetch all stores owned by the authenticated user. You can
                use this endpoint to retrieve a list of all your stores.
            </p>
            <blockquote>
                <strong>Note</strong>: Only send <code>GET</code> requests to this endpoint.
            </blockquote>
            <CodeBlock heading="Endpoint URL" code={`https://estoresapi.com/api/v1/stores`} language="plaintext" />
            <CodeBlock
                heading="Example Request"
                language="javascript"
                code={`const API_KEY = "your_api_key";

async function fetchAllStores() {
    try {
        const response = await fetch("https://estoresapi.com/api/v1/stores", {
            method: "GET",
            headers: {
                "Authentication": \`Bearer \$\{API_KEY\}\`
            }
        });

        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        console.log("Stores fetched successfully:", data);

    } catch (error) {
        console.log("Error while fetching stores", error);
    }
}

fetchAllStores();`}
            />
            <br />
            <h2 className="text-2xl font-semibold">Allowed Query Parameters</h2>
            <p>You can use the following query parameters to customize the response:</p>
            <ul className="list-disc list-inside">
                <li>
                    <code>fields</code>: A comma-separated list of fields to include in the response. For example,{" "}
                    <code>?fields=name,description</code>.
                </li>
            </ul>
            <br />
            <h2 className="text-2xl font-semibold">Possible Responses</h2>
            <p>
                The endpoint returns a variety of responses, but all have the same structure; the <code>success</code>{" "}
                status, which is a <code>boolean</code> (<code>true</code> or <code>false</code>), and the{" "}
                <code>data</code> which is an array of store objects.
            </p>
            <CodeBlock
                heading={
                    <>
                        Success - <code>200 (OK)</code>
                    </>
                }
                code={`{ success: true, data: [ { _id: "store_id", name: "Store Name", description: "Store Description" } ] }`}
                language="json"
            />
            <CodeBlock
                heading={
                    <>
                        Unauthorized - <code>401 (Unauthorized)</code>
                    </>
                }
                code={`{ success: false, message: "You are not authorized to access this resource." }`}
                language="json"
            />
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
                <Link to="../stores/create" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    <CgArrowLeft /> Creating a store
                </Link>
                <Link to="../stores/get/single" className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                    Getting a single store <CgArrowRight />
                </Link>
            </div>
        </div>
    );
}
