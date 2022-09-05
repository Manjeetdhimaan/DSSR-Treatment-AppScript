// ALL sheets names
const globalVar = {
  "DatabaseSheetId": "14nb6uLbPLZB6KEel3qQjv70YUMnPoM3o3dbuUauq7TQ",
  "ProductListSheet" : "Products",
  "ProductPriceListSheet": "ProductPriceList",
  "OrderDatabase" : "Database",
  "PettyCashSheet" : "PettyCash",
  "Treatment_Amt" : "PerformaAMT",
  "Treatment_AmtLog" : "dssrlog",
  "Close_PI" : "Close_PI",
  "insertRange": 'Data!A1:AV1'
}

function doGet(e) {
  if (e.parameter['page']) 
    return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
  else
  return HtmlService.createTemplateFromFile('DSSR_FORM').evaluate(); 
}

//search customer
function searchCustomer(phoneNum) {
 // const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.OrderDatabase).getDataRange().getDisplayValues().slice(1);
  const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.OrderDatabase);
  // Fetch limited records start from 2 row, column start 4, all records, total columns need to fetch 11
  const ordersData = orders.getRange(2, 4, orders.getLastRow(), 8).getDisplayValues();
  var res = ordersData.find( r => r[0] == phoneNum)
  return res;
}

function searchTreatmentCustomer(phoneNum) {
  const performaAMT = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);
 const logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog).getDataRange().getDisplayValues().slice(1);
  const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog);
  // Fetch limited records start from 2 row, column start 4, all records, total columns need to fetch 11
  // const ordersData = orders.getRange(1, 1, orders.getLastRow(), 10).getDisplayValues();
  // var res = ordersData.find( r => r[0] == phoneNum);
  // var test = ordersData.map((a)=> {
  //    return b.concat(a.filter(x => x[1] == phoneNum) ) 
  // })
  // return ordersData;
  var resultArray = [];
   performaAMT.map((phoneN) => {
     if (phoneN[0]==phoneNum) {
          resultArray = resultArray.concat([phoneN]);
       }
   })

   if (resultArray.length<=0) {
      logs.map((a)=> {
              if (a[3]==phoneNum) {
                  resultArray = resultArray.concat([a])
              }
      })
   }

   
  return resultArray
}

function searchTreatmentCustomerForTable(phoneNum) {
  
 const logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog).getDataRange().getDisplayValues().slice(1);
  
  var resultArray = [];
      logs.map((a)=> {
              if (a[3]==phoneNum) {
                  resultArray = resultArray.concat([a])
              }
      })
  return resultArray
}

function getClosePi() {
 const closePI = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);
 
  return closePI
}


function getClosePi1() {
 const closePI = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Close_PI).getDataRange().getDisplayValues().slice(1);
 
  return closePI
}

function searchTreatmentCustomerPerforma1(performa) {
 const orders1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog).getDataRange().getDisplayValues().slice(1);
  // const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog);
  // Fetch limited records start from 2 row, column start 4, all records, total columns need to fetch 11
  // const ordersData = orders.getRange(1, 1, orders.getLastRow(), 10).getDisplayValues();
  // var res = ordersData.find( r => r[0] == phoneNum);
  // var test = ordersData.map((a)=> {
  //    return b.concat(a.filter(x => x[1] == phoneNum) ) 
  // })
  // return ordersData;
var resultArray = []
    orders1.map((a)=> {
       if (a[0]==performa) {
          resultArray = resultArray.concat([a])
       }
  })
  return resultArray
}


function searchTreatmentCustomerPerforma(performa, phoneN) {


  const performaAMT = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);
 const logs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_AmtLog).getDataRange().getDisplayValues().slice(1);

  var resultArray = [];
   performaAMT.map((perf) => {
     if (perf[1]==performa && perf[0]== phoneN) {
          resultArray = resultArray.concat([perf]);
       }
   })

   if (resultArray.length<=0) {
      logs.map((a)=> {
              if (a[0]==performa) {
                  resultArray = resultArray.concat([a])
              }
      })
   }

   
  return resultArray
//  const orders1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);

// var resultArray = []
//     orders1.map((a)=> {
//        if (a[1]==performa) {
//           resultArray = resultArray.concat([a])
//        }
//   })
//   return resultArray
}

function getAllTreatmentCustomers(phoneNum) {
 const orders1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);
  // const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt);
  // Fetch limited records start from 2 row, column start 4, all records, total columns need to fetch 11
  // const ordersData = orders.getRange(1, 1, orders.getLastRow(), 10).getDisplayValues();
  // var res = ordersData.find( r => r[0] == phoneNum);
  // var test = ordersData.map((a)=> {
  //    return b.concat(a.filter(x => x[1] == phoneNum) ) 
  // })
  // return ordersData;
