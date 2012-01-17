BetterSlide Plugin
Replaces jQuery's native SlideUp/SlideDown/SlideToggle functionality to eliminate
the "jump" bug.

Version 1.0b
Updated 2012-01-17
License: MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)



THIS PLUGIN IS IN BETA. PLEASE REPORT ALL BUGS TO ME AT tracy@taupecat.com. THANK YOU.



This plugin is based on the work by Remy Sharp and Dan Switzer in identifying and
building workarounds for this bug. jQuery should fix this in core, but as of jQuery
1.7.1, it still exists.

Usage:
$('element').betterSlide( { options } );

BetterSlide Options

action:     'toggle'; Slide action desired. Also accepts 'up' or 'down'

duration:   400; time in milliseconds for animation. Also accepts 'fast'
            (200 milliseconds) and 'slow' (600 milliseconds)

easing:     'swing'; Desired easing effect. Supports any easing effect you have
            installed, including jQuery UI effects.

callback:   ''; Function to perform upon completion of the animation

Alternate Usage (to more closely match native jQuery commands):
$('element').betterSlideUp( { options } );
$('element').betterSlideDown( { options } );
$('element').betterSlideToggle( { options } );

The same options are recognized, except for the "action" option.
