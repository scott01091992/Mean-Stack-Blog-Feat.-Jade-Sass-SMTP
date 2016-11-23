var artboard = require('./../controllers/artboard.controller.js');
var comment = require('./../controllers/comment.controller.js');
var user = require('./../controllers/user.controller.js');
var reply = require('./../controllers/reply.controller.js');
var video = require('./../controllers/video.controller.js');
var quote = require('./../controllers/quote.controller.js');
var upcoming = require('./../controllers/upcoming.controller.js');
var message = require('./../controllers/message.controller.js');


module.exports = function(app){

    app.post('/register', user.create);
    app.post('/login', user.login);
    app.post('/comment', comment.create);
    app.post('/reply', reply.create);
    app.post('/dev/artboard', artboard.create);
    app.post('/dev/video', video.create);
    app.post('/dev/quote', quote.create);
    app.post('/dev/upcoming', upcoming.create);
    app.post('/dislike', comment.dislike);
    app.post('/like', comment.like);
    app.get('/artboards', artboard.index);
    app.get('/latest', artboard.latest);
    app.get('/video', video.latest);
    app.get('/videos', video.index);
    app.get('/quote', quote.latest);
    app.get('/upcoming', upcoming.latest);
    app.post('/message', message.save);

}
