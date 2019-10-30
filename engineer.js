var Constance = {		//将所有常量封装至一个对象中
	STEP:10,
	BULLET_STEP:40,
	ENEMIES_STEP:8,
	UPVALUE:38,
	DOWNVALUE:40,
	LEFTVALUE:37,
	RIGHTVALUE:39,
	MAX_UP:720,
	MAX_DOWN:10,
	MAX_LEFT:10,
	MAX_RIGHT:400,
	PLANE_WIDEH:74,
	PLANE_HEIGHT:130,
	SCREEM_HEIGHT:822,
	ENEMY_HEIGHT:66,
	ENEMY_WIDTH:90,
	ENEMY_APPEAR:500,
}

var goingup = false;
var goingdown = false;
var goingleft = false;
var goingright = false;

var timer = 0;
var myid = "myplane";  //避免某一天改变id,让全部代码的id进行更改。自变量最好封装起来

function $(id){			//获取dom对象
	return document.getElementById(id);
}

function getY(object){		//封装转化，用于计算
	return object.style.bottom.replace("px","")-0;
}

function getX(object){
	return object.style.left.replace("px","")-0;
}

function setY(object,planebo){		//封装赋值
	object.style.bottom = planebo + "px";
}

function setX(object,planeleft){
	object.style.left = planeleft + "px";
}
