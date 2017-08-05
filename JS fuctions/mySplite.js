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


// <<<<<<<<<<<< Start reduce function 
function reduce(coll, memo, iteratee, callback) {
    // to be implemented
    callback = callback || function (){};
    coll = coll || [];
    if(typeof iteratee!=="function"){
        return;
    }
    var index = 0;

    coll.forEach(function(element) {
            iteratee(memo, element, resolve);
    }, this);
    
    function resolve(err, data){
        if(err){
            callback(err);
        }else{
            memo = data;
            index++;
            if(coll.length == index){
                callback(null,memo);
            }
        }
    }
}

reduce( [1,2,3], 0, function(memo, item, callback) {
    callback(null, memo + item);
    
}, function(err, result) {
    console.log(err, result)
    // result is now equal to the last value of memo, which is 6
});
//************** End of renduce code
