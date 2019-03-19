function SVGLineDraw() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var journeyMarkers = getElements('journey-marker')

  var svgElements = ['line-1'].map(function(id) {
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
    var margin = 48
    var cPathValues = ' c0 50 0 40 100 40 '
    var mPathValues = 'M' + (markerXPositions[index] - margin) + ' 0'
    var vPathValues =
      'v' + (markerYPositions[index + 1] - markerYPositions[index] - 60)
    var hPathValues = 'h ' + (markerXPositions[index + 1] - 92 - margin)
    var drawPath = mPathValues + vPathValues + cPathValues + hPathValues
    element.setAttribute('d', drawPath)
  })
}

window.addEventListener('DOMContentLoaded', SVGLineDraw)
window.addEventListener('resize', SVGLineDraw)
