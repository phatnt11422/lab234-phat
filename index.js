var express = require('express');
var app = express();
var expressHBS = require('express-handlebars');

app.use('/assets',express.static(__dirname + '/assets'));
// thiet lap thu vien handlebars
app.engine('handlebars', expressHBS({
    // thiet lap  thu muc va ten cua file cha
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')



//abc
// http get
app.get('/',function(request,reponse){
    // var name = 'Nguyen Thanh Phat';
    // var Msv = 'PH11422';
    // var arr = ['Apple', 'Class','Public','Name'];

    reponse.render('home');
});
app.get('/user',function(request,reponse){
    // var name = 'Nguyen Thanh Phat';
    // var msv = 'PH11422';
    // var arr = ['Apple', 'Class','Public','Name'];


    reponse.render('user');
});
app.get('/dangnhap',function(request,reponse){
    // var name = 'Nguyen Thanh Phat';
    // var msv = 'PH11422';
    // var arr = ['Apple', 'Class','Public','Name'];

    reponse.render('dangnhap');
});
app.get('/dangky',function(request,reponse){
    // var name = 'Nguyen Thanh Phat';
    // var msv = 'PH11422';
    // var arr = ['Apple', 'Class','Public','Name'];

    reponse.render('dangky');
});
//http post
app.post('/login',function(request,reponse){

})

app.listen(process.env.PORT || '2001')