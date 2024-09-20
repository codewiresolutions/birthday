<script setup>
import Bparty from "./views/Bparty.vue";
import work from "./views/work.vue";
import Team from "./views/Team.vue";
import Gallery from "./views/Gallery.vue";
import consult from "./views/consult.vue";
import quality from "./views/quality.vue";
import parents from "./views/parents.vue";


  components: { Bparty,work,Gallery,consult,quality,parents }

</script>


<template>
  <!-- Container to center the toggle button -->
  <div class="navbar-toggler-container">
    <!-- Toggle button (Hamburger Icon) -->
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
      <span><i style="font-size:24px;" class="fa-solid fa-bars"></i></span>
    </button>
  </div>

  <!-- Offcanvas Sidebar -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
      <!-- Cross Icon to close the offcanvas -->
      <button type="button" class="btn-close text-reset ms-auto custom-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- List of items in the offcanvas body -->
      <ul class="offcanvas-list">
        <li><button class="offcanvas-button">Home</button></li>
        <li><button class="offcanvas-button">Landing</button></li>
        <li><button class="offcanvas-button">About</button></li>
        <li><button class="offcanvas-button">Gallery</button></li>
        <li><button class="offcanvas-button">Contact</button></li>
      </ul>
    </div>
  </div>

<bparty></bparty>
<work></work>
<Team></Team>
<gallery></gallery>
<consult></consult>
<quality></quality>
<parents></parents>
</template>

<!-- Add this CSS to style and position the navbar-toggler icon and offcanvas content -->
<style scoped>
  /* Container to center the button */
  .navbar-toggler-container {
    position:absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1050; /* Ensure it is on top of other content */
    height: 72px;
    background-color: white;
    width: 100%!important;
    text-align: center;
    
  }

  .navbar-toggler {
    border: none;
    background-color: transparent;
    font-size: 1.5rem; /* Adjust size of the icon */
    cursor: pointer;
    margin-top: 10px; /* Space from the top edge */
  }

  .navbar-toggler span i {
    font-size: 2rem; /* Size of the hamburger icon */
  }

  .btn-close {
    /* Ensure the close button is aligned to the right */
    position: absolute;
    top: 10px;
    right: 10px;
  }

  /* Offcanvas styling */
  .offcanvas {
    width: 250px; /* Set width of the offcanvas sidebar */
    background-color: #268580; /* Set background color */
  }

  .offcanvas-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top:17px;
  }

  .offcanvas-list li {
    margin:6px 0;
  }

  .offcanvas-button {
    display: block;
    width: 100%;
   
    background-color: transparent;
    border: none;
    color: white;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

  }

  .offcanvas-list li button{
    font-size:16px;
    font-family: "open sans",sans-serif;
  }


 .offcanvas-list li button:hover{
  color: lightgray;
 }

 .navbar-toggler{
  border: none;
 }

 .custom-close {
  color: white; /* Set the background color to white */
  filter: brightness(0) invert(1); /* Inverts the color to white */
  margin-top:10px!important;
  margin-right:10px!important;
  font-size:21px;

}

</style>
