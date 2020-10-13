var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0; var g = 0; var h = 0; var i = 0; var r = 0;

//location
var mon = ["mondstadt/amber.png","mondstadt/barbara.png", "mondstadt/bennett.png", "mondstadt/diluc.png", "mondstadt/fischl.png",
					"mondstadt/jean.png", "mondstadt/kaeya.png","mondstadt/klee.png", "mondstadt/lisa.png", "mondstadt/mona.png",
					"mondstadt/noelle.png", "mondstadt/razor.png", "mondstadt/sucrose.png", "mondstadt/venti.png"];

var liy = ["liyue-harbor/beidou.png", "liyue-harbor/Chongyun.png","liyue-harbor/Keqing.png", "liyue-harbor/ningguang.png",
			"liyue-harbor/qiqi.png", "liyue-harbor/Xiangling.png", "liyue-harbor/xiao.png", "liyue-harbor/Xingqiu.png"];

//traveler
var trav = ["traveler-boy.png", "traveler-girl.png"];

//element arrays
var ane =["traveler-boy.png", "traveler-girl.png","mondstadt/jean.png", "mondstadt/sucrose.png", "mondstadt/venti.png", "liyue-harbor/xiao.png"];
var pyr = ["mondstadt/amber.png", "mondstadt/bennett.png", "mondstadt/diluc.png", "mondstadt/klee.png", "liyue-harbor/Xiangling.png"];
var gee = ["mondstadt/noelle.png","liyue-harbor/ningguang.png"];
var ele = ["mondstadt/fischl.png","mondstadt/lisa.png","mondstadt/razor.png","liyue-harbor/beidou.png", "liyue-harbor/Keqing.png"];
var cry = ["mondstadt/kaeya.png","liyue-harbor/qiqi.png", "liyue-harbor/xiao.png"];
var hyd = ["mondstadt/barbara.png","mondstadt/mona.png","liyue-harbor/Xingqiu.png"];

//all characters
var all = ["mondstadt/amber.png","mondstadt/barbara.png", "mondstadt/bennett.png", "mondstadt/diluc.png", "mondstadt/fischl.png",
					"mondstadt/jean.png", "mondstadt/kaeya.png","mondstadt/klee.png", "mondstadt/lisa.png", "mondstadt/mona.png",
					"mondstadt/noelle.png", "mondstadt/razor.png", "mondstadt/sucrose.png", "mondstadt/venti.png", "liyue-harbor/beidou.png", "liyue-harbor/Chongyun.png","liyue-harbor/Keqing.png", "liyue-harbor/ningguang.png",
			"liyue-harbor/qiqi.png", "liyue-harbor/Xiangling.png", "liyue-harbor/xiao.png", "liyue-harbor/Xingqiu.png"];



var toAdd = document.createDocumentFragment();
var char = document.getElementById("char");
const name = document.querySelector('h4');


function traveler(){
	if(a == trav.length){a = 0;}

	char.src = trav[a];
	name.textContent = "Traveler";
	name.style.color = "#51a174";
	a++;
}

function monstadt(){
	if(b == mon.length){b = 0;}

	char.src = mon[b];
	if(b == 0){ name.textContent = "Amber"; name.style.color="#c8171d";} //pyro #c8171d
	if(b == 1){ name.textContent = "Barbara"; name.style.colo0r="#3695b4";} //hydro
	if(b == 2){ name.textContent = "Bennett"; name.style.color="#c8171d";} //pyro
	if(b == 3){ name.textContent = "Diluc";	name.style.color="#c8171d";} //pyro
	if(b == 4){ name.textContent = "Fischl"; name.style.color="#5d498f";} //electro
	if(b == 5){ name.textContent = "Jean"; name.style.color="#51a174";} //anemo
	if(b == 6){ name.textContent = "Kaeya"; name.style.color="#cef4f9";} //cryo #cef4f9
	if(b == 7){ name.textContent = "Klee"; name.style.color="#c8171d";} //pyro
	if(b == 8){ name.textContent = "Lisa"; name.style.color="#5d498f";} //electro #5d498f
	if(b == 9){ name.textContent = "Mona"; name.style.color="#3695b4";} //hydro
	if(b == 10){ name.textContent = "Noelle"; name.style.color="#dbd913";} //geo #dbd913
	if(b == 11){ name.textContent = "Razor"; name.style.color="#5d498f";} //electro
	if(b == 12){ name.textContent = "Sucrose"; name.style.color="#51a174";} //anemo
	if(b == 13){ name.textContent = "Venti"; name.style.color="#51a174";} //anemo
	b++;
}

function liyue(){
	if(c == liy.length){c = 0;}

	char.src = liy[c];
	if(c == 0){ name.textContent = "Beidou"; name.style.color="#5d498f";} // electro
	if(c == 1){ name.textContent = "Chongyun"; name.style.colo0r="#cef4f9";} //cryo
	if(c == 2){ name.textContent = "Keqing"; name.style.color="#5d498f";} //electro
	if(c == 3){ name.textContent = "Ningguang";	name.style.color="#dbd913";} //geo
	if(c == 4){ name.textContent = "Qiqi"; name.style.color="#cef4f9";}  //cryo
	if(c == 5){ name.textContent = "Xiangling"; name.style.color="#c8171d";} //pyro
	if(c == 6){ name.textContent = "Xiao"; name.style.color="#51a174";} //anemo
	if(c == 7){ name.textContent = "Xingqiu"; name.style.color="#3695b4";} //hydro #3695b4
	c++;
}

