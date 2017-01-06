


$( document ).ready(function() {
    //$("div.container").html("TEST");

	// MUSIC
	
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './audio/theme.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
	audioElement.play();
	
	// MUSIC END
	
	
$("div.end_buttons").fadeOut(0);
	
	$("div.output_txt").html( checkPlaceholdersShow(init_texts[0]) );
	//$("div.output_txt").html( phraseGenerate() );
	
	$("div.option_1").html( checkPlaceholdersOption(options_1[current_q], 1,true) );
	$("div.option_2").html( checkPlaceholdersOption(options_2[current_q], 2,true) );
	$("div.option_3").html( checkPlaceholdersOption(options_3[current_q], 3,true) );
	$("div.option_4").html( checkPlaceholdersOption(options_4[current_q], 4,true) );
	
	
$( "#options_1" ).click(function() {
	if(clickable == 1){
		clickable = 0;
	clickButton(1);}
});
	
$( "#options_2" ).click(function() {
	if(clickable == 1){
		clickable = 0;
	clickButton(2);}
});	
	
$( "#options_3" ).click(function() {
	if(clickable == 1){
		clickable = 0;
	clickButton(3);}
});	

$( "#options_4" ).click(function() {
	if(clickable == 1){
		clickable = 0;
	clickButton(4);}
});	


// PDF EXPORT
$("#saveButton").click(function () {

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};


	doc.setFont("courier");
	doc.setFontSize(22);	
	doc.text(20, 20, '---');

	doc.setFontSize(18);
    doc.fromHTML($("#pdf_output").html(), 15, 15, {
			'width': 170,
            'elementHandlers': specialElementHandlers
    });

    doc.save('char_gen.pdf');
});	


$( "#newButton" ).click(function() {
	location.reload();
});	

	
$( "#randomButton" ).click(function() {
	$("div.end_buttons").fadeIn(0);
	$("div.option_1").html( "" );
	$("div.option_2").html( "" );
	$("div.option_3").html( "" );
	$("div.option_4").html( "" );
	$("div.buttons_holder").html( "" );
	
	ResetAllData();
	
	for (n = 0; n < generated_text.length; n++) {
		generated_text[n] = "";
		options_chosen[n] = Math.floor(Math.random() * 4) + 1;
		
		checkPlaceholdersOption(options_1[n], 1,false);
		checkPlaceholdersOption(options_2[n], 1,false);
		checkPlaceholdersOption(options_3[n], 1,false);
		checkPlaceholdersOption(options_4[n], 1,false);
		
	if(options_chosen[n]==1){
		checkPHArray(placeholders_o_1);
		generated_text[n] = " " + checkPlaceholdersShow(init_texts[n]) + "\n\n" + checkPlaceholdersShow(options_1[n]) + "\n\n" + checkPlaceholdersShow(output_o_1[n]);
	}
	if(options_chosen[n]==2){
		checkPHArray(placeholders_o_2);
		generated_text[n] = " " + checkPlaceholdersShow(init_texts[n]) + "\n\n" + checkPlaceholdersShow(options_2[n]) + "\n\n" + checkPlaceholdersShow(output_o_2[n]);
	}
	if(options_chosen[n]==3){
		checkPHArray(placeholders_o_3);
		generated_text[n] = " " + checkPlaceholdersShow(init_texts[n]) + "\n\n" + checkPlaceholdersShow(options_3[n]) + "\n\n" + checkPlaceholdersShow(output_o_3[n]);
	}
	if(options_chosen[n]==4){
		checkPHArray(placeholders_o_4);
		generated_text[n] = " " + checkPlaceholdersShow(init_texts[n]) + "\n\n" + checkPlaceholdersShow(options_4[n]) + "\n\n" + checkPlaceholdersShow(output_o_4[n]);
	}

	
	}
	
	$("div.output_txt").html( generate_story() );
	
});		
	
});




