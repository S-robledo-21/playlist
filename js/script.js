// Complete Day 1 goals here
let songNames = ["Heat Waves", "Telepatia", "Notion"];

  let songArtist = ["Glass animals","Kali Uchis","The Rare Occasions"];

let songTime=[3.59,2.41,3.15];  

  let songlink=["https://www.youtube.com/watch?v=KT7F15T9VBI","https://www.youtube.com/watch?v=Dwzk-XZxZ4k","https://www.youtube.com/watch?v=Co7t6NxsW-4"];
  
let songImages= ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl67AfomvgpK3BDIGlpzw9I1L6AyoWg3hKA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-5plSZCc76Ku7wStRs9Bx-eC9-ukQRZ0cw&usqp=CAU","data:image/jpeg;base64,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"]

  function displaySongInfo(){
    songNames.forEach(function(songName) { $('.songs').append("<p>" + songName + "</p>"); });
  
    
    songArtist.forEach(function(songArtist) { $('.artists').append("<p>" + songArtist + "</p>"); });
  
    songTime.forEach(function(songTime) { $('.lengths').append("<p>" + songTime + "</p>"); });
  
    songlink.forEach(function(songlink) { $('.links').append ("<p>" + songlink+ "<p>" ); });
                                                             
                                                             
  
    songImages.forEach(function(songImage) { $(".images").append(`<img src="${songImage}">`); });                                                         
           
                                         
                                         
                                         
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
