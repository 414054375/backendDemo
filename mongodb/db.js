var mongoose = require('mongoose');
var url = 'mongodb://localhost/bbs';//db名
var Schema = mongoose.Schema;
var mySchema = new Schema({
  title:  String,
  body:   String,
});




module.exports.db = mongoose;
module.exports.insert = function(data){
	mongoose.connect(url ,
		(err)=>{
			if (err){
				console.log("连接失败");
			}else{
				console.log("连接成功");
				
				var MyModel = mongoose.model('article', mySchema); //article是集合名字
				var doc1 = new MyModel(data);
				console.log(doc1.title);
				doc1.save(function (err,doc) {
		        //{ __v: 0, size: 'small', _id: 5970daba61162662b45a24a1 }
		          console.log(doc);
		        })
			}
	});;
}