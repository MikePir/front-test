class Param { Name: string = 'API Key'; Type: number = 0; Acr: string = 'apiKey' }

interface smsjs1 {

 ID: number // = 3
 Name: string // = 'alphasms.ua'
 Ico: string // = 'https://ilogic.planfix.ru/img/sms/alphasms.png' BaseURL: https://ilogic.planfix.ru
 Params : [Param, Param]
}

    var smsjson: [smsjs1];

    var Names:string[] = new Array(43);
    var Icons:string[] = new Array(43);
    var Name:string;
    var Ico:string;
var  data = {
        "Name":Names,
	"Ico":Icons
    };
//	   console.log(data);

function smsjsRequestListener () {
    smsjson = JSON.parse(this.responseText);
	for(var i = 0;i<40;i++) { 
//	   console.log(smsjson[i].Name,smsjson[i].Ico) 
	   Names[i] = smsjson[i].Name;
	   Icons[i] = smsjson[i].Ico;
	}
}

var request = new XMLHttpRequest();
request.onload = smsjsRequestListener;
request.open("get", "js/sms.js", true);
request.send();

export class TestDrawer {
	draw() {
		const body = $('body');
		body.append($.mustache(window.TemplateJS.test, {}));
		const section = $('p');
//	   console.log(data);
	  for(var i = 0;i<40;i++) { 
//	   console.log(data.Name[i]); 
		Name = data.Name[i];
		Ico = Icons[i];
//	   console.log(data);
		section.append($.mustache(window.TemplateJS.item, {}));
	  }
	}

	loadData() {
		
		$.ajax({

		});

		
	}
}

