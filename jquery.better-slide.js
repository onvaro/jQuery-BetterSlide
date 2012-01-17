/**
 * BetterSlide Plugin
 * Replaces jQuery's native SlideUp/SlideDown/SlideToggle functionality to eliminate
 * the "jump" bug.
 *
 * Version 1.0b
 * Updated 2012-01-17
 * License: MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)
 *
 *
 *
 * THIS PLUGIN IS IN BETA. PLEASE REPORT ALL BUGS TO ME AT tracy@taupecat.com. THANK YOU.
 *
 *
 *
 * This plugin is based on the work by Remy Sharp and Dan Switzer in identifying and
 * building workarounds for this bug. jQuery should fix this in core, but as of jQuery
 * 1.7.1, it still exists.
 *
 * To see what they've written on the subject, go to their websites:
 * * http://jqueryfordesigners.com/animation-jump-quick-tip/
 * * http://jqueryfordesigners.com/slidedown-animation-jump-revisited/
 * * http://blog.pengoworks.com/index.cfm/2009/4/21/Fixing-jQuerys-slideDown-effect-ie-Jumpy-Animation
 *
 * Usage:
 * $('element').betterSlide( { options } );
 *
 * BetterSlide Options
 *
 * action:      'toggle'; Slide action desired. Also accepts 'up' or 'down'
 *
 * duration:    400; time in milliseconds for animation. Also accepts 'fast'
 *              (200 milliseconds) and 'slow' (600 milliseconds)
 *
 * easing:      'swing'; Desired easing effect. Supports any easing effect you have
 *              installed, including jQuery UI effects.
 *
 * callback:    ''; Function to perform upon completion of the animation
 *
 * Alternate Usage (to more closely match native jQuery commands):
 * $('element').betterSlideUp( { options } );
 * $('element').betterSlideDown( { options } );
 * $('element').betterSlideToggle( { options } );
 *
 * The same options are recognized, except for the "action" option.
 *
 */

(function($) {
    $.fn.betterSlide = function( options ) {
        var settings = $.extend( {
            'action':   'toggle'
        }, options );

        return this.each( function() {

            if ( ( settings.action == 'up' ) || ( ( settings.action == 'toggle' ) && ( $(this).is(':visible') ) ) ) {
                $(this).betterSlideUp( options );
            } else if ( ( settings.action == 'down' ) || ( ( settings.action == 'toggle' ) && ( $(this).not(':visible') ) ) ) {
                $(this).betterSlideDown( options );
            } else {
                alert( 'Error: jQuery BetterSlide was not called correctly. Please review the documentation and try again. Thank you.' );
            }
        });
    },

    $.fn.betterSlideDown = function( options ) {
        var settings = $.extend( {
            'duration':  400,
            'easing':   'swing',
            'callback': ''
        }, options );

        return this.each( function() {
            $(this).css( 'overflow', 'visible' ).show();
            var height = $(this).outerHeight();
            $(this).hide().height(0);
            $(this).show().animate( { height: height }, settings.duration, settings.easing, function() {
                // remove height from style attribute, so that the container can grow & shrink if need be
                $(this).css( 'height', '' );

                // run any given callback
                settings.callback();
            });
        });
    },

    $.fn.betterSlideUp = function( options ) {
        var settings = $.extend( {
            'duration': 400,
            'easing':   'swing',
            'callback': ''
        }, options );

        return this.each( function() {
            // Get the element's actual height
            var elHeight = $(this).height();

            // Force the element to that height
            // (this gets us past the animate forcing to overflow: hidden issue
            $(this).height( elHeight );

            // Animate the element's height down to 0
            // make sure overflow is hidden otherwise the element's contents will remain visible during
            // the slide up
            $(this).css( 'overflow', 'hidden' ).animate( { height: 0 }, settings.duration, settings.easing, function() {
                // "officially" hide the element in question and then unset the inline CSS height declaration
                // This way the div will be able to grow or shrink if necessary
                $(this).hide().css( 'height', '' );

                // run any given callback
                settings.callback();
            });
        });
    },

    $.fn.betterSlideToggle = function( options ) {

        if ( $(this).is(':visible') ) {
            $(this).betterSlideUp( options );
        } else {
            $(this).betterSlideDown( options );
        }
    }
})(jQuery);
