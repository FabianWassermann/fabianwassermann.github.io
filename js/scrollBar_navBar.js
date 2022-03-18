window.addEventListener('DOMContentLoaded', event => {
    let Scrollbar = window.Scrollbar;

    let options = {
        'damping': 0.08,
    }

    // For newly opened link (e.g in new tab)
    const hash = window.location.hash;
    const bodyScrollBar = Scrollbar.init(document.querySelector('#scrollbar'), options);

    if (hash) {
        const target = document.getElementById(hash.substring(1));
        if (target) {
            bodyScrollBar.scrollIntoView(target, {
                offsetTop: -bodyScrollBar.containerEl.scrollTop,
            });
        }
    }

    // For opening link in the same page
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash;
        if (hash) {
            const target = document.getElementById(hash.substring(1));
            if (target) {
                bodyScrollBar.scrollIntoView(target, {
                    offsetTop: -bodyScrollBar.containerEl.scrollTop,
                });
            }
        }
    }, false);

    const hashTrigger = document.querySelectorAll('.hash-trigger');

    for (let i = 0; i < hashTrigger.length; i++) {
        hashTrigger[i].addEventListener("click", function() {
            const hash = window.location.hash;
            if (hash) {
                const target = document.getElementById(hash.substring(1));
                if (target) {
                    bodyScrollBar.scrollIntoView(target, {
                        offsetTop: -bodyScrollBar.containerEl.scrollTop,
                    });
                }
            }
        });
    }

    // Navbar shrink function
    var navbarShrink = function (e) {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        // old version without smooth-scrollbar
        // if (window.scrollY === 0) {
        //     navbarCollapsible.classList.remove('navbar-shrink')
        // } else {
        //     navbarCollapsible.classList.add('navbar-shrink')
        // }

        if (e?.offset.y === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // const navBarItems = document.querySelectorAll('.nav-link');
    // const sections = document.querySelectorAll('.page-section');

    function scrollBarScroll(e) {
        navbarShrink(e);

        // let taken = false;
        // for (let i = 0; i < sections.length; i++) {
        //     if (bodyScrollBar.isVisible(sections[i])) { 
        //         if (!navBarItems[i].classList.contains('active') && !taken) {
        //             taken = true;
        //             navBarItems[i].classList.add('active');
        //         }  
        //     } else {
        //         if (navBarItems[i].classList.contains('active'))
        //             navBarItems[i].classList.remove('active');
        //     }
        // }
    }

    

    // Shrink the navbar 
    navbarShrink({offset: {y: 0}});

    bodyScrollBar.scrollTo()
    // Shrink the navbar when page is scrolled
    // document.addEventListener('scroll', navbarShrink); // old version without smooth-scrollbar
    bodyScrollBar.addListener(scrollBarScroll);

    // not working with smooth-scrollbar
    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .resp-hide-trigger')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
