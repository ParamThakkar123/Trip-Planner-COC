import React from 'react';

const VisualTravelGuide = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Travel guide" />
        <meta name="keywords" content="speech-language, multi-modal, LLM, LLaVA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Visual travel Guide</title>
        <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet" />
        <link rel="stylesheet" href="./static/css/bulma.min.css" />
        <link rel="stylesheet" href="./static/css/bulma-carousel.min.css" />
        <link rel="stylesheet" href="./static/css/bulma-slider.min.css" />
        <link rel="stylesheet" href="./static/css/fontawesome.all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
        <link rel="stylesheet" href="./static/css/index.css" />
        <link rel="icon" href="./static/images/favicon.svg" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script defer src="./static/js/fontawesome.all.min.js"></script>
        <script src="./static/js/bulma-carousel.min.js"></script>
        <script src="./static/js/bulma-slider.min.js"></script>
        <script src="./static/js/index.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
      </head>
      <body>
        <iframe src="https://travelmapper.net" style={{ width: '100%', height: '100%', border: 0, position: 'absolute', marginBottom: '10px' }}></iframe>
      </body>
    </html>
  );
}

export default VisualTravelGuide;
