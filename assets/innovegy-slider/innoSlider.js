var obj={ind:0,
    pictures:[
{name:"undraw_businesswoman_pc12.svg", alt:""},
{name:"undraw_circles_y7s2.svg", alt:""},
{name:"undraw_designer_girl_xdmq.svg", alt:""},
{name:"undraw_in_the_office_o44c.svg", alt:""},
{name:"undraw_ninja_e52b.svg", alt:""},
{name:"undraw_videographer_nnc7.svg", alt:""},
{name:"undraw_Meditation_o89g.svg", alt:""},
{name:"undraw_work_time_lhoj.svg", alt:""},
{name:"undraw_photocopy_gj0t.svg", alt:""},
{name:"undraw_career_progress_ivdb.svg", alt:""}]}

var sizes=[[window.matchMedia("(max-width: 300px)"),1],
[window.matchMedia("(max-width: 750px)"),2],
[window.matchMedia("(max-width: 1000px)"),4]]

var div=document.querySelector(".innoSlider")

function nameAlt (){
    if(obj.ind==obj.pictures.length){
        obj.ind=0
        return [obj.pictures[0].name,obj.pictures[0].alt]
    }    
    return [obj.pictures[obj.ind].name,obj.pictures[obj.ind].alt]
}

function setPictures(){
    var setter=""
    for (let i = 0; i < Number(div.dataset.cantidad); i++) {
        var aux=nameAlt()
        setter+=`<img src="../assets/images-nosotros/${aux[0]}" class="img-responsive clients-img" alt="${aux[1]}" >`
        obj.ind++
    }
    div.innerHTML=setter
}

function setingSize(x){
    div.dataset.cantidad=x
        setPictures()
}

function windowSize() {
    var aux=sizes.filter(function(size){return size[0].matches})
    aux.length>0?setingSize(`${aux[0][1]}`):setingSize("5")
  }

windowSize() // Call listener function at run time

sizes.map(size=>size[0].addListener(windowSize))