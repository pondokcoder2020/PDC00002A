import JSONWebtoken from 'jsonwebtoken';
import FileReader from 'fs';
import { JWTPassphrase } from '../../settings.js';

export const JWTVerificator = (req, res, next) => {
  var privateKey = FileReader.readFileSync('./src/keys/tanaka');
  var token = JSONWebtoken.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hour expiration
    foo: 'bar'
  }, {
    key: privateKey,
    passphrase: JWTPassphrase
  }, { algorithm: 'RS256'}, );
  return res.status(200).json({
    message: token
  });
};
