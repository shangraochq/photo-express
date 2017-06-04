let photos = [];

photos.push({
	name: "node.js logo",
	path: "http://nodejs.org/images/logo/nodejs-green.png"
});

exports.list = function(req, res) { 
	res.render('photos', {
    title: 'Photos',
    photos: photos 
	});
};