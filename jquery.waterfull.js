(function($, window, document, underfine){
	var Waterfull = function(dataLink){
		for(var i = 0, len = dataLink.source.length; i < len; i++){
			var newBox = $('<div></div>');
			newBox.addClass('box');
			$('#main').append(newBox);

			var newPic = $('<div></div>');
			newPic.addClass('pic');
			newBox.append(newPic);

			var newImg = $('<img>');
			newImg.attr('src', dataLink.source[i].src);
			newImg.addClass('img');
			newPic.append(newImg);
		}
	};
	var getIndex = function(boxH, minH){
		for(var i = 0; i < boxH.length; i++){
			if(boxH[i] == minH){
				return i;
			}
		}
	};
	

	/*	Waterfull.prototype = {
	 water: function(){
	 if(Waterfull.isScroll()){
	 for(var i = 0, len = datasource.data.length; i < len; i++){

	 var newBox = document.createElement('div');
	 newBox.className = 'box';
	 main.appendChild(newBox);

	 var newPic = document.createElement('div');
	 newPic.className = 'pic';
	 newBox.appendChild(newPic);

	 var newImg = document.createElement('img');
	 newImg.src = datasource.data[i].src;
	 newPic.appendChild(newImg);
	 }

	 }else{
	 for(var i = 0, len = datasource.data.length; i < len; i++){

	 var newBox = $('<div></div>');
	 newBox.addClass('box');
	 this.append(newBox);

	 var newPic = document.createElement('div');
	 newPic.className = 'pic';
	 newBox.appendChild(newPic);

	 var newImg = document.createElement('img');
	 newImg.src = datasource.data[i].src;
	 newPic.appendChild(newImg);
	 }
	 var boxKit = $('.box');
	 boxWid = boxKit[1].offsetHeight, boxLine = Math.floor(document.documentElement.clientWidth / boxWid);
	 var main = document.getElementById('main');
	 main.style.cssText = 'width:'+boxWid * boxLine+'px;margin: 0 auto;';

	 var boxH = [];
	 for(var i = 0, len = boxKit.length; i < len; i++){
	 var boxHeight = boxKit[i].outeroffsetHeight;
	 if(i < boxLine){
	 boxH.push(boxHeight);
	 }else{
	 var minH = Math.min.apply(null, boxH);
	 var minIndex = Waterfull.getIndex(boxH, minH);

	 boxKit[i].style.cssText = 'position:absolute;left:'+boxWid * minIndex+'px;top:'+minH+'px';
	 boxH[minIndex] += boxKit[i].offsetHeight;
	 }
	 }
	 }
	 }
	 };
	 Waterfull.getIndex = function(){
	 function getIndex(boxHg, minHg){
	 for(var i = 0; i < boxHg.length; i++){
	 if(boxHg[i] == minHg){
	 return i;
	 }
	 }
	 }
	 }
	 Waterfull.isScroll = function(){
	 var $box = $('.box').get(0);
	 var $main = $('#main'),
	 colums = 6,
	 dist = $('.box').length / colums,
	 maxH = $('.box').get(0).height()+dist * $('.box')[0].height();
	 var sboxT = document.documentElement.scrollTop || document.body.scrollTop;
	 var sboxC = document.documentElement.clientHeight || document.body.clientHeight;
	 if(sboxC+sboxT > maxH){
	 return true;
	 }else{
	 return false;
	 }
	 return false;
	 };
	 Waterfull.getMinBoxIndex = function(){
	 var $main = $('#main');
	 var $box = $('.box').get(0);
	 var $boxs = $('.box'), colums = Math.floor($main.offsetHeight / $box.offsetWidth), container = [];
	 for(var i = $boxs.length; i < colums; i--){
	 container.push($boxs[i].offsetHeight);
	 }
	 return Math.min(container);
	 };
	 Waterfull.getMaxBoxIndex = function(){
	 var $box = $('.box').get(0);
	 var $main = $('#main');
	 var $boxs = $('.box'), colums = Math.floor($main.height() / $box.width()), container = [];
	 for(var i = $boxs.length; i < colums; i--){
	 container.push($boxs[i].offsetHeight);
	 }
	 return Math.max(container);
	 };
	 */
	var dataLink = {
		source: [
			{'src': 'image/00.jpg'},
			{'src': 'image/01.jpg'},
			{'src': 'image/02.jpg'},
			{'src': 'image/03.jpg'},
			{'src': 'image/04.jpg'},
			{'src': 'image/05.jpg'},
			{'src': 'image/06.jpg'},
			{'src': 'image/07.jpg'},
			{'src': 'image/08.jpg'},
			{'src': 'image/23.jpg'},
			{'src': 'image/25.jpg'},
			{'src': 'image/26.jpg'},
			{'src': 'image/27.jpg'},
			{'src': 'image/28.jpg'},
			{'src': 'image/29.jpg'},
			{'src': 'image/30.jpg'},
			{'src': 'image/31.jpg'},
			{'src': 'image/32.jpg'},
			{'src': 'image/33.jpg'},
			{'src': 'image/34.jpg'},
			{'src': 'image/35.jpg'}]
	};
	var wf = new Waterfull(dataLink);
	
}(jQuery, window, document));