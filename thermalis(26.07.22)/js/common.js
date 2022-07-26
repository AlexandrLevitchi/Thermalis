var $ = jQuery.noConflict();

window.addEventListener( "load", function () {
    r1_preloader();
    r1_transfer_mobile_links();
    r1_menu_equal_width();
    r1_toggle_languages();
    r1_toggle_search();
    r1_menu();
    r1_popup();
    r1_mobile_menu();
    r1_account_mobile_menu();
    r1_carousel();
    r1_change_count();
    r1_animations();
    r1_product_tabs();
    r1_manage_rating();
    r1_lost_password();
    r1_select2();
    r1_checkout();
    r1_show_gift_field();
    product_check();
});

$(window).resize( function () {

});

$(window).on( 'orientationchange', function () {

});

/**
 * Hide preloader after small delay for smooth page loading.
 *
 * @since    1.0.0
 */
function r1_preloader() {
    setTimeout(function(){
        $('.r1-preloader').addClass('hidden');
    }, 400);
}

/**
 * Transfer menu links into mobile menu
 *
 * @since    1.0.0
 */
function r1_transfer_mobile_links() {
    if ( $(window).width() < 768 ) {
        let links = $('.r1-header__links').children();

        links.each(function(i, el) {
            if ( $(el).hasClass('search-trigger') || $(el).hasClass('languages') ) {
                $(el).appendTo('.r1-header__menu .mobile-links');
            }
        });
    }
}

/**
 * Centering menu in flexible container.
 *
 * @since    1.0.0
 */
function r1_menu_equal_width() {
    if ( $(window).width() > 1365 ) {
        let minWidht = 0;

        $('.r1-header > *:not(.r1-header__logotype):not(.r1-header__mobile-overlay)').each(function(i, el) {
            minWidht = $(el).width() > minWidht ? $(el).width() : minWidht;
        });

        $('.r1-header > *:not(.r1-header__logotype):not(.r1-header__mobile-overlay)').css('min-width', minWidht + 'px');
    }
}

/**
 * Toggle language bar.
 *
 * @since    1.0.0
 */
function r1_toggle_languages() {
    if ( $(window).width() > 767 ) {
        $('.languages__curent').on('click', function() {
            let this_is = $(this);

            this_is.next().toggleClass('active');
        });

        // Close languages list on any area click
        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('languages') ){
                $('.link-item.languages ul').removeClass('active');
            }
        });
    }
}

/**
 * Toggle search bar.
 *
 * @since    1.0.0
 */
function r1_toggle_search() {
    if ( $(window).width() > 767 ) {
        $('.search-trigger > a').on('click', function() {
            let this_is = $(this);

            this_is.parent().toggleClass('active');
        });

        // Close languages list on any area click
        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('search-trigger') ){
                $('.search-trigger').removeClass('active');
            }
        });
    }
}

/**
 * Toggle menu.
 *
 * @since    1.0.0
 */
function r1_menu() {
    $('.menu-item.has-sub-menu > a').on('click', function(e) {

        let this_is = $(this);
        let parent = this_is.parent();

        if ( ! parent.hasClass('active') ) {
            e.preventDefault();

            // Open sub menu
            parent.addClass('active');
            this_is.next().addClass('active');

            if ( $(window).width() < 1366 ) {
                this_is.next().slideDown();
            }

            // Close other submenus on current level
            siblings = parent.siblings();

            siblings.not(parent).removeClass('active');
            siblings.not(parent).find('.sub-menu').removeClass('active');
            siblings.not(parent).find('.menu-item').removeClass('active');

            if ( $(window).width() < 1366 ) {
                siblings.not(parent).find('.sub-menu').slideUp();
            }
        }

    });

    // Close sub-menu on any area click
    if ( $(window).width() > 1365 ) {

        $('html').click(function(e) {
            if( !$(e.target).parents().hasClass('r1-header__menu') ){
                $('.sub-menu').removeClass('active');
                $('.menu-item.has-sub-menu').removeClass('active');
            }
        });

    }
}

