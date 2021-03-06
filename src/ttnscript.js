function test(e){
  var sheet = SpreadsheetApp.openById("YOURSheetdID");
  var firstSheet = sheet.getSheets()[0];
  sheet.setName("LoraDatenspeicher");
}


function doPost(e) {
  
  Logger.log("I was called")
  if(typeof e !== 'undefined')
  Logger.log(e.parameter);
    
  var sheet = SpreadsheetApp.openById("YOURSheetdID");
  var firstSheet = sheet.getSheets()[0];
  firstSheet.setName("Lora-Datenspeicher");
  //Fil the First Row with static content
  firstSheet.getRange(1, 1).setValue('New RAW-Data Posetd from The ThingsNetwork:');
  firstSheet.getRange(1, 2).setValue(JSON.stringify(e));
  firstSheet.getRange(2,1).setValue(['Timestamp']);
  firstSheet.getRange(2,2).setValue(['Humidity']);
  firstSheet.getRange(2,3).setValue(['Temp:']); 
  firstSheet.getRange(2,4).setValue(['Pressure']);
  firstSheet.getRange(2,5).setValue(['Port']);
  firstSheet.getRange(2,6).setValue(['GW_ID']);
  var rawdata = e;
  
  // 2. Zeile
  //firstSheet.appendRow([rawdata]);
  var text = JSON.stringify(e);
  if (text) {
    if (text.indexOf('contents') > -1) {
        var textcutted = text.slice(text.indexOf('contents')+11, text.length); // cut everything useless to get only the payload data
        //firstSheet.appendRow(['textcutted' , textcutted]);
        
        textcutted = textcutted.replace(/\\/g, "");//remove all "\" to generate a proper Json that can be converted
      
      //for simulated Data
      //var textcutted2 = textcutted.slice(1, textcutted.indexOf('postData')-10); // remove last letters to get a Json that can be converted
      
      //for real Data
      var textcutted2 = textcutted.slice(0, textcutted.indexOf('postData')-10); // remove last letters to get a Json that can be converted
      //var endetest = textcutted2.slice(textcutted2.length -10,textcutted2.length);//just for debug: Shows end of Payload
      //var anfangtest = textcutted2.slice(0,10);//just for debug: Shows begin of Payload
      //firstSheet.appendRow(['textcutted2' , textcutted2]);  //just for debug
    }
    else{
      firstSheet.appendRow(['there was' , 'no content', 'that could', 'be extracted']);//in case something went wrong
      firstSheet.appendRow(['Text does not contain contents:' , text]);//print text in case something went wrong
    }
  }
  else{
   firstSheet.appendRow(['Text that has been posted is empty:' , text]);//print text in case something went wrong
  }
  
  var jsonData = JSON.parse(textcutted2); // parse the extracted Text in JSON Converter
  if (jsonData.port == "7"){
    //firstSheet.appendRow(['Yeah, the BME DATA has been decoded:' , jsonData.port]);  
    firstSheet.appendRow([jsonData.metadata.time, jsonData.payload_fields.humidity , jsonData.payload_fields.temperature, jsonData.payload_fields.pressure , jsonData.port, jsonData.metadata.gateways[0].gtw_id]);
    //firstSheet.appendRow([jsonData.payload_fields.air, jsonData.port]);
    //firstSheet.appendRow(['test', 'test']);
  }
  else {
   firstSheet.appendRow([jsonData.metadata.time ,'0','0','NO BME Data sent' , jsonData.port, jsonData.metadata.gateways[0].gtw_id]);  
  }
  return ContentService.createTextOutput(JSON.stringify(e))
}

function doGet(e){
  test(e);
}

