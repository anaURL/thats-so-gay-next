import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Microagressions");
    const { id } = req.query;
    const { title, content } = req.body;

    const microagression = await db.collection("microagressions").updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          title: title,
          content: content,
        },
      }
    );

    res.json(microagression);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};