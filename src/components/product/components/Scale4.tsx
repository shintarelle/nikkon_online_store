'use client'
import React from 'react';
import  ReactImageZoom  from 'react-image-zoom';


function Scale4() {
  const props = {
    width: 200,
    height: 250,
    zoomWidth: 200,
    img: "http://localhost:3000/product1.jpeg",
    zoomPosition: "original",
  };
  return (
    <div className="image-zoom-container">
      <ReactImageZoom {...props} />
    </div>
  )
}

export default Scale4



{/* <div class="container__zoomed_image">
  <div class="container__zoomed_image_content">
    <div style="position: relative;">
      <img src="1.jpg" style="width: 400px; height: 300px;">
        <div class="js-image-zoom__zoomed-area" style="background: white; opacity: 0.4; position: absolute; width: 156.25px; height: 133.724px; top: 0px; left: 243.75px; display: none;">
        </div>
        <div class="js-image-zoom__zoomed-image" style="background-image: url(&quot;https://malaman.github.io/react-image-zoom/example/1.jpg&quot;); background-repeat: no-repeat; display: none; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-size: 1024px 682px; background-position: -624px 0px;">
        </div>
    </div>
  </div>
</div> */}
