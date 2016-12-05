
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
doc.setFontSize(20);	

$( document ).ready(function() {
    //$("div.container").html("TEST");
	

	
	$("div.output_txt").html( checkPlaceholdersShow("") );
	$("div.option_1").html( checkPlaceholdersOption(options_1[current_q], 1) );
	$("div.option_2").html( checkPlaceholdersOption(options_2[current_q], 2) );
	$("div.option_3").html( checkPlaceholdersOption(options_3[current_q], 3) );
	$("div.option_4").html( checkPlaceholdersOption(options_4[current_q], 4) );
	
	
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

$("#saveButton").click(function () {
    doc.fromHTML($("#output_txt_id").html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});	
	
});

//option 1 A #get Axt Melee#  --> "option 1 A Axt" 

function checkPlaceholdersOption(txt,number) {
	if(txt.includes("#")){
		var splitted_str = txt.split("#");
		
		for (i = 0; i < splitted_str.length; i++) {
			
			if(splitted_str[i].includes("get")){
			
				var splitted_str_sub = splitted_str[i].split(" ");
				
				
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
		}
		
		txt = splitted_str.join("");
	}
    return txt;
}

function checkPlaceholdersShow(txt) {

		if(txt.includes("#")){
		var splitted_str = txt.split("#");
		
		for (i = 0; i < splitted_str.length; i++) {
			
			if(splitted_str[i].includes("get")){
			
				var splitted_str_sub = splitted_str[i].split(" ");	
				splitted_str[i] = splitted_str_sub[1];
			}
			
			if(splitted_str[i].includes("show")){
			
				var splitted_str_sub2 = splitted_str[i].split(" ");	
				
				
				for (x = 0; x < placeholders_categories.length; x++) {
				
				if(placeholders_categories[x] == splitted_str_sub2[1]){
					 splitted_str[i] = placeholders_chosen[x];
				}
				}
			
				
				
			}
		}
		
		txt = splitted_str.join("");
	}
	
    return txt;
}

function checkPHArray(arr){
		for (a = 0; a < arr.length; a++) {
		if(arr[a] != ""){
			var splitted_pph = arr[a].split(" ");
			
			for (x = 0; x < placeholders_categories.length; x++) {
				
				if(placeholders_categories[x] == splitted_pph[2]){
					placeholders_chosen[x] = splitted_pph[1];
				
				}
			}
		}
	}
}



function clickButton(number) {
	$( ".output_fade" ).fadeOut(200);
   $( "div.buttons_holder" ).fadeOut( "slow" , function() {
    // Animation complete.
	
	$("#output_img_id").attr("src","img/img_q"+ current_q +"_o" + number + ".jpg");
	$( ".output_fade" ).fadeIn(200);
		
	options_chosen[current_q] = number;
	chosen_o = number;
	if(number==1){
		checkPHArray(placeholders_o_1);
		generated_text[current_q] = " " + checkPlaceholdersShow(options_1[current_q]) + " " + checkPlaceholdersShow(output_o_1[current_q]);
	}
	if(number==2){
		checkPHArray(placeholders_o_2);
		generated_text[current_q] = " " + checkPlaceholdersShow(options_2[current_q]) + " " + checkPlaceholdersShow(output_o_2[current_q]);
	}
	if(number==3){
		checkPHArray(placeholders_o_3);
		generated_text[current_q] = " " + checkPlaceholdersShow(options_3[current_q]) + " " + checkPlaceholdersShow(output_o_3[current_q]);
	}
	if(number==4){
		checkPHArray(placeholders_o_4);
		generated_text[current_q] = " " + checkPlaceholdersShow(options_4[current_q]) + " " + checkPlaceholdersShow(output_o_4[current_q]);
	}	
	next();
	
	
	 
  }).fadeIn( 400 , function() { clickable = 1; });
	
}



function generate_story(){
	return generated_text.join(""); // "<br><br><br><div id='saveButton' class='saveButton'>Charakter speichern!</div><br><div id='newButton' class='newButton'>Neue Story generieren!</div><br>"
}

function next(){
	
	
				
	
	if(chosen_o == 1){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_1[current_q]) );
		
	}
	
	if(chosen_o == 2){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_2[current_q]) );
		
	}
	
	if(chosen_o == 3){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_3[current_q]) );
		
	}
	
	if(chosen_o == 4){
		$("div.output_txt").html( checkPlaceholdersShow(output_o_4[current_q]) );
		
	}
	
	current_q += 1;
	
	for (m = 0; m < placeholders_o_1.length; m++) {
		placeholders_o_1[m] = "";
		placeholders_o_2[m] = "";	
		placeholders_o_3[m] = "";	
		placeholders_o_4[m] = "";	
	}
	
	$("div.option_1").html( checkPlaceholdersOption(options_1[current_q],1) );
	$("div.option_2").html( checkPlaceholdersOption(options_2[current_q],2) );
	$("div.option_3").html( checkPlaceholdersOption(options_3[current_q],3) );
	$("div.option_4").html( checkPlaceholdersOption(options_4[current_q],4) );
	
	if(current_q == 4){
	$("div.option_1").html( "" );
	$("div.option_2").html( "" );
	$("div.buttons_holder").html( "" );
	$("div.output_txt").html( generate_story() );
	}
}