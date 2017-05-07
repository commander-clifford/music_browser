/**
 * toggle the nav bar visibility
 * can be used with any number of menu items
 * loops through menu items and sets height 0
 * then animates height auto, staggering between items.
 * toggle menu vs close icons in the original element
 */
var toggleNav = function(element){
	var animate = new TimelineLite();
	var icon = element.children[0];
	if (icon.classList.contains('icon-menu')) {
		icon.classList.remove('icon-menu');
		icon.classList.add('icon-close');
		animate.set('.nav-bar a', {height:"auto", opacity: 1});
		animate.staggerFrom('.nav-bar a', 0.2, {height:0, opacity: 0}, 0.1);
	} else {
		icon.classList.remove('icon-close');
		icon.classList.add('icon-menu');
		animate.staggerTo('.nav-bar a', 0.2, {height:0, opacity: 0}, -0.1);
		animate.set('.nav-bar a', {clearProps:"height, opacity"});
	}
};

/**
 * always show 3 list items,
 * toggle the visibility of the remaining items
 * dynamic to work with any number of items above 3.
 * toggle button text
 */
var showMoreTopSongs = function(element) {
	var animate = new TimelineLite();
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
		animate.set('.grow-in', {height:"auto", opacity: 1});
		animate.staggerFrom('.grow-in', 0.2, {height:0, opacity: 0}, 0.1);
	} else {
		element.classList.remove('showing-more');
		element.classList.add('showing-less');
		element.innerHTML = 'See More';
		animate.staggerTo('.grow-in', 0.2, {height:0, opacity: 0}, -0.1);
		animate.set('.grow-in', {clearProps:"height, opacity"});
		for (var j = 0; j < listItems.length; j++) {
			if(j>=3){
				listItems[j].classList.remove('grow-in');
			}
		}
	}

};
