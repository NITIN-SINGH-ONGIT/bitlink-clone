import { MongoClient } from "mongodb";  // mongoclient allows for making Connections to MongoDB.

const uri = process.env.MONGODB_URI; // Fetches the MongoDB connection string from environment variables.

const options = {     
  useNewUrlParser: true,
};
 // no longer need in latest version ==> We use useNewUrlParser: true in MongoDB connections to avoid deprecation warnings and ensure the connection string is parsed correctly using the updated URL parser.  ==>🔴 Issue: If the username or password contained special characters (@, :, /, etc.), the old parser might not handle them properly, causing connection errors or deprecation warnings.


let client;
let clientPromise;

if (!process.env.MONGODB_URI) {    // 🔴 Checking if MongoDB URI is Defined
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {    // Checks if the application is running in development mode. ==> process.env.NODE_ENV is an environment variable that indicates the current environment. ==> "development" is typically used when running the app locally.

  if (!global._mongoClientPromise) { // global is build in object allow to access variable accessible in accross application   ==> If _mongoClientPromise does not exist, it means that the MongoDB connection has not been established yet, and we need to create a new one. ==> If _mongoClientPromise exists, the connection has already been set up, and we can reuse it.

    client = new MongoClient(uri, options);  // This line initializes a new instance of the MongoDB client using the MongoClient class from the mongodb package. uri means url and options in optinal

    global._mongoClientPromise = client.connect();  // .connect() initiates an asynchronous connection to the MongoDB server. This ensures that the same connection is reused instead of creating a new one every time.
  }
  clientPromise = global._mongoClientPromise;  // Assigns the global connection promise to a local variable clientPromise. This makes it easier to use in the rest of the application.

} else {
  client = new MongoClient(uri, options);  // This executes when global._mongoClientPromise already exists, meaning a MongoDB connection has been previously established. 

  clientPromise = client.connect(); // A new connection to MongoDB is initiated. This means a separate connection is being created instead of using the globally stored one.
}

export default clientPromise;
