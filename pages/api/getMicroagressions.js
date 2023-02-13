import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Microagressions");

    const microagressions = await db.collection("microagressions").find({}).limit(20).toArray();

    res.json(microagressions);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};