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
    
function del()
{
    var jsonstring=$("#jsonstring").val();
    console.log("Del");
    $.get("https://webtechlecture.appspot.com/cloudstore/del?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&key=1640178157404",function(response)
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
    '"Email":"'+$("#Ad_email").val()+
    '"lat":"'+lat[0].lat+'",'+
    '"lng":"'+lat[0].lng+'",'+

    '"}';
    console.log("add"+ jsonstring);
    $.get("https://webtechlecture.appspot.com/cloudstore/add?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&jsonstring="+encodeURI(jsonstring),function(response)
    {
    console.log(response);
    });
}

function spec()
{
    var specvar =  
    $.get('https://webtechlecture.appspot.com/cloudstore/ ?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_&jsonstring={"Pflanzen":"Lillie"}',function(response)
    {
    console.log(response);
    });
}

function search()
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
            if (data[i].jsonstring.Pflanze == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
            }

            else if(data[i].jsonstring.Name == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
            }

            else if(data[i].jsonstring.Nachname == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
            }

            else if(data[i].jsonstring.Straße == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
            }
            else if(data[i].jsonstring.Titel == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
            }          
        };
    });     
};

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
                ||data[i].jsonstring.Titel == nam)
            {
                dat.push(data[i].jsonstring);

                for (var k = 0; k < dat.length; k++){
                console.log(dat[k].Titel)        ;
                document.getElementById("Card"+ Number(k)).removeAttribute("hidden");
                document.getElementById("Card"+ Number(k)+ "title").innerHTML = dat[k].Titel;
                document.getElementById("Card"+ Number(k)+ "subtitle").innerHTML = dat[k].Pflanzenart;
                document.getElementById("Card"+ Number(k)+ "list1").innerHTML = dat[k].Email;
                document.getElementById("Card"+ Number(k)+ "text").innerHTML = dat[k].Beschreibung;
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