/**
 * Popup scripts.
 *
 * @since    1.0.0
 */
function r1_popup() {
    let wrapper = $('.r1-popup-wrapper');

    // Open popup
    $('.r1-popup-trigger').on('click', function(e) {
        e.preventDefault();

        let this_is = $(this);
        let popup = this_is.data('popup');

        wrapper.addClass('active');
        wrapper.find('.r1-popup[data-popup="' + popup + '"]').addClass('active');

        $('body').addClass('r1-disable-scroll');

    });

    // Close popup
    $('.r1-popup__close, .r1-popup-overlay').on('click', function() {

        wrapper.removeClass('active');
        wrapper.find('.r1-popup').removeClass('active');

        $('body').removeClass('r1-disable-scroll');

    })
}

/**
* Script that animate things on scroll. 
*
* @since    1.0.0
*/
function r1_mobile_menu() {

    let menu = $('.r1-header__menu');
    let overlay = $('.r1-header__mobile-overlay');

    // Open mobile menu
    $('.mobile-menu-trigger').on('click', function() {

        let this_is = $(this);

        this_is.addClass('active');
        menu.addClass('active');
        overlay.addClass('active');
        $('body').addClass('r1-disable-scroll');

    });

    // Close mobile menu
    overlay.on('click', function() {

        $('.mobile-menu-trigger').removeClass('active');
        menu.removeClass('active');
        overlay.removeClass('active');
        $('body').removeClass('r1-disable-scroll');

        // Close all submenus
        $('.sub-menu').slideUp('active');
        $('.menu-item.has-sub-menu').removeClass('active');

    });

}

function r1_account_mobile_menu() {

    let menu = $('.r1-account__menu');
    let overlay = $('.r1-account__mobile-overlay');

    // Open mobile menu
    $('.mobile-account-menu-trigger').on('click', function() {

        let this_is = $(this);

        this_is.addClass('active');
        menu.addClass('active');
        overlay.addClass('active');
        $('body').addClass('r1-disable-scroll');

    });

    // Close mobile menu
    overlay.on('click', function() {

        $('.mobile-account-menu-trigger').removeClass('active');
        menu.removeClass('active');
        overlay.removeClass('active');
        $('body').removeClass('r1-disable-scroll');

    });

}


// Wish List check all
function product_check () {
    let checked = $('.wl-checkbox');
    
    
    $('.global-cb').on('click', function() {
        if (checked.prop('checked') === true) {
            checked.removeAttr('checked')
        } else {
        checked.attr('checked', 'checked')
        }
    })

}


/**
* Init slick slider on product page
*
* @since    1.0.0
*/
function r1_carousel() {

    let slider = $('.image-carousel');

    if ( slider.length > 0 ) {
        let productSlider = slider.slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        let paginationAll = $('.custom-pagination .all');
        let paginationCurrent = $('.custom-pagination .current');

        paginationAll.text(productSlider[0].childElementCount);

        productSlider.on('afterChange', function( slick, current ) {
            paginationCurrent.text( current.currentSlide + 1 );
        });
    }

}

/**
* Change product count
*
* @since    1.0.0
*/
function r1_change_count() {
    let quantityInput = $('#qty');

    if ( quantityInput.length > 0 ) {
        let minus = quantityInput.prev();
        let plus = quantityInput.next();

        minus.on('click', function() {
            let value = quantityInput.val();
            if ( value > 1 ){
                value --;
                quantityInput.val( value );
            }
        });

        plus.on('click', function() {
            let value = quantityInput.val();
            value ++;
            quantityInput.val( value );
        });
    }
}

/**
 * Script that animate things on scroll. 
 *
 * @since    1.0.0
 */
function r1_animations() {
    setTimeout( function() {
        $('.r1-animation').each(function(i, el) {

            let animatedObj = $(el);

            animatedObj.waypoint({
                handler: function(direction) {

                    // Reveal section.
                    animatedObj.addClass('animated');

                    // Do not repeat again.
                    this.destroy();

                },
                offset: '80%'
            });
        });
    }, 100);
}

