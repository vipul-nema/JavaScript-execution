String.prototype.mySplite = function mySplite (seperator) {
	var arr = [];
	var length = this.String;
	str = "";
	for(var i =0; i<this.length; i++){
		if(this[i]==seperator){
			arr.push(str);
			str = "";
		}else {
			str += this[i];
		}
	}
	arr.push(str);
	return arr;
}


// test