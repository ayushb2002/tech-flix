import bcrypt from "bcrypt"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const body = JSON.parse(req.body);
            const password = body?.password;
            const hash = await bcrypt.hash(password, 10);
            return res.status(200).send({hash});
        } catch (err) {
            console.error(err);
        }
    }
}