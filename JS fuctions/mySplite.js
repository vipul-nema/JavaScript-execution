String.prototype.mySplite = function mySplite (seperator) {
	var arr = [];
	var length = this.String;
	str = "";
	for(var i =0; i<this.length; i++){
		if(this[i]==seperator){
			arr.push(str);
			str = "";
		}else {
			,mh,hs
			str += this[i];
		}
	}
	arr.push(str);
	return arr;
}

<<<<<<< HEAD
console.log("aaa");
=======




// Array.forEach copy custom 
Array.prototype.myForEach = function(callback, reference){
	var length = this.length;

	for(var i =0 ; i<length ; i++){
		callback.call(reference, this[i], i, this);
	}
}

var arr = [1,2,545,2232,35,5];

function iterate(value, index, array){
	console.log(arguments);
};
arr.myForEach(iterate);

>>>>>>> fce396909813d133ae9e7a88d9948b10584831b9
