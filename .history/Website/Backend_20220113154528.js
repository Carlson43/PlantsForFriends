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

function display_details()
{ 
    key=0
    var data = []
 

    $.get("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring=",function(response)
    { 
        key = response[response.length-1].jsonstring.Main
    $.get("https://webtechlecture.appspot.com/cloudstore/get?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&key="+key,function(response)
    {
      data.push(response)
      console.log(data)
      console.log(data[0].lng,data[0].lat)

    document.getElementById("Anzeigen_Name").innerHTML = data[0].Titel;
    document.getElementById("Anzeigen_Preis").innerHTML = data[0].Preis + "€";
    document.getElementById("Anzeigen_Beschreibung").innerHTML = data[0].Beschreibung;
    document.getElementById("Anzeigen_Kontakt").innerHTML = data[0].Kontaktmöglichkeit;

    anzeige_marker = L.marker([data[0].lat, data[0].lng]).addTo(detail_map);
    console.log(data[0].Titel)
    
    detail_map.setView([data[0].lat, data[0].lng],8);
    anzeige_marker.bindPopup(data[0].Titel).openPopup();   
    });
    }) 
}

function search_and_display()
{
    var nam = String($("#search_term").val())
    var dat = []
    var data = []

    for (var h = 0; h < 8; h++){
        document.getElementById("Card"+ Number(h)).setAttribute("hidden",true);
        document.getElementById("not_found").setAttribute("hidden",true)
    }


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
                dat.push(data[i]);
               

                for (var k = 0; k < dat.length; k++)
                {
                document.getElementById("Card"+ Number(k)).removeAttribute("hidden");
                document.getElementById("Card"+ Number(k)+ "title").innerHTML = dat[k].jsonstring.Titel;
                document.getElementById("Card"+ Number(k)+ "price").innerHTML = dat[k].jsonstring.Preis + "€";
                document.getElementById("Card"+ Number(k)+ "text").innerHTML = dat[k].jsonstring.Beschreibung;
                document.getElementById("Card"+ Number(k)+ "contact").innerHTML = dat[k].jsonstring.Kontaktmöglichkeit;
                document.getElementById("Card"+ Number(k)+ "key").innerHTML = dat[k].key;
                
               
                 
                }

            }


            

        };  
     
        if (dat.length == 0)
        {search_not_found()}
 

    });


}

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Kooridnaten deiner Anzeige:" + e.latlng.toString())
        .openOn(mymap);
        lat[0] = e.latlng
        console.log(lat[0].lat)
}

function marker()
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
            mark.push(data[k].jsonstring.lat, data[k].jsonstring.lng,data[k].jsonstring.Titel)
            }
        }

        for (var j = 0; j < mark.length; j++){
            marker[j] = L.marker([mark[3*j], mark[3*j+1]]).addTo(overview_map);
            marker[j].bindPopup(mark[3*j+2]).openPopup();
            overview_map.setView([51.289406, 10.008545],6);

        }
    }
    )
}

function addKey0()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card0key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });

}

function addKey1()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card1key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey2()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card2key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey3()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card3key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey4()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card4key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey5()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card5key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey6()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card6key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey7()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card7key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

function addKey8()
{
  var jsonstring=  '{"Main":"'+document.getElementById("Card8key").innerHTML+'"}';
  console.log("add"+ jsonstring);
  $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655_key_log&token=FZ0UtB0FSNllekE69ckUlP74oSo_&jsonstring="+encodeURI(jsonstring),function(response)
  {
    console.log(response);
  });
}

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

function myURL(){
            window.location.replace('details.html');
}

function alert(){
  document.getElementById("alert").removeAttribute("hidden")
}


function search_not_found(){
  var nam = String($("#search_term").val())
  document.getElementById("not_found").removeAttribute("hidden")
  document.getElementById("not_found_text").innerHTML = 'Ihre Suche zu : "'+ nam + '" hat leider keine Ergebnisse ergeben.';

}

