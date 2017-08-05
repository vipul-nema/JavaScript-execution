function parallel(tasks, callback) {
    // to be implemented
    var results = {};
    
    tasks.forEach(function(task,index) {
       var cb = resolve.bind(null,index);
       task(cb);
    });

    function resolve(index, err, data){
        if(err){
            callback(err);
        }else{
            results[index] = data;
            var resultLength = Object.keys( results).length;
            if(resultLength ==tasks.length){
                sendOutput(resultLength);
            }
        }
    }
    
    function sendOutput (resultLength){
        var output = [];
        for(var i = 0; i<resultLength; i++ ){
            output.push(results[i]);
        }
        callback(null, output);
    }
}



var parallel = function (arr, callback) {
    callback = callback || function () {};
    if (!arr.length) {
        return callback();
    }
    var index = 0;
    var results = [];
    arr.forEach(function (fn) {
        fn(function (err, result) {
            if (err) {
                callback(err);
                        callback = function () {};
            } else {
                index++;
                results.push(result);
                if (index >= arr.length) {
                    callback(null, results);
                }
            }
        });
    });
};
 

parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function(err, results) {
    console.log("all done", results)
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});