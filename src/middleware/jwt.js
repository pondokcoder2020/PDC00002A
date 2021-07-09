import JSONWebtoken from 'jsonwebtoken';
import FileReader from 'fs';

export const JWTVerificator = (req, res, next) => {
  let token = req.headers.authorization;
  if(!token && req.headers.authorization.split(' ')[0] !== 'Bearer') {
    return res.status(403).json({
      message: "No Token provide"
    });
  } else {
    var cert = fs.readFileSync('public.pem');
    FileReader.readFileSync("./src/keys/taknakal.pub", "utf8", function (fileError, Buffer) {
      if (fileError) {
        return res.status(403).json({
          message: fileError
        });
      }
      JSONWebtoken.verify(req.headers.authorization.split(' ')[1], Buffer, (err, decoded) => {
        if (err) {
          return res.status(403).send({
            message: err
          });
        }
        req.userId = decoded.id;
        next();
      });
    });
  }
};
