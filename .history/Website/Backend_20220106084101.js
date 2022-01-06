function add()
{
    var jsonstring=  '{"Pflanze":"'+$("#jsonstring").val()+'"}';
    console.log("add"+ jsonstring);
    $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&jsonstring="+encodeURI(jsonstring),function(response)
    {
    console.log(response);
    });
}

function listAllData()
{
    var jsonstring=$("#jsonstring").val();
    console.log("Hi!");
    $.get("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_",function(response)
    {
    console.log(response);
    });
}

function addAll()
{
    var jsonstring=  
    
    '{"Titel":"'+$("#Ad_heading").val()+'",'+
    '"Pflanzenart":"'+$("#Ad_species").val()+'",'+
    '"Beschreibung":"'+$("#Ad_description").val()+'",'+
    '"Email":"'+$("#Ad_email").val()+'",'+
    '"lat":"'+lat[0].lat+'",'+
    '"lng":"'+lat[0].lng+

    '"}';
    console.log("add"+ jsonstring);
    $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&jsonstring="+encodeURI(jsonstring),function(response)
    {
    console.log(response);
    });
}

function search_and_display()
{
    var nam = String($("#search_term").val())
    var dat = []
    var data = []
    $.get("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_",function(response)
    { 
        for (var i = 0; i < response.length; i++)
        data.push(response[i]);

        for (var i = 0; i < data.length; i++)
        {
            if (data[i].jsonstring.Pflanzenart == nam
                ||data[i].jsonstring.Email == nam
                ||data[i].jsonstring.Beschreibung == nam
                ||data[i].jsonstring.Pflanzeart == nam
                ||data[i].jsonstring.Titel == nam)
            {
                dat.push(data[i].jsonstring);

                for (var k = 0; k < dat.length; k++){
                console.log(dat[k].Konaktmöglichkeit)        ;
                document.getElementById("Card"+ Number(k)).removeAttribute("hidden");
                document.getElementById("Card"+ Number(k)+ "title").innerHTML = dat[k].Titel;
                document.getElementById("Card"+ Number(k)+ "price").innerHTML = dat[k].Preis + "€";
                document.getElementById("Card"+ Number(k)+ "text").innerHTML = dat[k].Beschreibung;
                document.getElementById("Card"+ Number(k)+ "contact").innerHTML = dat[k].Konaktmöglichkeit;
                }
                
            }
            
        };  
     


    });


    
}

function addElement(){ 
}

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Kooridnaten deiner Anzeige:" + e.latlng.toString())
        .openOn(mymap);
        lat[0] = e.latlng
        console.log(lat[0].lat)
}

function Marker()
{
    data = []
    mark = []
    marker = []

    $.get("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_",function(response)
    {
        for (var i = 0; i < response.length; i++)
        {
        data.push(response[i])
        }
        
        
        for(var k = 0; k< data.length;k++)
        {
            if ("lat" in data[k].jsonstring)
            {
            mark.push(data[k].jsonstring.lat, data[k].jsonstring.lng,data[k].jsonstring.Pflanzenart)
            console.log(mark)
            }
        }

        for (var j = 0; j < mark.length; j++){
            marker[j] = L.marker([mark[3*j], mark[3*j+1]]).addTo(overview_map);
            marker[j].bindPopup(mark[3*j+2]).openPopup();
            console.log(mark[3*j+2])
        }


    }
)}
