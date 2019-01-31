var fnName='disenosInnovegy'
var docId="1XxLe1FFTt0fM3zxC_ch9g8YKI5PEbyCJ6gYqKrB7qus"

function disenosInnovegy(data){
    var inner1=""
    var inner2=""
    data.feed.entry.map(
        function(linea,index){
            inner1+=`<div class="mbr-gallery-item mbr-gallery-item--p1" data-video-url="false" data-tags="Increíble"><div href="#lb-gallery1-49" data-slide-to="${index}" data-toggle="modal" class="gal"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"><span class="icon-focus"></span></div><div><a class="display-5" href="${linea.gsx$pageurl.$t}" target="_blank">${linea.gsx$titulo.$t}</a></div></div>`
            
            inner2+=`<div class="carousel-item ${index>0?"":"active"}"><img src="${linea.gsx$imgurl.$t}" alt="${linea.gsx$imgalt.$t}" title="${linea.gsx$titulo.$t}"></div>`
                    
        })
        document.getElementById('showPics').innerHTML=inner1
        document.getElementById("bigPics").innerHTML=inner2
}

$.ajax({
    url:`https://spreadsheets.google.com/feeds/list/${docId}/3/public/values?alt=json-in-script&callback=${fnName}`,
    dataType:"jsonp",
    jsonpCallback:`${fnName}`
})