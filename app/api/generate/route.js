import clientPromise from "@/lib/mongodb"


export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("bitlinks") // db name
    const collection = db.collection("url")
    
    // check if shorturl name already exist ===> start
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }
    // check if shorturl name already exist ===> end


    const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl
    })

    return Response.json({success:true, error:false, message: 'URL Generated Sucessfully' })
}


// we cannot create same name url "url" : "https://amazon.com/", "shorturl" : "maxb" or==> "url" : "https://amazon.com/hello", "shorturl" : "maxb" second one say url already exists 

// we can create multiple url withsame url but short url name must be changed 