function showCar(color) {
  document.getElementById('car-gray').style.display = 'none'
  document.getElementById('car-blue').style.display = 'none'
  document.getElementById('car-white').style.display = 'none'
  document.getElementById('car-black').style.display = 'none'
  document.getElementById('car-red').style.display = 'none'
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-' + color).style.display = 'block'
}

showCar("recom")


function border(color){
  document.getElementById('btn-recom').style.borderColor='transparent'
  document.getElementById('btn-gray').style.borderColor='transparent'
  document.getElementById('btn-blue').style.borderColor='transparent'
  document.getElementById('btn-red').style.borderColor='transparent'
  document.getElementById('btn-black').style.borderColor='transparent'
  document.getElementById('btn-white').style.borderColor='transparent'
  document.getElementById('btn-' + color).style.borderColor= 'orange'

}
border("recom")



 



/*function showGray() {
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-blue').style.display = 'none'
  document.getElementById('car-white').style.display = 'none'
  document.getElementById('car-black').style.display = 'none'
  document.getElementById('car-red').style.display = 'none'
  document.getElementById('car-gray').style.display = 'block'
}

function showBlue() {
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-gray').style.display = 'none'
  document.getElementById('car-white').style.display = 'none'
  document.getElementById('car-black').style.display = 'none'
  document.getElementById('car-red').style.display = 'none'
  document.getElementById('car-blue').style.display = 'block'
}

function showRed() {
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-gray').style.display = 'none'
  document.getElementById('car-white').style.display = 'none'
  document.getElementById('car-black').style.display = 'none'
  document.getElementById('car-blue').style.display = 'none'
  document.getElementById('car-red').style.display = 'block'
}

function showBlack() {
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-gray').style.display = 'none'
  document.getElementById('car-white').style.display = 'none'
  document.getElementById('car-red').style.display = 'none'
  document.getElementById('car-blue').style.display = 'none'
  document.getElementById('car-black').style.display = 'block'
}

function showWhite() {
  document.getElementById('car-recom').style.display = 'none'
  document.getElementById('car-gray').style.display = 'none'
  document.getElementById('car-black').style.display = 'none'
  document.getElementById('car-red').style.display = 'none'
  document.getElementById('car-blue').style.display = 'none'
  document.getElementById('car-white').style.display = 'block'
}*/


