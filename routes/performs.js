var express = require('express');
var router = express.Router();
var performsCtrl = require('../controllers/performs');

router.get('/', performsCtrl.index);
router.get('/new', performsCtrl.new);
router.post('/', performsCtrl.create);
router.delete('/:id', performsCtrl.delete);
router.get('/:id', performsCtrl.displayEditForm);
router.put('/:id', performsCtrl.editPerform);



module.exports = router;
