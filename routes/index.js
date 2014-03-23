
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Bullpit 1.0' });
};