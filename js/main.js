(function () {

var myElements = {
	welcome: 'welcome',
	main: 'home-page',
}

var init = {
	wait : function () {
        var c1 = document.getElementById(myElements.welcome);
        var ctx1 = c1.getContext('2d');

        var welcomRotate = {
            w: 250,
            h: 250,
            count: 85,
            rotation: 0,
            speed: 0.06,
            step: function () {
                welcomRotate.rotation += welcomRotate.speed;
            },
            draw: function () {
                ctx1.globalCompositeOperation = 'source-over';
                ctx1.save();
                ctx1.translate(125,125);
                ctx1.rotate(welcomRotate.rotation);
                var i = welcomRotate.count;
                    while( i-- ) {
                    ctx1.beginPath();
                    ctx1.arc(0, 0, i+(Math.random()*35), Math.random(), Math.PI/3+(Math.random()/12));
                    ctx1.stroke();
                }
                ctx1.restore();
            },
            loop: function () {
                requestAnimationFrame(welcomRotate.loop);
                ctx1.globalCompositeOperation = 'destination-out';
                ctx1.fillStyle = 'rgba(0, 0, 0, 0.03)';
                ctx1.fillRect( 0, 0, welcomRotate.w, welcomRotate.h );
                welcomRotate.step();
                welcomRotate.draw();
            }
        }
        c1.width = welcomRotate.w;
        c1.height  = welcomRotate.h;
        ctx1.strokeStyle = 'rgba(0, 0, 0, 0.75)';
        ctx1.lineWidth = 0.5;
        welcomRotate.loop();
	},
	hideWelcome : function() {
        var welcome = document.getElementById(myElements.welcome);
        var timer = setTimeout(function () {
            fadeOut(welcome, 50)
        }, 1000)
	},



}

init.wait();
init.hideWelcome();
	
}) ();
