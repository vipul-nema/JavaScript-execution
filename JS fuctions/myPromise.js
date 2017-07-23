	//Created by vipulnema2610@gmail.com
	function myPromise (callback){
		// Promosise registered
		// console.log("New promise registered");
		var res =  new Function();
		var rej = 	new Function();
		setTimeout(function(){
			// console.log("Prmoise function is being called...");
			callback(res, rej);
		},0001);
		
		return {
			then : then
		};

		function then(resolve, reject){
			// console.log("Promise then function is being called...");
			res = resolve;
			rej = reject;
		};
		
	}


	function myPromise (callback){
		var deferredResolve;
		var deferredReject;
		var resolveData;
		var rejectData;
		var state = "pending";
		var deferred = 0;

		function resolve(data){
			state = "resolved";
			resolveData = data;
			if(deferredResolve){
				respond(deferredResolve, data);
				
			}
			
		};

		function reject(data){
			state = "rejected";
			rejectData = data;
			if(deferredReject){
				respond(deferredReject, data);
			}
		};
	

		function respond (callback, data){
			return callback(data);
		}

		
		this.then = function(resolve, reject){
			if(state =="pending"){
					deferredResolve = resolve;
					deferredReject = reject;
			}else if (state=="resolved"){
				respond(resolve, resolveData);
				
			}else {
				respond (reject, rejectData);
			}

			return new Promise(resolve)
		}

		
		callback(resolve, reject);
		
	}

	var p1 = new myPromise(function(resolve, reject){
		setTimeout(function(){
			resolve("p1");
		},1000);
	});

	var p2 = p1.then(function(data){
			return new Promise (function(resolve, reject){
				resolve(data);
			});
	});

	p2.then(function(data){
		console.log(data)
	})
	

















		var p2 = myPromise(function(resolve, reject){
		
			setTimeout(function(){
				resolve("p2");
			},2000);
		});

		var p3 = myPromise(function(resolve, reject){
		
			setTimeout(function(){
				resolve("p3");
			},1000);
		});


		var p = myPromise.all(p1,p2,p3);

		p.then(function(data){
			debugger;
			console.log(data);
		}, function(data){
			debugger;
			console.log(data);
		});

	p1.then(function(result){
		console.log("promise resolved");
		console.log(result);
	});























myPromise.all = function(){

	var promiseObjArray  = Array.prototype.slice.call(arguments);
	var responseData = [];

	var resolveCb = new Function();
	var rejectCb = new Function();

	setTimeout(function(){
		promiseObjArray.forEach(function(promiseObj, index){
			myResolve = myResolve.bind(promiseObj);
			myReject = myReject.bind(promiseObj);

			promiseObj.then(myResolve, myReject);
		});
	},0);
	

	function then(resolve, reject){
		resolveCb = resolve;
		rejectCb = reject;
	}

	function myResolve(data){
		this.success = true;
		responseData.push(data);
		if(check()){
			resolveCb(responseData);
		}
	};

	function myReject(data){
		rejectCb(data);
	}
	
	function check (){
		return promiseObjArray.every(function(promise, index){
			return promise.success == true;
		})
	}

	return {
		then : then
	}

   
}



	







