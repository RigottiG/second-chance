const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongId = req.headers.authorization;
    const incidents = await connection('incidents')
      .where('ong_id', ongId)
      .select('*');

    res.json(incidents);
  },
};
