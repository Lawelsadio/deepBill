const Facture = require('../models/facture.model')

exports.createFacture = (req, res) => {
    let userId = req.body.userId
    let name = req.body.name
    let image = req.file.path
    console.log(name, image,userId)
    const facture = new Facture({
        userId: userId,
        name: name,
        image: image
    })
    facture.save((err, facture) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Created facture successfully",
            facture
        })
    })

}


exports.getOneFacture = (req, res, next) => {
  Facture.findOne({
    _id: req.params.id
  }).then(
    (facture) => {
      res.status(200).json(facture);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyFacture = (req, res, next) => {
  const facture = new Facture({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Facture.updateOne({_id: req.params.id}, facture).then(
    () => {
      res.status(201).json({
        message: 'Facture updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteFacture = (req, res, next) => {
    Facture.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllFacture = (req, res, next) => {
    Facture.find().then(
    (factures) => {
      res.status(200).json(factures);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
