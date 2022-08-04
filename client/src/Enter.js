import React from 'react'

function Enter() {
  $(".icon").addClass("pre-enter");
  setTimeout(function () {
    $(".icon").addClass("on-enter");
  }, 500);
  setTimeout(function () {
    $(".icon").removeClass("pre-enter on-enter");
    $(".icon > div").addClass("hover");
  }, 3000);
  return (
    <div>
        
      
    </div>
  )
}

export default Enter