var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path   
    return img
}

var upDownRectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        return true
    }
    return false
}

var leftRightRectIntersects = function(a, b) {
    var o = a
    if (b.x > o.x && b.x < o.x + o.image.width) {
        return true
    }
    return false
}

var rectIntersects = function(a, b) {
    if (UpDownrectIntersects(a, b) && LeftRightrectIntersects(a, b)) {
        return true
    }
    return false
}