const Item = require('../models/itemModel');

module.exports = {
    getAll: function(req, res, next) {
        Item.findAll({where: {active: true}}).then(items => {
            res.send(items);
        }).catch(err => {
            res.send({error: err.name});
            console.warn(err);
        });
    },
    getSingle: function (req, res, next) {
        Item.findById(req.params.id).then(item => {
            res.send(item);
        }).catch(err => {
            res.send({error: err.name});
            console.warn(err);
        });
    },
    addNew: function (req, res, next) {
        if (req.body) {
            Item.create({
                price: req.body.price,
                path_url: req.body.path_url,
                brand_name: req.body.brand_name,
                item_name: req.body.item_name,
                item_image: req.body.item_image,
                expire_at: req.body.expire_at
            }).then(item => {
                res.send(item);
            }).catch(err => {
                res.send({error: err.name});
                console.warn(err);
            });
        } else {
            res.send({error: 'MissingParameters'});
            console.warn('MissingParameters');
        }
    }
};