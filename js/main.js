'use strict'; //vh

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
}); //theme

var root = $('html');
var themeChanger = $('#theme-changer');
var theme = localStorage.getItem('theme');

if (theme) {
  root.attr('data-theme', theme);

  if (theme === 'light') {
    themeChanger.prop('checked', false);
  }

  if (theme === 'dark') {
    themeChanger.prop('checked', true);
  }
} else {
  root.attr('data-theme', 'light');
}

themeChanger.change(function () {
  if ($(this).prop('checked')) {
    root.attr('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.attr('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
var dropToggle = $('[data-toggle="dropdown"]');
var navCloser = $('.navbar-closer');
var page = $('.page');
var toggleNavbarApi = $('[data-toggle="navbar-api"]');
var toggleNavbar = $('[data-toggle="navbar"]'); // var dropDownItem = $('.dropdown-item');

$(document).ready(function () {
  dropToggle.click(function (e) {
    if ($(this).hasClass('drop-select')) {
      var selected = $(this).find('.drop-selected');
      var selectItem = $(this).parent().find('.dropdown-item');
      selectItem.click(function () {
        selected.text($(this).text());
        dropToggle.not(this).removeClass('active');
        dropToggle.not(this).closest('.dropdown').removeClass('active');
      });
    }

    e.preventDefault();
    dropToggle.not(this).removeClass('active');
    dropToggle.not(this).closest('.dropdown').removeClass('active');
    $(this).toggleClass('active');
    $(this).closest('.dropdown').toggleClass('active');
  });
  $(document).mouseup(function (e) {
    if (!dropToggle.is(e.target) && dropToggle.has(e.target).length === 0 && !$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) {
      dropToggle.removeClass('active');
      $('.dropdown').removeClass('active');
    }
  });
  navCloser.click(function () {
    $(this).toggleClass('open');
    page.toggleClass('navbar-open');
    $('.navbar').toggleClass('open');
  });
  $('.progress-show-all').click(function () {
    $('.progress').toggleClass('show-all');
  });
  $('.alert-close').click(function () {
    $('.alert').remove();
  });
  setTimeout(function () {
    $('.alert').remove();
  }, 5000);
  var procentSecond = 80;
  setInterval(function () {
    if (procentSecond !== 101) {
      $('.progress__line--2').css('width', procentSecond + '%');
      $('[data-procent="progress-2"]').text("".concat(procentSecond++, "%"));
    } else {
      clearInterval();
      $('.progress').addClass('ready-2');
    }
  }, 1000);
  var procent = 75;
  setInterval(function () {
    if (procent !== 101) {
      $('.progress__line--1').css('width', procent + '%');
      $('[data-procent="progress-1"]').text("".concat(procent++, "%"));
    } else {
      clearInterval();
      $('.progress').addClass('ready-1');
    }
  }, 1500);
  setInterval(function () {
    $('.progress.ready-1.ready-2').remove();
  }, 3000);
  $('.aside-link-selected').click(function () {
    $(this).toggleClass('open-list');
  });
  $('.change-data__aside-link').click(function () {
    if (!$(this).hasClass('aside-link-selected')) {
      $('.aside-link-selected').text($(this).text());
      $('.aside-link-selected').removeClass('open-list');
    }
  });
  $('[data-toggle="donwload"]').click(function () {
    $('[data-toggle="donwload"]').removeClass('active');
    var thisTarget = $(this).attr('data-target');
    $(this).addClass('active');
    $('.download').attr('data-active', thisTarget);
  });
  toggleNavbarApi.click(function (e) {
    e.preventDefault();
    toggleNavbarApi.removeClass('active');
    $('.download__api-content').removeClass('active');
    var thisTarget = $(this).attr('data-target');
    $(this).addClass('active');
    $('[id="' + thisTarget + '"]').addClass('active');
  });
  toggleNavbar.click(function (e) {
    e.preventDefault();
    toggleNavbar.removeClass('active');
    $(this).addClass('active');
    var thisTarget = $(this).attr('data-target');
    $('.change-data__content').attr('data-active', thisTarget);
  });
  $('[data-download-type]').click(function () {
    $('[data-download-type]').removeClass('active');
    var thisType = $(this).attr('data-download-type');

    if (thisType === 'linear') {
      $('.download__year ').addClass('hide');
      $('.download__by').addClass('hide');
      $('.download__files').addClass('hide');
      $('.download__file').removeClass('hide');
      $(this).addClass('active');
    } else {
      $('.download__year ').removeClass('hide');
      $('.download__by').removeClass('hide');
      $('.download__files').removeClass('hide');
      $('.download__file').addClass('hide');
      $(this).addClass('active');
    }
  });
  var downloadTypeTable = $('.download__right-item--table').find('.download__right-type');
  var downloadTypeLinear = $('.download__right-item--linear').find('.download__right-type');
  $('.download__instruction-type').find('.download-type').click(function () {
    $('.download__instruction-type').find('.download-type').removeClass('active');
    $(this).addClass('active');
  });
  downloadTypeTable.click(function () {
    downloadTypeTable.removeClass('active');
    $(this).addClass('active');
  });
  downloadTypeLinear.click(function () {
    downloadTypeLinear.removeClass('active');
    $(this).addClass('active');
  }); // data-toggle="navbar-integration"
  //                                     data-target="integration-phone

  $('[data-toggle="navbar-integration"]').click(function (e) {
    e.preventDefault();
    $('[data-toggle="navbar-integration"]').removeClass('active');
    $('.integration__items').removeClass('active');
    $(this).addClass('active');
    var thisTarget = $(this).attr('data-target');
    $('[id="' + thisTarget + '"]').addClass('active');
    $('.integration__navbar-selected').removeClass('active');
    $('.integration__navbar-selected').find('span').text($(this).text());
    $('.integration__navbar-list').removeClass('open-list');
  });
  $('.integration__navbar-selected').click(function () {
    $(this).toggleClass('active');
    $('.integration__navbar-list').toggleClass('open-list');
  });
  $('#download-all').change(function () {
    if ($(this).prop('checked', true)) {
      $('.download__files').addClass('all');
      $('.download__year ').addClass('hide');
      $('.download__files-actions').removeClass('hide');
    }
  });
  $('#download-by-month').change(function () {
    if ($(this).prop('checked', true)) {
      $('.download__files').removeClass('all');
      $('.download__year ').removeClass('hide');
      $('.download__files-actions').addClass('hide');
    }
  });
  $('.download__files-all').click(function () {
    $(this).remove();
  });
  $('.download__file').click(function () {
    $('.download__file').addClass('active');
    $('.download__file-item').addClass('hide');
  });
  $('.file-reload').click(function () {
    var downloaded = $(this).closest('.downloaded');
    downloaded.css('background-image', 'none');
    downloaded.removeClass('downloaded');
  });
  $('.remove-all').click(function () {
    var downloaded = $('.downloaded');
    downloaded.css('background-image', 'none');
    downloaded.removeClass('downloaded');
  });
});
var datepickerFirst = new Datepicker('#datepickerone');
var datepickerSecond = new Datepicker('#datepickertwo'); // var datepicker = new Datepicker('#datepickerone', {
// 	inline: true
//   });