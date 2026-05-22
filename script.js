/* ============================================================
   孙梦奇｜个人成长作品集 — 交互脚本
   ============================================================ */

(function () {
  'use strict';

  // ----- 移动端导航 -----
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // 点击导航链接后关闭菜单
    var links = navLinks.querySelectorAll('.nav-link');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Intersection Observer: 滚动触发动画 -----
  var revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // 降级：直接显示所有元素
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ----- 导航栏高亮当前板块 -----
  var sections = [];
  var navLinkEls = document.querySelectorAll('.nav-link');

  navLinkEls.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var target = document.querySelector(href);
      if (target) {
        sections.push({ link: link, section: target });
      }
    }
  });

  function updateActiveNav() {
    var scrollY = window.scrollY;
    var navHeight = 60;

    var current = null;

    sections.forEach(function (item) {
      var top = item.section.offsetTop - navHeight - 20;
      if (scrollY >= top) {
        current = item.link;
      }
    });

    navLinkEls.forEach(function (link) {
      link.classList.remove('is-active');
    });

    if (current) {
      current.classList.add('is-active');
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // 初始调用
  updateActiveNav();

  // ----- 灯箱：图片/视频点击放大 -----
  var lightbox = document.getElementById('lightbox');
  var lightboxContent = document.getElementById('lightboxContent');
  var lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxContent) {

    // 给所有 stage-photos 内的图片和视频绑定点击
    document.querySelectorAll('.stage-photos img, .stage-photos video').forEach(function (media) {
      media.addEventListener('click', function (e) {
        e.stopPropagation();
        lightboxContent.innerHTML = '';
        var clone = media.cloneNode(true);
        if (clone.tagName === 'VIDEO') {
          clone.controls = true;
          clone.style.maxWidth = '92vw';
          clone.style.maxHeight = '90vh';
        }
        lightboxContent.appendChild(clone);
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    // 关闭
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxContent.innerHTML = '';
      document.body.style.overflow = '';
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    lightboxClose.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

})();
