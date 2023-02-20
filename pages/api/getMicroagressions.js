import { MongoClient } from 'mongodb';
import clientPromise from '../../lib/mongodb';

async function getMicroagressions() {
  const client = await clientPromise;
  const db = client.db();

  const microagressions = await db
    .collection('Microagressions')
    .find({})
    .limit(100)
    .toArray();

  console.log(microagressions);

  return microagressions;
}


export default getMicroagressions;



// export default async (req, res) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("Microagressions");

//     const microagressions = await db.collection("microagressions").find({}).limit(20).toArray();

//     res.json(microagressions);
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// };