// Importing the MongoDB client connection promise
import clientPromise from "@/lib/mongodb"

// Exporting the default asynchronous function for the page component
export default async function Page({ params }) {
    // Extracting the 'shorturl' parameter from the 'params' object
    const shorturl = (await params).shorturl

    // Connecting to the MongoDB database using the client promise
    const client = await clientPromise
    const db = client.db("bitlinks") // Selecting the database named "bitlinks"
    const collection = db.collection("url") // Selecting the "url" collection

    // Searching for a document in the collection where 'shorturl' matches the given parameter
    const doc = await collection.findOne({ shorturl: shorturl })

    // If a matching document is found, redirect the user to the stored URL
    if (doc) {
        redirect(doc.url)
    } 
    // If no matching document is found, redirect the user to a default homepage or fallback URL
    else {
        redirect(`${NEXT_PUBLIC_HOST}`) // Note: NEXT_PUBLIC_HOST should be defined in the environment variables
    }

    // This part will never be reached because 'redirect' will send the user elsewhere before rendering anything
    return <div>My Post: {url}</div> 
}

