function SVGLineDraw() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var journeyMarkers = getElements('journey-marker')

  var svgElements = ['line-1', 'line-2', 'line-3', 'line-4'].map(function(id) {
    var svgElement = document.getElementById(id)
    return svgElement
  })

  var markerXPositions = journeyMarkers.map(function(element) {
    var markerPosition = element.getBoundingClientRect()
    var markerXPosition = markerPosition.x
    console.log(markerPosition)
    return markerXPosition
  })

  var markerYPositions = journeyMarkers.map(function(element) {
    var markerPosition = element.getBoundingClientRect()
    var markerYPosition = markerPosition.y
    console.log(markerPosition)
    return markerYPosition
  })

  svgElements.forEach(function(element, index) {
    element.style.left = markerXPositions[index] + 14
    element.style.height = markerYPositions[index + 1] - markerYPositions[index]
  })
}

window.addEventListener('DOMContentLoaded', SVGLineDraw)
window.addEventListener('resize', SVGLineDraw)
