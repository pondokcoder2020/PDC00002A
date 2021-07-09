import Model from '../../../models/model_datatable.js';

const masterInventoriModel = new Model('master_inv');
export const dataMasterInventori = async (req, res) => {
  try {
    
      const { offset, limit } = req.fields;
      const data = await masterInventoriModel.select('uid, nama', offset, limit);
      res.status(200).json({ messages: data.rows });
    
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
