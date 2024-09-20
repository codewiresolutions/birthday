<template>
  <div class="row3">
    <div class="gallery">
      <h2 class="main">Our Gallery</h2>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/6e0c819d05715066815ff268/excited-kids-releasing-balloons-party_23-2147897597.jpeg"
            class="gallery-img img-fluid"
            alt="Boat on Calm Water"
          />
        </div>
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/acc161c1fe315c0a9625860c/crop-woman-putting-napkin-girl_23-2147783721.jpeg"
            class="gallery-img"
            alt="Wintry Mountain Landscape"
          />
        </div>
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/d4d6db7c76605ee6896bf1df/children-celebrating-birthday.jpg"
            class="gallery-img"
            alt="Mountains in the Clouds"
          />
        </div>
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/47ac0bcd0a96500284b91508/1701344_medium2000.png"
            class="gallery-img"
            alt="Boat on Calm Water"
          />
        </div>
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/7f9710e1ece658cb989a1f77/children-colored-caps-playing_23-2147807858.jpeg"
            class="gallery-img"
            alt="Waves at Sea"
          />
        </div>
        <div class="image-wrapper">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/ce44e13b52ee5eec9d8826e4/2050938_medium2000.jpg"
            class="gallery-img"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div style="text-align: center">
        Images from
        <a
          style="color: #f1c50e !important; text-decoration: none"
          href="https://freepik.com"
          class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-3-base u-btn-1"
        >
          Freepik
        </a>
      </div>

      <div style="margin: 36px auto 60px; text-align: center">
        <button class="btn">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: 'ImageGallery'
}
</script>
  
  <style scoped>
/* Ensures body uses full viewport height and centers content */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

/* Gallery container styling */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem; /* Adjusts spacing between columns */
}

/* Column styling */
.col-lg-4,
.col-md-12 {
  padding: 0.5rem;
  box-sizing: border-box;
}

/* Image wrapper to handle clipping */
.image-wrapper {
  overflow: hidden; /* Hides overflow of the zoomed image */
  position: relative; /* Ensures that child positioning is relative to this wrapper */
  height: 350px;
  width: 350px;
  margin-bottom: 45px;
}

/* Gallery image styling */
.gallery-img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block; /* Ensures images are treated as block elements */
  width: 100%;
  height: 100%;
  border-radius: 0.25rem; /* Rounded corners */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12); /* Shadow effect */
}

/* Zoom effect on hover */
.gallery-img:hover {
  transform: scale(1.1); /* Zoom in by 10% */
  z-index: 1; /* Ensures zoomed image is on top of other elements */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds shadow for better visual effect */
}

.gallery {
  margin: 88px 79px 0;
  margin-bottom: 40px;
}

.btn {
  background-color: #f1c50e;
  width: 200px;
  height: 60px;
  border-radius: 35px;
}

.btn:hover {
  color: white;
  background-color: black;
}
</style>
  