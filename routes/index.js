
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Bullpit 2.0' });
};