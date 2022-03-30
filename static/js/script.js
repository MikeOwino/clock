<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="https://mikeowino.com/img/emojis/technologist.png" hreflang="en-us">
  <title>Real Time</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
    <title>Javascript Clock </title>
</head>

<body>

    <div class="clock">

        <div class="hour">
            <div class="hr" id="hr"></div>
        </div>

        <div class="min">
            <div class="mn" id="mn"></div>
        </div>

        <div class="sec">
            <div class="sc" id="sc"></div>
        </div>

    </div>

</body>
</html>
<!-- partial -->
  <script  src="{{ url_for('static', filename='js/script.js') }}"></script>

</body>
</html>
