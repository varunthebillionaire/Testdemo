//step 01 :create XHR object/constructor
var req=new XMLHttpRequest();
//step 02:open a connection 
req.open('GET','https://restcountries.com/v2/all',true);
//step 03:initiate a connection
req.send();
//step 04:once the data loaded from the server succeffully
req.onload=function(){
    //here we are converting 
var result=JSON.parse(req.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        try{
            var name=result[i].name;
            var latlon=result[i].latlng;
            if(latlon.length === 0) throw new Error("invalid coordinates for the country");
               
            
            weatherdata(name,...latlon);
        }catch(e){
            console.log("invalid country"+name+e.message);
        }
     
    //    console.log(`${name}:${latlon}`);
    }
}

function weatherdata(name,lat,lang){
    //lat->33
    //long->65
// console.log(`${name}:${lat}:${lang}`);
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=b6ccb5ec692c5ad80b29c5c862060b8d&units=matric`;
var req=new XMLHttpRequest();
req.open('GET',url,true);
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(`${name}:${data.main.temp}`);
}

}