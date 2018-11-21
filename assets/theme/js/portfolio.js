
var fnName1='disenosInnovegy'
var fnName2="trabajosInnovegy"
var docId="1XxLe1FFTt0fM3zxC_ch9g8YKI5PEbyCJ6gYqKrB7qus"
var inner1=""
var inner2=""
var indice=0
function disenosInnovegy(data){
    data.feed.entry.map(
        function(linea){
            inner1+=`<div class="mbr-gallery-item mbr-gallery-item--p1" data-video-url="false" data-tags="Increíble"><div href="#lb-gallery1-49" data-slide-to="${indice}" data-toggle="modal" class="gal"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"><span class="icon-focus"></span></div><div><a class="display-5" href="${linea.gsx$pageurl.$t}" target="_blank">${linea.gsx$titulo.$t}</a></div></div>`

            inner2+=`<div class="carousel-item ${indice>0?"":"active"}"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"></div>`
            indice+=1
        })
    document.getElementById('showPics').innerHTML=inner1
    document.getElementById("bigPics").innerHTML=inner2
}
function trabajosInnovegy(data){
    data.feed.entry.map(
        function(linea){
            inner1+=`<div class="mbr-gallery-item mbr-gallery-item--p1" data-video-url="false" data-tags="Increíble"><div href="#lb-gallery1-49" data-slide-to="${indice}" data-toggle="modal" class="gal"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"><span class="icon-focus"></span></div><div><a class="display-5" href="${linea.gsx$pageurl.$t}" target="_blank">${linea.gsx$titulo.$t}</a></div></div>`

            inner2+=`<div class="carousel-item ${indice>0?"":"active"}"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"></div>`
            indice+=1
        })
        $.ajax({
            url:`https://spreadsheets.google.com/feeds/list/${docId}/1/public/values?alt=json-in-script&callback=${fnName1}`,
            dataType:"jsonp",
            jsonpCallback:`${fnName1}`
        })  
}

$.ajax({
    url:`https://spreadsheets.google.com/feeds/list/${docId}/2/public/values?alt=json-in-script&callback=${fnName2}`,
    dataType:"jsonp",
    jsonpCallback:`${fnName2}`
})
