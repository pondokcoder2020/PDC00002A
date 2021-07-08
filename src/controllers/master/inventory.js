import Model from '../../models/model.js';

const masterInventoriModel = new Model('master_inv');
export const dataMasterInventori = async (req, res) => {
  try {
    const data = await masterInventoriModel.select('uid, kode_barang, nama');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
