Name: Clifford Nelson

Tools used:

	Gulp
	- gulp-sass - compile the scss into css
	- gulp-jshint - lint / test javascript
	- jshint-stylish - display for jshint
	- gulp-autoprefixer - this automatically adds vendor prefixes to css when necessary (according to the can-i-use database)
	- gulp-group-css-media-queries - I like to write media queries in the original selector, I find it's easier to keep track,
										this tool compiles them into single queries per break point for the browser to digest
	GSAP
		to animate the open/close elements (menu/show more)
		allows for animation between 0 – auto, which is really cool
		i used this to animate in/out the menu items and the list item in a staggering effect

Editor used: Atom

Time taken:

	approximately 16 total hours over 2 sessions

Additional comments (optional):

	Run 'gulp build' from root/src directory to build the dest directory.

	I would normally setup my environment in the root folder, but I interpreted the instructions to do everything in the 'src' file. So all the environment files are in 'src' and ported files out to a 'dest' directory. This raises a concern because the src/index.html file should not be inspected, the dest/index.html should be. But the instructions only ask for the 'src' directory, meaning the inspector would need to build the 'src'. I setup a 'gulp build' task that will build the dest directory and it's files.

	As you're aware, the designs came in mobile and desktop. I've found this to be somewhat industry standard so I took my standard approach and added break points for flow where appropriate.

	I used 'display: flex' to accomplish most of the layout where I would have used something like the bootstrap columns in the past. But now I like this flex implementation better. 'auto-prefixer' was a big help with flex-box as it added all the necessary vendor prefixes.

	This is the first time I setup and used Gulp and SCSS, I've been using Grunt and LESS in previous projects. I found Gulp much easier to write and customize, I'll probably use Gulp from now on.
