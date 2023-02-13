import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Microagressions");
    const { title, content } = req.body;

    const microagression = await db.collection("microagressions").insertOne({
      title,
      content,
    });

    res.json(microagression);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};