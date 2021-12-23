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
    
    '{"Pflanze":"'+$("#jsonstring1").val()+'",'+
    '"Name":"'+$("#jsonstring2").val()+'",'+
    '"Nachname":"'+$("#jsonstring3").val()+'",'+
    '"Straße":"'+$("#jsonstring4").val()+

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

function display()
{
    // {
    //     $.getJson("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_",function(dat)
    //     {
    //         console.log(dat);
    
    //         $(dat).each(function(i, parameter))
    //         {
    //         $('#AusgabeBody').append($("<tr>")
    //         .append($("<td>").append(Ausgabe.Name))
    //         .append($("<td>").append(Ausgabe.Nachname))
    //         .append($("<td>").append(Ausgabe.Pflanze)));
    //         });
    //     }
    // }
    $.getJSON('https://elaspix.de/Lehre/Casestudy/DataScience/liverendering_log_15.12.-25.12.19.json', function(data){
        console.log(data);
        $(data).each(function(i, hero){
          $('#heroesBody').append($("<tr>")
          .append($("<td>").append(hero.app))
          .append($("<td>").append(hero.datetime))
          .append($("<td>").append(hero.parameter)));
        });
      })
  .done(function(){
      alert("Completed");
  })
  .fail(function(e){
      console.log('error:');
      console.error(e);
  })
  .always(function(){
      alert("always runs");
  });

}
function search()
{
    var nam = String($("#search_term").val())
    var data = []
    console.log(nam)
    $.get("https://webtechlecture.appspot.com/cloudstore/listobjects?owner=s201655&token=dMinmYeldeDsBbu0iiEIPGTPws0_",function(response)
    {
        
        for (var i = 0; i < response.length; i++)
        data.push(response[i]);


        for (var i = 0; i < data.length; i++)
        {
            if (data[i].jsonstring.Pflanze == nam)
            {
                console.log(data[i].jsonstring)
            }
                else
                {
                    for (var i = 0; i < data.length; i++)
                    {
                        if (data[i].jsonstring.Name == nam)
                        {
                        console.log(data[i].jsonstring)
                        }
                            else
                            {
                                for (var i = 0; i < data.length; i++)
                                {
                                if (data[i].jsonstring.Nachname == nam)
                                    {
                                    console.log(data[i].jsonstring)
                                    }
                                        else
                                        {
                                            for (var i = 0; i < data.length; i++)
                                            {
                                            if (data[i].jsonstring.Straße == nam)
                                                {
                                                console.log(data[i].jsonstring)
                                                }                                        
                                            };            	          
                                        }
                                }
                            }
                    }
                }
        };
    }); 
    display()        
};