/**
 * Script that switch product description tabs. 
 *
 * @since    1.0.0
 */
function r1_product_tabs() {

    let tabLink = $('.product-tabs__list li');

    if ( tabLink.length > 0 ) {

        tabLink.on('click', function() {
            let this_is = $(this);
            let tab = this_is.data('tab');

            if ( ! this_is.hasClass('active') ) {
                // Manage links
                tabLink.removeClass('active');
                this_is.addClass('active');

                // Manage content
                $('.product-tabs__content').hide();
                $('.product-tabs__content[data-tab="' + tab + '"]').show();
            }

            $('.r1-animation').addClass('animated');
        })
    }

}

/**
 * Script that managing product rating. 
 *
 * @since    1.0.0
 */
function r1_manage_rating() {
    let rating = $('.stars-rating');

    if ( rating.length > 0 ) {

        rating.find('svg').on('click', function() {
            let this_is = $(this);
            let count = this_is.prevAll().length + 1;
            let ratingClass = 'stars-' + count;
            let parent = rating.closest('.stars');
            let select = $('#review-rating');

            parent.removeClass(function (index, className) {
                return (className.match (/(^|\s)stars-\S+/g) || []).join(' ');
            });
            parent.addClass(ratingClass);
            select.val(count);
        });

    }
}

/**
 * Trigger lost password popup. 
 *
 * @since    1.0.0
 */
function r1_lost_password() {
    let lostLink = $('#lost-password');

    if ( lostLink.length > 0 ) {
        
    }
}

/**
 * Init select2 script.
 *
 * @since    1.0.0
 */
function r1_select2() {
    let selectList = $('.select2');

    if ( selectList.length > 0 ){
        selectList.select2();
    }
}

/**
 * Manage checkout page steps.
 *
 * @since    1.0.0
 */
function r1_checkout() {

    if ( $('body').hasClass('checkout') ) {

        $('.r1-animation').addClass('animated');

        $('.form-buttons .r1-button').on('click', function() {

            let this_is = $(this);
            let stepContainer = this_is.closest('.r1-section-checkout__step');
            let currentContent = stepContainer.find('.r1-section-checkout__step__content');
            let nextStep = stepContainer.next();
            let prevStep = stepContainer.prev();

            if ( this_is.hasClass('submit') ) {
                return;
            }

            r1_checkout_handler( this_is.hasClass('continue'), stepContainer, currentContent, nextStep, prevStep );

        });

        $('.r1-section-checkout__step__header').on('click', function() {

            let this_is = $(this);
            let stepContainer = this_is.parent();

            if ( stepContainer.hasClass('completed') ) {

                let allNext = stepContainer.nextAll();

                allNext.removeClass('active completed').find('.r1-section-checkout__step__content').slideUp(300);

                stepContainer.addClass('active').removeClass('completed');
                stepContainer.find('.r1-section-checkout__step__content').slideDown(300);

                $('html, body').animate({ scrollTop: stepContainer.offset().top }, 600 );

            }

        });

    }

}

/**
 * Checkout page steps change handler.
 *
 * @since    1.0.0
 */
function r1_checkout_handler( next = true, stepContainer, currentContent, nextStep, prevStep ) {
    let step = next ? nextStep : prevStep;
    let timeout = next ? 350 : 0;

    stepContainer.removeClass('active')
    currentContent.slideUp(300);

    if ( next ) {
        stepContainer.addClass('completed');
        step.addClass('active');
    } else {
        step.addClass('active').removeClass('completed');
    }

    step.find('.r1-section-checkout__step__content').slideDown(300);

    setTimeout(function(){
        $('html, body').animate({ scrollTop: step.offset().top }, 600 );
    }, timeout);
}

/**
 * Checkout page toggle gift input fields.
 *
 * @since    1.0.0
 */
function r1_show_gift_field() {
    let checkbox = $( '#gift' );

    if ( checkbox.length > 0 ) {
        checkbox.on('click', function() {
            checkbox.parent().nextAll().toggleClass('type-hidden');
        });
    }
}

