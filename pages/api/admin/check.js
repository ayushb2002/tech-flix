import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      const str = body?.string;
      const hash = body?.hash;
      const verified = await bcrypt.compare(str, hash);
      if (verified) {
        return res.status(200).send(true);
      }
      return res.status(401).send(false);
    } catch (err) {
      console.error(err);
    }
  }
}
