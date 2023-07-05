 // Fetch initial image
 fetchImage(0);

 // Fetch subsequent images every 3 seconds
 setInterval(function() {
   let activeIndex = Array.from(document.querySelectorAll('.carousel-item')).indexOf(document.querySelector('.carousel-item.active'));
   let nextIndex = (activeIndex + 1) % 3;
   fetchImage(nextIndex);
 }, 3000);

 // Fetch image from API endpoint and update carousel
 function fetchImage(index) {
   fetch('https://source.unsplash.com/random/500x500')
     .then(response => {
       if (response.ok) {
         return response.url;
       } else {
         throw new Error('Failed to fetch image');
       }
     })
     .then(imageUrl => {
       let imgElement = document.querySelector('#carouselExample .carousel-item[data-index="' + index + '"] img');
       imgElement.src = imageUrl;
     })
     .catch(error => {
       console.error(error);
     });
 }

 // Handle previous and next button clicks
 document.querySelector('.carousel-control-prev').addEventListener('click', function(e) {
   e.preventDefault();
   let activeIndex = Array.from(document.querySelectorAll('.carousel-item')).indexOf(document.querySelector('.carousel-item.active'));
   let prevIndex = (activeIndex - 1 + 3) % 3;
   fetchImage(prevIndex);
 });

 document.querySelector('.carousel-control-next').addEventListener('click', function(e) {
   e.preventDefault();
   let activeIndex = Array.from(document.querySelectorAll('.carousel-item')).indexOf(document.querySelector('.carousel-item.active'));
   let nextIndex = (activeIndex + 1) % 3;
   fetchImage(nextIndex);
 });