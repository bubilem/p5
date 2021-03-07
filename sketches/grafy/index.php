<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Graf</title>
  <script src="../../p5/p5.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css" />

</head>

<body>
  <?php
  $data = json_decode(file_get_contents("data.json"), true);
  $caption = "Počet lidí v městech";
  ?>
  <script>
    var caption = "<?php echo $caption; ?>";
    var data = <?php echo json_encode($data); ?>;
  </script>
  <script src="sketch.js"></script>
  <script src="chart.js"></script>
  <script src="bar.js"></script>
</body>

</html>