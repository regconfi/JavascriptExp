var Block = function(position) {
    // positon 是 [0, 0] 格式
    var p = position
    var image = imageFromPath('./image/block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        lifes: p[2] || 1,
    }
    o.kill = function() {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.upDownCollide = function(b) {
        return o.alive && (upDownRectIntersects(o, b) || upDownRectIntersects(b, o))
    }
    o.leftRightCollide = function(b) {
        return o.alive && (leftRightRectIntersects(o, b) || leftRightRectIntersects(b, o))
    }
    o.collide = function(b) {
        // log('block', o.alive, b)
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}