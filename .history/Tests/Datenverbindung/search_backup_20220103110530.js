
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
            if (data[i].jsonstring.Pflanzenart == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
                var heading1 = document.getElementById("heading1");
                heading1.firstChild.nodeValue = dat[0].Titel;
            }

            else if(data[i].jsonstring.Email == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
                var heading1 = document.getElementById("heading1");
                heading1.firstChild.nodeValue = dat[0].Titel;
            }

            else if(data[i].jsonstring.Titel == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
                var heading1 = document.getElementById("heading1");
                heading1.firstChild.nodeValue = dat[0].Titel;
            }

            else if(data[i].jsonstring.Beschreibung == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
                var heading1 = document.getElementById("heading1");
                heading1.firstChild.nodeValue = dat[0].Titel;
            }
            else if(data[i].jsonstring.Titel == nam)
            {
                // console.log(data[i].jsonstring);
                dat.push(data[i].jsonstring);
                var heading1 = document.getElementById("heading1");
                heading1.firstChild.nodeValue = dat[0].Titel;
            }          
        };
    });    
    console.log(dat[0])
}