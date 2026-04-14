<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
</head>
<title>new line</title>

<body>
  <h1><?php echo 'タイトルです'; ?></h1>
  <?php
  echo nl2br('test1' . "\n");
  echo nl2br('test2' . "\n");

  $num1 = 4;
  $float1 = 3.2;

  echo ++$num1;
  echo $num1--;
  $sum = $num1 + $float1;
  echo $sum;
  echo '<br>';

  $a = 2;
  $b = 4;
  echo $a **= $b . '<br>'; //16
  ?>
</body>

</html>