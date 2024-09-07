<template>
<div class="container mt-5">
    <div class="row">
      <!-- Hero Section (Left Column) -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4">Location Collector</h1>
        <p class="lead">Easily Collect, Save, and Visualize Your Locations
        <br>

With our app, you can quickly collect and save your locations as you move around.
 Once saved, view them on an interactive map and get instant directions to any location with just a click. 
<br>This easy-to-use tool turns your location data into helpful insights with minimal effort.

</p>
        <a class="d-none" href="" target="_blank">
          <img src="/play.png" alt="Download on Play Store" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
        <h2>Download Location <b>Collector</b></h2>
<a href="/location_collector_eureka.apk" target="_blank" download onclick="showFallback('collector')">
  <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;" />
</a>
<p id="fallback-collector" class="fallback-message" style="display: none;">
  If the download doesn't start, <a href="/location_collector_eureka.apk" target="_blank">click here</a> to download Location Collector.
</p>

<h2>Download Location <b>Viewer</b></h2>
<a href="/location_viewer_eureka.apk" target="_blank" download onclick="showFallback('viewer')">
  <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;" />
</a>
<p id="fallback-viewer" class="fallback-message" style="display: none;">
  If the download doesn't start, <a href="/location_viewer_eureka.apk" target="_blank">click here</a> to download Location Viewer.
</p>

      </div>

      <!-- Screenshots Section (Right Column) -->
      
      
    </div>
  </div>

</template>


<style scoped>
/* Optional: Add custom styles here */
.hero-section {
  text-align: left;
}

.screenshot {
  max-width: 100%;
  height: auto;

}

.screenshot-t {
    margin-top: 50px;
}
.screenshot-b {
    margin-top: -50px;
}
.phone-mockup {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px; /* Adjust based on the phone mockup size */
}

.phone-image {
  width: 100%;
  height: auto;
}

.screenshots {
  position: relative;
}

.screenshot-w{
  height: auto;
  width: 80%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

.screenshot {
  height: auto;
  width: 25%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

@media (max-width: 767px) {
  .screenshot {
  height: auto;
  width: 200px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
  }
  .screenshot-t {
    margin-top: 20px;
}
.screenshot-b {
    margin-top: 20px;
}
}
</style>
