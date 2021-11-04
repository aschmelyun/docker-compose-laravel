<script>
import { Bar } from 'vue-chartjs'
import Chart from 'chart.js'

/*eslint-disable */
Chart.elements.Rectangle.prototype.draw = function () {
  let ctx = this._chart.ctx
  let viewVar = this._view
  let left, right, top, bottom, signX, signY, borderSkipped, radius
  let borderWidth = viewVar.borderWidth
  let cornerRadius = 20
  if (!viewVar.horizontal) {
    left = viewVar.x - viewVar.width / 2
    right = viewVar.x + viewVar.width / 2
    top = viewVar.y
    bottom = viewVar.base
    signX = 1
    signY = top > bottom ? 1 : -1
    borderSkipped = viewVar.borderSkipped || 'bottom'
  } else {
    left = viewVar.base
    right = viewVar.x
    top = viewVar.y - viewVar.height / 2
    bottom = viewVar.y + viewVar.height / 2
    signX = right > left ? 1 : -1
    signY = 1
    borderSkipped = viewVar.borderSkipped || 'left'
  }

  if (borderWidth) {
    let barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
    borderWidth = borderWidth > barSize ? barSize : borderWidth
    let halfStroke = borderWidth / 2
    let borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
    let borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
    let borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
    let borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
    if (borderLeft !== borderRight) {
      top = borderTop
      bottom = borderBottom
    }
    if (borderTop !== borderBottom) {
      left = borderLeft
      right = borderRight
    }
  }

  ctx.beginPath()
  ctx.fillStyle = viewVar.backgroundColor
  ctx.strokeStyle = viewVar.borderColor
  ctx.lineWidth = borderWidth
  let corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom]
  ]

  let borders = ['bottom', 'left', 'top', 'right']
  let startCorner = borders.indexOf(borderSkipped, 0)
  if (startCorner === -1) {
    startCorner = 0
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4]
  }

  let corner = cornerAt(0)
  ctx.moveTo(corner[0], corner[1])

  for (let i = 1; i < 4; i++) {
    corner = cornerAt(i)
    let nextCornerId = i + 1
    if (nextCornerId == 4) {
      nextCornerId = 0
    }

    let nextCorner = cornerAt(nextCornerId)

    let width = corners[2][0] - corners[1][0],
      height = corners[0][1] - corners[1][1],
      x = corners[1][0],
      y = corners[1][1]

    let radius = cornerRadius

    if (radius > height / 2) {
      radius = height / 2
    }
    if (radius > width / 2) {
      radius = width / 2
    }

    if (!viewVar.horizontal) {
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
    } else {
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x, y)
    }
  }

  ctx.fill()
  if (borderWidth) {
    ctx.stroke()
  }
}
/* eslint-enable */

export default {
  extends: Bar,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
