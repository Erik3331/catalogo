function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("open");
    document.querySelector(".menu-icon").classList.toggle("open");
    }

    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.menu-icon');
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove('open');
            menuIcon.classList.remove('open');
        }
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.menu-icon');
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            menuIcon.classList.remove('open');
        }
    });
