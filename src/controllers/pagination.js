const model = require('../models/producto');

function getAllProducts(req, res, next) {
  const perPage = 20;
  const page = req.params.page || 1;

  model
    .find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec()
    .then((products) => {
      model.countDocuments()
        .then((count) => {
          const totalPages = Math.ceil(count / perPage);

          res.json({
            products,
            current: page,
            totalPages
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  getAllProducts
};