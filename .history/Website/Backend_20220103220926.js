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

            else if(data[i].jsonstring.Stra??e == nam)
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
                console.log(dat[0])
                // var heading1 = document.getElementById("heading1");
                // heading1.firstChild.nodeValue = dat[0].Titel;

                var btn = document.createElement("div");
                btn.setAttribute("id", "Test11");
                btn.className = 'container-md';
                btn.innerHTML = "CLICK ME";
                document.body.appendChild(btn);
                document.getElementById("Test11").style.width = "300px";
                document.getElementById("Test11").style.length = "300px";
                document.getElementById("Test11").src= "./Design-Ressourcen/Bilder/hand-saplings.jpg";
            
                var x = document.getElementById("Test11").firstChild;
                var txt = "";
                txt += "Titel: " + dat[0].Titel + "<br>";
                txt += "Pflanzenart: " + dat[0].Pflanzenart + "<br>";
                txt += "Email: " + dat[0].Email;
                document.getElementById("Test11").innerHTML = txt;
                
            }
         
        };
    });    
}

function addElement(){

    var btn = document.createElement("div");
    btn.setAttribute("id", "Test11");
    btn.className = 'container-md';
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
    document.getElementById("Test11").style.width = "300px";
    document.getElementById("Test11").style.length = "300px";
    document.getElementById("Test11").src= "./Design-Ressourcen/Bilder/hand-saplings.jpg";

    var x = document.getElementById("Test11").firstChild;
    var txt = "";
    txt += "Titel: " + x.nodeName + "<br>";
    txt += "Pflanze: " + x.nodeValue + "<br>";
    txt += "Email: " + x.nodeType;
    document.getElementById("Test11").innerHTML = txt;
    
}