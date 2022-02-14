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
}

$('#html').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#htmlPanel').removeClass('hidden');
  } else {
    $('#htmlPanel').addClass('hidden');
  }
});
$('#htmlPanel').focusout(function () {
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
$('#cssPanel').focusout(function () {
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
$('#javascriptPanel').focusout(function () {
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

updateOutput();
