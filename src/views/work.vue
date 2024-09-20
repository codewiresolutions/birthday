<template>
    <div class="container-fluid work">
<div class="row">
<div  >
    <h2 class="hwork main">What We Do</h2>
</div>
</div>
<div class="row row2">
<div class="col-3">
<div class="picwork">
    <img src="/picwork.png" alt="">
</div>
<div class="workhead3">
    <h5 class="workhead2">Animator</h5>
</div>
<div><p class="workpara">
Sample text. Click to select the Text Element.
</p></div>
</div>

<div class="col-3">
<div class="picwork">
    <img src="/picwork2.png" alt="">
</div>
<div class="workhead3">
    <h5 class="workhead2">Face Painting</h5>
</div>
<div><p class="workpara">
Sample text. Click to select the Text Element.
</p></div>
</div>
<div class="col-3">
<div class="picwork">
    <img src="/picwork3.png" alt="">
</div>
<div class="workhead3">
    <h5 class="workhead2">Games
    </h5>
</div>
<div><p class="workpara">
Sample text. Click to select the Text Element.
</p></div>
</div>
<div class="col-3">
<div class="picwork">
    <img src="/picwork4.png" alt="">
</div>
<div class="workhead3">
    <h5 class="workhead2">Quest</h5>
</div>
<div><p class="workpara">
Sample text. Click to select the Text Element.
</p></div>
</div>

</div>
    </div>
</template>


<script>

</script>

<style>
.work
{
    background-image: url('/work.jpg');
    background-position: 50% 0%;
    object-fit: cover;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    height:auto;
}

.hwork{
  
    margin: 70px auto 0;
    font-weight: 700;
    margin-bottom:40px;
}

.picwork{
    object-fit: contain;
    width: 100%;
    text-align: center;
}

.workhead2 h5{
    font-weight:200!important;
    margin: 30px auto 0;
    font-family: "Montserrat", sans-serif !important;
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 30px auto 0;
    text-align: center;
}
h5.workhead2 {
    font-family: "Montserrat", sans-serif;
}

.workhead3{
    text-align: center;
    margin-top:35px;
    font-family: 'Open Sans', sans-serif;
}

.workpara{
    margin: 20px auto 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
}
.row{
    margin: auto;
}

.row2{
    padding-bottom:110px;
    padding-left:100px;
    padding-right:100px;
}
</style>