// (function () {

	// 'use strict';
	//

	var deadLink = function(event){
		event.stopPropagation();
		alert("Not functional for this test");
	};


	var toggleNav = function(element){
		var tl = new TimelineLite();
		var icon = element.children[0];
		if (icon.classList.contains('icon-menu')) {
			icon.classList.remove('icon-menu');
			icon.classList.add('icon-close');
			tl.set('.nav-bar a', {height:"auto", opacity: 1});
			tl.staggerFrom('.nav-bar a', 0.2, {height:0, opacity: 0}, 0.1);
		} else {
			icon.classList.remove('icon-close');
			icon.classList.add('icon-menu');
			tl.staggerTo('.nav-bar a', 0.2, {height:0, opacity: 0}, -0.1);
			tl.set('.nav-bar a', {clearProps:"height, opacity"});
		}
	};



	/**
	 * always show 3 list items, toggle the visibility of the remaining
	 * @method
	 * @return {[type]}         [description]
	 */
	var showMoreTopSongs = function(element) {
		var tl = new TimelineLite();
		var listItems = document.getElementById('top-songs-list').children[0].children;
		if( element.classList.contains('showing-less') ){
			element.classList.remove('showing-less');
			element.classList.add('showing-more');
			element.innerHTML = 'See Less';
			for (var i = 0; i < listItems.length; i++) {
				if(i>=3){
					listItems[i].classList.add('grow-in');
				}
			}
			tl.set('.grow-in', {height:"auto", opacity: 1});
			tl.staggerFrom('.grow-in', 0.2, {height:0, opacity: 0}, 0.1);
		} else {
			element.classList.remove('showing-more');
			element.classList.add('showing-less');
			element.innerHTML = 'See More';
			tl.staggerTo('.grow-in', 0.2, {height:0, opacity: 0}, -0.1);
			tl.set('.grow-in', {clearProps:"height, opacity"});
			for (var j = 0; j < listItems.length; j++) {
				if(j>=3){
					listItems[j].classList.remove('grow-in');
				}
			}
		}

	};

// }());
