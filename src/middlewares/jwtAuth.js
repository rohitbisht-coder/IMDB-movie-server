import jwt from "jsonwebtoken";

export const auth = async (req, res) => {
  const { jwtToken , name } = req.body;
  jwt.verify(jwtToken, "rfiwugjwij2938g3929fj92jr3939fwol", (err, data) => {
    if (err) {
      res.status(400).send("unauthorized! login to continue!");
    } else {
   res.status(200).json({user:data.user , userName:name})
    }
  });
};
