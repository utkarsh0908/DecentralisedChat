import { client } from "../../lib/client";

const query = `*[_type == "conversations" && isDm == true]{
        roomName,
        roomId,
        "avatar": image.asset->url
    
}`

export default async (req, res) => {
    try {
        const sanityResponse = await client.fetch(query)


        res.status(200).send(sanityResponse)
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}