function ResetAllData(){
	
clickable = 1; // 1 = clickable, 0 not clickable
current_q = 0;
chosen_o = 0;

	for (m = 0; m < placeholders_o_1.length; m++) {
		placeholders_o_1[m] = "";
		placeholders_o_2[m] = "";	
		placeholders_o_3[m] = "";	
		placeholders_o_4[m] = "";	
	}
	
	for (x = 0; x < placeholders_chosen.length; x++) {
		placeholders_chosen[x] = "";
	}
	
	for (y = 0; y < generated_text.length; y++) {
		generated_text[y] = "";
		options_chosen[y] = 0;
		chosen_o = y;
	}
	
	
	
}


//option 1 A #get Axt Melee#  --> "option 1 A Axt"
function checkPlaceholdersOption(txt,number,returnString) {											//wozu returnString ???
	
	if(txt.includes("#")){
		var splitted_str = txt.split("#");
		
		for (i = 0; i < splitted_str.length; i++) {
			
			if(splitted_str[i].includes("get")){													//cant use get in my texts lol I IS RETARDED
			
				var splitted_str_sub = splitted_str[i].split(placeholder_seperator);
				
				if(number==1){
				
					for (j = 0; j < placeholders_o_1.length; j++) {
						if(placeholders_o_1[j] == ""){
							placeholders_o_1[j] = splitted_str[i];
						}
					}
				
				}
				
				if(number==2){
				
					for (j = 0; j < placeholders_o_2.length; j++) {
						if(placeholders_o_2[j] == ""){
							placeholders_o_2[j] = splitted_str[i];
						}
					}
				
				}
				
				if(number==3){
				
					for (j = 0; j < placeholders_o_3.length; j++) {
						if(placeholders_o_3[j] == ""){
							placeholders_o_3[j] = splitted_str[i];
						}
					}
				
				}
				
				if(number==4){
				
					for (j = 0; j < placeholders_o_4.length; j++) {
						if(placeholders_o_4[j] == ""){
							placeholders_o_4[j] = splitted_str[i];
						}
					}
				
				}
				
				splitted_str[i] = splitted_str_sub[1];
			}
			
			else{
				
				if(splitted_str[i].includes("show")){													// same as get ... duh
				
					var splitted_str_sub2 = splitted_str[i].split(placeholder_seperator);	
				
				
					for (x = 0; x < placeholders_categories.length; x++) {
					
						if(placeholders_categories[x] == splitted_str_sub2[1]){
							splitted_str[i] = placeholders_chosen[x];
						}
					}
				}
			}		
		}
		
		txt = splitted_str.join("");
	}
	
	if(returnString==true){
    return txt;
	}
}


//Erkennen der placeholder und "löschen" von get, show, category und den splitSeperator aus dem fließtext
function checkPlaceholdersShow(txt) {															

	if(txt.includes("#")){																		//Überprüft notwendingkeit des .split
		var splitted_str = txt.split("#");														//Teilt den Text am "#" Symbol in Arrays auf
		
		//Geht das entstandene Array durch
		for (i = 0; i < splitted_str.length; i++) {												
		
			//suche nach aktivierung für den placeholder
			if(splitted_str[i].includes("get")){												
		
				var splitted_str_sub = splitted_str[i].split(placeholder_seperator);			//splitted den Stringabschnitt im Array am "_" nochmal in ein Array auf
				splitted_str[i] = splitted_str_sub[1];											//füllt den index mit dem placeholder 
			}
			
			//suche nach aktivierung der anzeige des placeholders
			if(splitted_str[i].includes("show")){												
			
				var splitted_str_sub2 = splitted_str[i].split(placeholder_seperator);			//splitted den Stringabschnitt im Array am "_" nochmal in ein Array auf

				//Geht das PH "Speicherarray" durch
				for (x = 0; x < placeholders_categories.length; x++) {							
			
					if(placeholders_categories[x] == splitted_str_sub2[1]){						//wenn ein Index im categoryArry mit dem 2en Index des showArrays, also der category übereinstimmt
						splitted_str[i] = placeholders_chosen[x];								//wird der Inhalt am Index i des ursprünglichen .splitArrays mit dem placeholder gefüllt
					}
				}
	
			}
		}
		
		//fügt die Indizes des .splitArrays wieder zusammen wodurch get, show, category und die splitSeperators aus dem fließtext genommen werden
		txt = splitted_str.join("");
	}

	//gibt den text aus
	return txt;																					
}

