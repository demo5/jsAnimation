
			function startAnimation(obj, json, speed,fn) {
				var flag = true; //假设所有的动画都到达设定值
				clearInterval(obj.timer);
				obj.timer = setInterval(function() {
					for(var attr in json) {
						var icur = 0;
						if(attr == 'opacity') {
							icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
						} else {
							icur = parseInt(getStyle(obj, attr));
						}
						var iSpeed = (json[attr] - icur) / 7;
						iSpeed = iSpeed < 0 ? Math.floor(iSpeed) : Math.ceil(iSpeed);
						if(icur != json[attr]) {
							flag = false;
						}else{
							flag = true;
						}
						if(attr == 'opacity') {
							obj.style[attr] = (icur + iSpeed) / 100;
						} else {
							obj.style[attr] = icur + iSpeed + 'px';
						}
					}
					if(flag) {
							clearInterval(obj.timer);
							if(fn) {
								fn();
							}
						}

				}, speed);
			}

			function getStyle(obj, attr) {
				if(obj.currentStyle) {
					return obj.currentStyle[attr]; //ie
				} else {
					return getComputedStyle(obj, false)[attr]; //firefox
				}
			}