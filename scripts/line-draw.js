function SVGLineDraw() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  //var svgElements = getElements('svg')
  var journeyMarkers = getElements('journey-marker')
  var panels = getElements('panel')

  var svgElements = ['line-1', 'line-2', 'line-3'].map(function(id) {
    var svgElement = document.getElementById(id)
    return svgElement
  })

  console.log(svgElements)

  var panelHeights = panels.map(function(element) {
    var panelHeight = element.clientHeight
    return panelHeight
  })
  console.log('panel heights', panelHeights)

  var markerXPositions = journeyMarkers.map(function(element) {
    var markerPosition = element.getBoundingClientRect()
    var markerXPosition = markerPosition.x
    return markerXPosition
  })
  console.log(markerXPositions)

  var markerYPositions = journeyMarkers.map(function(element) {
    var markerPosition = element.getBoundingClientRect()
    var markerYPosition = markerPosition.y
    return markerYPosition
  })

  svgElements.forEach(function(element, index, arr) {
    if (element.classList.contains('odd')) {
      var margin = 48
      var cPathValues = ' c0 50 0 40 100 40 '
      var mPathValues = 'M' + (markerXPositions[index] - margin) + ' 0 '
      var vPathValues = 'v' + (panelHeights[index] - 60)

      var hPathValues =
        index === arr.length - 1
          ? ''
          : 'h' +
            (markerXPositions[index + 1] -
              markerXPositions[index] -
              margin * 2 -
              30)

      var c2PathValues = index === arr.length - 1 ? '' : ' c50 0 0 60 40 40 '

      var drawPath =
        mPathValues + vPathValues + cPathValues + hPathValues + c2PathValues

      element.setAttribute('d', drawPath)
    } else {
      var margin = 48
      var cPathValues = ' c0 50 0 40 -100 40 '
      var mPathValues = 'M' + (markerXPositions[index] - margin) + ' 0 '
      var vPathValues = 'v' + (panelHeights[index] - 60)

      var hPathValues =
        index === arr.length - 1
          ? ''
          : 'h' +
            (markerXPositions[index + 1] -
              markerXPositions[index] -
              margin * 2 -
              30)

      var c2PathValues = index === arr.length - 1 ? '' : ' c50 0 0 60 40 40 '

      var drawPath =
        mPathValues + vPathValues + cPathValues + hPathValues + c2PathValues

      element.setAttribute('d', drawPath)
    }
  })
}

window.addEventListener('DOMContentLoaded', SVGLineDraw)
window.addEventListener('resize', SVGLineDraw)
