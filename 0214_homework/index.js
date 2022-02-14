function updateOutput() {
  $('iframe').contents().find('html').html(`
  <html>
  <head>
  <style type="text/css">
  ${$('#cssPanel').val()}
  </style>
  </head>

  <body>
  ${$('#htmlPanel').val()}
  </body>
  </html>
  `);
  // console.log($('iframe').contents().find('paragraph'));
  // console.log(document.getElementById('paragraph').innerHTML);
}

$('#html').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#htmlPanel').removeClass('hidden');
  } else {
    $('#htmlPanel').addClass('hidden');
  }
});
$('#htmlPanel').keyup(function () {
  updateOutput();
});

$('#css').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#cssPanel').removeClass('hidden');
  } else {
    $('#cssPanel').addClass('hidden');
  }
});
$('#cssPanel').keyup(function () {
  updateOutput();
});

$('#javascript').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#javascriptPanel').removeClass('hidden');
  } else {
    $('#javascriptPanel').addClass('hidden');
  }
});
$('#javascriptPanel').keyup(function () {
  updateOutput();
});

$('#output').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#outputPanel').removeClass('hidden');
  } else {
    $('#outputPanel').addClass('hidden');
  }
});

$(document).ready(function () {
  updateOutput();
});
