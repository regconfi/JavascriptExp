var Paddle = function() {
    var image = imageFromPath('./image/paddle.png')
    var o = {
        image: image,
        x: 100,
        y: 250,
        speed: 15,
    }
    var paddle = o
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function() {
        o.move(paddle.x + paddle.speed)
    }
    o.upDownCollide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            //log('相撞')
            return true
        }
        return false
    }
    o.leftRightCollide = function(ball) {
        if (ball.x > o.x && ball.x < o.x + o.image.width) {
            //log('相撞')
            return true
        }
        return false
    }
    o.collide = function(ball) {
        if (o.UpDowncollide(ball) && o.LeftRightcollide(ball)) {
            //log('相撞')
            return true
        }
        return false
    }
    return o
}