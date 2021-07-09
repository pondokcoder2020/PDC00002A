import bcrypt from "bcryptjs";
import Model from "../../models/pegawai/model_pegawai_login.js";
import FileReader from "fs";
import JSONWebtoken from "jsonwebtoken";
import {JWTPassphrase} from "../../settings.js";

const pegawaiModelLogin = new Model('pegawai');

export const pegawaiManager = async (req, res) => {
  try {

    const { request, email, password } = req.fields
    if(request === "login") {
      const data = await pegawaiModelLogin.select('uid, email, nama, password, jabatan, unit', email)
      const comparation = bcrypt.compareSync(password, data.rows[0].password)
      if(comparation) {
        var privateKey = FileReader.readFileSync('./src/keys/tanaka');
        const token = JSONWebtoken.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hour expiration
          uid: data.rows[0].uid,
          nama: data.rows[0].nama,
          password: data.rows[0].password,
          email: data.rows[0].email
        }, {
          key: privateKey,
          passphrase: JWTPassphrase
        }, { algorithm: 'RS256'});
        res.status(200).json({
          result: 1,
          message: "Berhasil Login",
          token: token,
        })
      } else {
        res.status(403).json({
          result: 0,
          message: "Gagal Login"
        })
      }
    } else {
      res.status(404).json({
        result: 0,
        message: "Unknown Request"
      })
    }
  } catch (err) {
    res.status(200).json({ messages: err.stack })
  }
};
