import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  useEffect(() => {
    // Function to toggle menu
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    const toggleMenu = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.toggle('show-menu');
    };

    if (navToggle) {
      navToggle.addEventListener('click', toggleMenu);
    }

    if (navClose) {
      navClose.addEventListener('click', toggleMenu);
    }

    // Function to close menu on link click
    const navLinks = document.querySelectorAll('.nav__link');
    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    };

    navLinks.forEach(link => link.addEventListener('click', linkAction));

    // Function to change background header on scroll
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 100) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    // Initialize Swiper for Discover section
    const Swiper = require('swiper').default;
    new Swiper('.discover__container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 32,
      coverflowEffect: {
        rotate: 0,
      },
    });

    // Function to handle play/pause video
    const videoFile = document.getElementById('video-file');
    const videoButton = document.getElementById('video-button');
    const videoIcon = document.getElementById('video-icon');

    const playPause = () => {
      if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.remove('ri-play-line');
        videoIcon.classList.add('ri-pause-line');
      } else {
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
      }
    };

    videoButton.addEventListener('click', playPause);

    const finalVideo = () => {
      videoIcon.classList.remove('ri-pause-line');
      videoIcon.classList.add('ri-play-line');
    };

    videoFile.addEventListener('ended', finalVideo);

    // Function to show scroll up button
    const scrollUp = () => {
      const scrollUpButton = document.getElementById('scroll-up');
      if (window.scrollY >= 200) {
        scrollUpButton.classList.add('show-scroll');
      } else {
        scrollUpButton.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', scrollUp);

    // Function to highlight active section in the navigation menu
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Scroll reveal animation
    const ScrollReveal = require('scrollreveal').default;
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2800,
    });

    sr.reveal(`.home__data, .home__social-link, .home__info,
                .discover__container,
                .experience__data, .experience__overlay,
                .place__card,
                .sponsor__content,
                .footer__data, .footer__rights`, {
      origin: 'top',
      interval: 100,
    });

    sr.reveal(`.about__data, 
                .video__description,
                .subscribe__description`, {
      origin: 'left',
    });

    sr.reveal(`.about__img-overlay, 
                .video__content,
                .subscribe__form`, {
      origin: 'right',
      interval: 100,
    });
  }, []);

  return (
    <div>
      {/* Your JSX content goes here */}
    </div>
  );
};

export default App;
