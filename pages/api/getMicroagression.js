import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Microagressions");
    const { id } = req.query;

    const microagression = await db.collection("microagressions").findOne({
      _id: ObjectId(id),
    });

    res.json(microagression);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};