function checkPHArray(arr){
		for (a = 0; a < arr.length; a++) {
		if(arr[a] != ""){
			var splitted_pph = arr[a].split(placeholder_seperator);
			//if(splitted_pph[0] == "get"){
			for (x = 0; x < placeholders_categories.length; x++) {
				
				if(placeholders_categories[x] == splitted_pph[2]){
					placeholders_chosen[x] = splitted_pph[1];
				
				}
			}
			//}
		}
	}
}



function clickButton(number) {
	$( ".output_fade" ).fadeOut(200);
	$( "div.buttons_holder" ).fadeOut( "slow" , function() {
		// Animation complete.

	$("#output_img_id").attr("src","img/img_q"+ current_q +"_o" + number + ".jpg");			//Bild wird gewählt
	$( ".output_fade" ).fadeIn(200);														//container fade

	options_chosen[current_q] = number;
	chosen_o = number;

	if(number==1){
	checkPHArray(placeholders_o_1);
	generated_text[current_q] = checkPlaceholdersShow(init_texts[current_q]) + "\n\n" + checkPlaceholdersShow(options_1[current_q]) + "\n\n" + checkPlaceholdersShow(output_o_1[current_q]);
	}

	if(number==2){
	checkPHArray(placeholders_o_2);
	generated_text[current_q] = checkPlaceholdersShow(init_texts[current_q]) + "\n\n" + checkPlaceholdersShow(options_2[current_q]) + "\n\n" + checkPlaceholdersShow(output_o_2[current_q]);
	}

	if(number==3){
	checkPHArray(placeholders_o_3);
	generated_text[current_q] = checkPlaceholdersShow(init_texts[current_q]) + "\n\n" + checkPlaceholdersShow(options_3[current_q]) + "\n\n" + checkPlaceholdersShow(output_o_3[current_q]);
	}

	if(number==4){
	checkPHArray(placeholders_o_4);
	generated_text[current_q] = checkPlaceholdersShow(init_texts[current_q]) + "\n\n" + checkPlaceholdersShow(options_4[current_q]) + "\n\n" + checkPlaceholdersShow(output_o_4[current_q]);
	}
	
	//generated_text[current_q] += "<br><br><img class='output_img' src='img/img_q" + current_q + "_o" + number + ".jpg' ></img><br><br>";

	next();

  }).fadeIn( 400 , function() { clickable = 1; });

}



function generate_story(){
	return "<center><h1>Your character</h1></center><br><br>"+ generated_text.join("");
}

function next(){
	
	
	if(chosen_o == 1){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_1[current_q])  +" "+ checkPlaceholdersShow(init_texts[current_q+1]));
		
	}
	
	if(chosen_o == 2){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_2[current_q]) +" "+ checkPlaceholdersShow(init_texts[current_q+1]));
		
	}
	
	if(chosen_o == 3){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_3[current_q])  +" "+ checkPlaceholdersShow(init_texts[current_q+1]));
		
	}
	
	if(chosen_o == 4){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_4[current_q])  +" " + checkPlaceholdersShow(init_texts[current_q+1]));
		
	}
	
	current_q += 1;
	
	for (m = 0; m < placeholders_o_1.length; m++) {
		placeholders_o_1[m] = "";
		placeholders_o_2[m] = "";	
		placeholders_o_3[m] = "";	
		placeholders_o_4[m] = "";	
	}
	
	$("div.option_1").html( checkPlaceholdersOption(options_1[current_q],1,true) );
	$("div.option_2").html( checkPlaceholdersOption(options_2[current_q],2,true) );
	$("div.option_3").html( checkPlaceholdersOption(options_3[current_q],3,true) );
	$("div.option_4").html( checkPlaceholdersOption(options_4[current_q],4,true) );
	
	if(current_q == 4){
	$("div.end_buttons").fadeIn(0);
	$("div.option_1").html( "" );
	$("div.option_2").html( "" );
	$("div.option_3").html( "" );
	$("div.option_4").html( "" );
	$("div.buttons_holder").html( "" );
	$("div.output_txt").html( generate_story() );
	}
}