var resultArray = []
    orders1.map((a)=> {
       if (a[1]) {
          resultArray = resultArray.concat([a])
       }
  })
  return resultArray
}

function getAllTreatmentCustomers2() {
      const orders1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);

        return orders1
}


function getTreatmentPerforma() {
 // const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.OrderDatabase).getDataRange().getDisplayValues().slice(1);
  const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt);
  // Fetch limited records start from 2 row, column start 4, all records, total columns need to fetch 11
  const ordersData = orders.getRange(2, 2, orders.getMaxColumns(), 10).getDisplayValues();
  var res = ordersData.find( (r, index) => r[index])
  return res;
}

function getProductList(type = "product") {
  const prod_list = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.ProductListSheet).getDataRange().getDisplayValues().slice(1);
  const prod_price = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.ProductPriceListSheet).getDataRange().getDisplayValues().slice(1);
  var data = {};
  if (type == "product") {
    prod_list.map(function(prod) {
      if (prod[9] != "#REF!")
        data[prod[9]] = prod[9];
    });
  } else {
    prod_list.map(function(prod) {
      if (prod[7] != "#REF!")
        data[prod[7]] = prod[7];
    });
  }
  var finalArr = [];
  prod_price.map(function(prodPrice) {
    if (typeof data[prodPrice[1]] != "undefined") {
      finalArr.push(prodPrice);
    }
  });
  return finalArr;
}

function getTreatmentAMT(type = "product") {
    const treatment_Amt = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt).getDataRange().getDisplayValues().slice(1);;
console.log(treatment_Amt)


  const prod_list = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.ProductListSheet).getDataRange().getDisplayValues().slice(1);
  const prod_price = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.ProductPriceListSheet).getDataRange().getDisplayValues().slice(1);
  var data = {};
  if (type == "product") {
    prod_list.map(function(prod) {
      if (prod[9] != "#REF!")
        data[prod[9]] = prod[9];
    });
  } else {
    prod_list.map(function(prod) {
      if (prod[7] != "#REF!")
        data[prod[7]] = prod[7];
    });
  }
  var finalArr = [];
  prod_price.map(function(prodPrice) {
    if (typeof data[prodPrice[1]] != "undefined") {
      finalArr.push(prodPrice);
    }
  });
  return finalArr;
}

/* PROCESS FORM */
function processForm(formValues) {
   formValues[1] = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy/MM/dd hh:mm:ss"); 
   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.OrderDatabase);
   sheet.appendRow(formValues);
   //var lastRow = sheet.getLastRow();
   //sheet.getRange('B'+lastRow).setValue(new Date());

}

function processDSSRForm(formValues) {
  console.log("formvalues", formValues)
  //  formValues[1] = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy/MM/dd hh:mm:ss"); 
   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Treatment_Amt);
   sheet.appendRow(formValues);
   //var lastRow = sheet.getLastRow();
   //sheet.getRange('B'+lastRow).setValue(new Date());
}


function getclos() {
      const orders1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Close_PI).getDataRange().getDisplayValues().slice(1);

        return orders1
}

function processFinalForm(formValues) {
  //  formValues[1] = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy/MM/dd hh:mm:ss"); 
   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.Close_PI);
   sheet.appendRow(formValues);
   //var lastRow = sheet.getLastRow();
   //sheet.getRange('B'+lastRow).setValue(new Date());

}
//treatment, services h column and product from J column of sheet5

function getPageUrl(name) {
  if (name) {
    var url = ScriptApp.getService().getUrl();
    return url + "?page=" + name;
  } else {
    return ScriptApp.getService().getUrl();
  }
}


//search customer
function searchByDate(dateVal = "") {
  const orders = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.OrderDatabase);
  const ordersData = orders.getDataRange().getDisplayValues().slice(1);
  var res = [];
  ordersData.forEach( r => { 
          var recDate = r[1];
          recDate = recDate.substring(0, 10);
          if (recDate == dateVal)
          res.push(r);
 
  })
  return res;
}

//search petty cash data
function searchPettyCashByDate(dateVal = "") {
  const pettyCash = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(globalVar.PettyCashSheet);
  const pettyData = pettyCash.getDataRange().getDisplayValues().slice(1);
  //return pettyData;
  var res = [];
  pettyData.forEach( r => { 
          var recDate = r[16];
          //recDate = recDate.substring(0, 10);
          if (recDate == dateVal)
          res.push(r);
 
  })
  return res;
}

