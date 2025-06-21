const fadeIn = id => {
      const el = document.getElementById(id);
      new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
          } else {
            el.classList.remove('opacity-100', 'translate-y-0');
            el.classList.add('opacity-0', 'translate-y-8');
          }
        });
      }, { threshold: 0.4 }).observe(el);
    };

    fadeIn('typesHeading');
    fadeIn('typesPara');
    fadeIn('advertisingMethodsHeading');
    fadeIn('advertisingMethodsPara');

    const aboutWrapper = document.getElementById('aboutWrapper');
    const aboutText = document.getElementById('aboutText');
    const obs2 = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          aboutWrapper.classList.add('is-visible');
          aboutText.classList.remove('opacity-0', 'translate-x-full');
          aboutText.classList.add('opacity-100', 'translate-x-0');
        } else {
          aboutWrapper.classList.remove('is-visible');
          aboutText.classList.remove('opacity-100', 'translate-x-0');
          aboutText.classList.add('opacity-0', 'translate-x-full');
        }
      });
    }, { threshold: 0.4 });
    obs2.observe(aboutWrapper);

    ['scrollImage2','scrollText2'].forEach(id => {
      const el = document.getElementById(id);
      new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            el.classList.remove('opacity-0', id.includes('Image') ? 'translate-x-full' : '-translate-x-full');
            el.classList.add('opacity-100', 'translate-x-0');
          } else {
            el.classList.remove('opacity-100', 'translate-x-0');
            el.classList.add('opacity-0', id.includes('Image') ? 'translate-x-full' : '-translate-x-full');
          }
        });
      }, { threshold: 0.5 }).observe(el);
    });

    const advertisingText = document.getElementById('advertisingText');
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          advertisingText.classList.add('advertising-slide');
        } else {
          advertisingText.classList.remove('advertising-slide');
        }
      });
    }, { threshold: 0.5 }).observe(advertisingText);
    
  // Heading animation
  document.addEventListener("DOMContentLoaded", function () {
    const levo = document.querySelector(".levo");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          levo.classList.add("show");
          observer.unobserve(levo);
        }
      },
      { threshold: 0.3 }
    );
    if (levo) observer.observe(levo);
  });

  // Table/Image animation
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  const elements = document.querySelectorAll('.table-container, .image-container');
  elements.forEach(el => observer.observe(el));
new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: "slide",
  });
  const gallerySwiperClasses = [
  'gallery-swiper-1',
  'gallery-swiper-2',
  'gallery-swiper-3',
  'gallery-swiper-4',
  'gallery-swiper-5',
  'gallery-swiper-6',
  'gallery-swiper-7',
  'gallery-swiper-8',
  'gallery-swiper-9',
  'gallery-swiper-10',
  'gallery-swiper-11',
  'gallery-swiper-12',
  'gallery-swiper-13',
  'gallery-swiper-14',
  'gallery-swiper-15'
  
];



gallerySwiperClasses.forEach(className => {
  new Swiper(`.${className}`, {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: `.${className} .swiper-pagination`,
      clickable: true,
    },
  });
});