function anemo(){
	if(d == ane.length) {d = 0;}
	name.style.color="#51a174";
	char.src = ane[d];
	if(d == 0){ name.textContent = "Traveler";}
	if(d == 1){ name.textContent = "Traveler";}
	if(d == 2){ name.textContent = "Jean";} 
	if(d == 3){ name.textContent = "Sucrose";} 
	if(d == 4){ name.textContent = "Venti";}
	if(d == 5){ name.textContent = "Xiao";}
	d++;
}

function pyro(){
	if (e == pyr.length) {e = 0;}
	name.style.color="#c8171d";
	char.src = pyr[e];
	if (e == 0){ name.textContent = "Amber";}
	if (e == 1){ name.textContent = "Diluc";}
	if (e == 2){ name.textContent = "Diluc";}
	if (e == 3){ name.textContent = "Klee";}
	if (e == 4){ name.textContent = "Xiangling";}
	e++;
}

function geo(){
	if (f == gee.length) {f = 0;}
	name.style.color="#dbd913";
	char.src = gee[f];
	if(f == 0){ name.textContent = "Noelle";}
	if(f == 1){ name.textContent = "Ningguang";}
	f++;
}

function electro(){
	if (g == ele.length) {g = 0;}
	name.style.color="#5d498f";
	char.src = ele[g];
	if(g == 0){ name.textContent = "Fischl";}
	if(g == 1){ name.textContent = "Lisa";}
	if(g == 2){ name.textContent = "Razor";} 
	if(g == 3){ name.textContent = "Beidou";}
	if(g == 4){ name.textContent = "Keqing";}
	g++;
}

function cryo(){
	if (h == cry.length) {h = 0;}
	name.style.color = "#cef4f9";
	char.src = cry[h];
	if(h == 0){ name.textContent = "Kaeya";}
	if(h == 1){ name.textContent = "Qiqi";}
	if(h == 2){ name.textContent = "Xiao";}
	h++;
}

function hydro(){
	if(i == hyd.length) {i = 0;}
	name.style.color = "#3695b4";
	char.src = hyd[i];
	if(i == 0){ name.textContent = "Barbara";}
	if(i == 1){ name.textContent = "Mona";}
	if(i == 2){ name.textContent = "Xingqiu";}

	i++;
}

function random(){
	r = Math.floor(Math.random() * all.length);
	char.src = all[r];
	if(r == 0){ name.textContent = "Amber"; name.style.color="#c8171d";} //pyro #c8171d
	if(r == 1){ name.textContent = "Barbara"; name.style.colo0r="#3695b4";} //hydro
	if(r == 2){ name.textContent = "Bennett"; name.style.color="#c8171d";} //pyro
	if(r == 3){ name.textContent = "Diluc";	name.style.color="#c8171d";} //pyro
	if(r == 4){ name.textContent = "Fischl"; name.style.color="#5d498f";} //electro
	if(r == 5){ name.textContent = "Jean"; name.style.color="#51a174";} //anemo
	if(r == 6){ name.textContent = "Kaeya"; name.style.color="#cef4f9";} //cryo #cef4f9
	if(r == 7){ name.textContent = "Klee"; name.style.color="#c8171d";} //pyro
	if(r == 8){ name.textContent = "Lisa"; name.style.color="#5d498f";} //electro #5d498f
	if(r == 9){ name.textContent = "Mona"; name.style.color="#3695b4";} //hydro
	if(r == 10){ name.textContent = "Noelle"; name.style.color="#dbd913";} //geo #dbd913
	if(r == 11){ name.textContent = "Razor"; name.style.color="#5d498f";} //electro
	if(r == 12){ name.textContent = "Sucrose"; name.style.color="#51a174";} //anemo
	if(r == 13){ name.textContent = "Venti"; name.style.color="#51a174";} //anemo
	if(r == 14){ name.textContent = "Beidou"; name.style.color="#5d498f";} // electro
	if(r == 15){ name.textContent = "Chongyun"; name.style.colo0r="#cef4f9";} //cryo
	if(r == 16){ name.textContent = "Keqing"; name.style.color="#5d498f";} //electro
	if(r == 17){ name.textContent = "Ningguang";	name.style.color="#dbd913";} //geo
	if(r == 18){ name.textContent = "Qiqi"; name.style.color="#cef4f9";}  //cryo
	if(r == 19){ name.textContent = "Xiangling"; name.style.color="#c8171d";} //pyro
	if(r == 20){ name.textContent = "Xiao"; name.style.color="#51a174";} //anemo
	if(r == 21){ name.textContent = "Xingqiu"; name.style.color="#3695b4";} //hydro #3695b4
}