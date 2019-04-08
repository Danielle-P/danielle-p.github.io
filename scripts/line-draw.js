function createQueue(duration) {
  // list of { id: 0, triggerAnimation: function, hasCompleted: true }
  var animationList = []

  function triggerNextAnimation() {
    // loop over list until one returns true
    animationList.some(function(animationObj) {
      if (animationObj.hasCompleted) {
        return false
      } else {
        animationObj.triggerAnimation()

        function whenComplete() {
          animationObj.hasCompleted = true
          triggerNextAnimation()
        }

        setTimeout(whenComplete, duration)

        return true
      }
    })
  }

  return function(id, triggerAnimation) {
    if (
      animationList.some(function(animationObj) {
        return animationObj.id === id
      })
    ) {
      // do nothing
    } else {
      animationList.push({id, triggerAnimation, hasCompleted: false})
      triggerNextAnimation()
    }
  }
}

////////////////////////

var addAnimation = createQueue(5000)

function SVGLineDraw() {
  function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
  }

  var panels = getElements('panel')
  var journeyMarkers = getElements('journey-marker')

  var panelHeights = panels.map(element => {
    var panelHeight = element.clientHeight
    return panelHeight
  })

  var svgElements = ['line-1', 'line-2', 'line-3'].map(id => {
    return document.getElementById(id)
  })

  var markerXPositions = journeyMarkers.map(function(element) {
    return element.getBoundingClientRect().x
  })

  var markerYPositions = journeyMarkers.map(function(element) {
    return element.getBoundingClientRect().y
  })

  svgElements.forEach(function(element, index, arr) {
    if (element.classList.contains('odd')) {
      var margin = 48
      var cPathValues = index === arr.length - 1 ? '' : ' c0 50 0 40 100 40 '
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
      var cPathValues = index === arr.length - 1 ? '' : ' c0 50 0 40 -100 40 '
      var mPathValues = 'M' + (markerXPositions[index] - margin) + ' 0 '
      var vPathValues = 'v' + (panelHeights[index] - 60)

      var hPathValues =
        index === arr.length - 1
          ? ''
          : 'h' +
            (markerXPositions[index + 1] -
              markerXPositions[index] +
              margin * 2 +
              30)

      var c2PathValues = index === arr.length - 1 ? '' : ' c-50 0 0 60 -50 60 '

      var drawPath =
        mPathValues + vPathValues + cPathValues + hPathValues + c2PathValues

      element.setAttribute('d', drawPath)
    }

    var pathLength = element.getTotalLength()

    Object.assign(element.style, {
      strokeDashoffset: pathLength,
      strokeDasharray: pathLength,
    })

    if (window.pageYOffset > markerYPositions[index]) {
      addAnimation(index, function() {
        element.classList.add('draw')
      })
    }
  })
}

window.addEventListener('DOMContentLoaded', SVGLineDraw)
window.addEventListener('resize', SVGLineDraw)
window.addEventListener('scroll', SVGLineDraw)
