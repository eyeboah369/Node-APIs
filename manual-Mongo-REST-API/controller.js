contact = require('./model');

exports.index = function(req, res) {
    contact.get(function(err, contact){
        if (err) {
            res.json({
                status: 'err',
                message: err
            });
        };
        res.json({
            status: 'complete',
            message: 'Contact gotten successfully',
            data: contact
        });
    });
};

exports.new = function(req, res) {
    const contactNew = new Contact();
    contactNew.name = req.body.name ? req.body.name : contactNew.name;
    contactNew.email = req.body.email;
    contactNew.phone = req.body.phone;

    contactNew.save(function(err){
        if(err) {
            res.json(err);
        }
    res.json({
        message: 'New contact created!',
        data: contactNew
    });
    });
};

exports.view = function (req, res) {
    contact.findById(req.params.contact_id, function(err, contact) {
        if(err) {
            res.send(err);
        }
        res.json({
            message: 'loading contact...',
            data: contact
        });
    });
}
