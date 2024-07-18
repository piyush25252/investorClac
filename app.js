
// jai sita raam 


function getValue() {
  var flag = 0;
while(flag != 1){
  var amount = document.getElementById("points").value;
  var interest = document.getElementById("points2").value;
  var duration = document.getElementById("points3").value;
  var riskElements = document.getElementsByClassName("risk-list");
  var risk = riskElements.length > 0 ? riskElements[0].value : undefined;
  

  // ***********high-risk funds**********
  var hr1 = "Aditya Birla Sun Life PSU Equity Fund";
  var hr2 = "SBI PSU Fund";
  var hr3 = "Invesco India PSU Equity Fund";
  var hr4 = "Nippon India Power & Infra Fund";
  var hr5 = "Quant Infrastructure Fund";

  // *************high-to-moderate funds*************
  var hr6 = "ICICI Prudential Bluechip Fund";
  var hr7 = "Parag Parekh Flexi Cap Fund";
  var hr8 = "UTI Nifty 50 Index funds";
  var hr9 = "Navi Nifty 50 Index Fund";
  var hr10 = "SBI Magnum Multicap Fund";

  // *************moderate-to-low**************
  var hr11 = "Canara Robeco Bluechip Equity Fund";
  var hr12 = "ICICI Prudential Nifty 50 Index Fund";
  var hr13 = "SBI Gold Fund";
  var hr14 = "Axis Bluechip Fund";
  var hr15 = "Motilal Oswal Gold and Silver ETFs Fund";

  // *************low********************
  var hr16 = "HDFC Banking and PSU Debt Fund";
  var hr17 = "SBI Banking and PSU Debt";
  var hr18 = "Aditya Birla Sun Life Banking & PSU Debt Fund";
  var hr19 = "Bandhan Nifty Next 50 Index Fund";
  var hr20 = "UTI Nifty Next 50 Index Fund";
  if (amount == 0 || interest  == 0 || risk == 0){
flag = 0;
  }
  else{
    flag = 1;
  }

  if (flag == 1){
    if (interest >= 75){

      document.getElementById('entry').innerHTML = "Here are the top funds to invest in -> "

      let text1 = "Aditya Birla Sun Life PSU Equity Fund";
      let link1 = text1.link("https://mutualfund.adityabirlacapital.com/products/wealth-creation-solutions/aditya-birla-sun-life-psu-equity-fund");
      document.getElementById('square').innerHTML = link1;
      
      let text2 = "SBI PSU Fund";
      let link2 = text2.link("https://www.sbimf.com/sbimf-scheme-details/sbi-psu-fund-137");
      document.getElementById('circle').innerHTML = link2;
      
      let text3 = "Invesco India PSU Equity Fund";
      let link3 = text3.link("https://invescomutualfund.com/planPage?Title=Invesco%20India%20PSU%20Equity%20Fund&classification=equity");
      document.getElementById('rectangle').innerHTML = link3;

      let text4 = "Nippon India Power & Infra Fund";
      let link4 = text4.link("https://mf.nipponindiaim.com/FundsAndPerformance/Pages/NipponIndia-Power-Infra-Fund.aspx");
      document.getElementById('polygon').innerHTML = link4;

      let text5 = "Quant Infrastructure Fund";
      let link5 = text5.link("https://quantmutual.com/equity/infrastructure");
      document.getElementById('trap').innerHTML = link5;
    }
    else if (interest >= 50){
      document.getElementById('entry').innerHTML = "Here are the top funds to invest in -> "

      let text1 = "ICICI Prudential Bluechip Fund";
      let link1 = text1.link("https://www.archive.icicipruamc.com/sip-smart-investor?utm_source=google&utm_medium=cpc&utm_campaign=22_Q3_Search_BAU_Brand_Exact_Leads_EN-Open&utm_adgroup={adgroup}&utm_term=icici%20prudential%20bluechip%20fund&utm_network=Search_g&utm_matchtype=e&utm_device=c&utm_placement=&utm_content=634343219676&utm_Adposition=&utm_location=9303909&utm_campaignid=18896622887&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSYE48LBKFLPUA5kTecCYqEXGUfiFev6m1KOWPqIVT6LYk09_B1WgYBoCZtUQAvD_BwE");
      document.getElementById('square').innerHTML = link1;
      
      let text2 = "Parag Parekh Flexi Cap Fund";
      let link2 = text2.link("https://amc.ppfas.com/schemes/parag-parikh-flexi-cap-fund/");
      document.getElementById('circle').innerHTML = link2;
      
      let text3 = "UTI Nifty 50 Index funds";
      let link3 = text3.link("https://www.utimf.com/campaign-page/product/uti-large-mid-cap-fund?utm_source=Google&utm_medium=cpc&utm_campaign=PLAMF_Pmax&utm_term=Perf%20Max&dxid=CjwKCAjw1920BhA3EiwAJT3lSU6TEjBDxBI2r7uSkhlZkQLhqJZpMTIUnokHGnTHsPa3ldtswOnQ-RoCI4gQAvD_BwE&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSU6TEjBDxBI2r7uSkhlZkQLhqJZpMTIUnokHGnTHsPa3ldtswOnQ-RoCI4gQAvD_BwE");
      document.getElementById('rectangle').innerHTML = link3;

      let text4 = "Navi Nifty 50 Index Fund";
      let link4 = text4.link("https://navi.com/mutual-fund/navi-nifty-50-index-fund");
      document.getElementById('polygon').innerHTML = link4;

      let text5 = "SBI Magnum Multicap Fund";
      let link5 = text5.link("https://www.sbimf.com/campaign/sbi-multicap-fund/");
      document.getElementById('trap').innerHTML = link5;
    }
    else if(interest >= 25){
  

      document.getElementById('entry').innerHTML = "Here are the top funds to invest in -> "

      let text1 = "Canara Robeco Bluechip Equity Fund";
      let link1 = text1.link("https://www.canararobeco.com/product/equity-scheme/blue-chip-equity-fund/113221");
      document.getElementById('square').innerHTML = link1;
      
      let text2 = "ICICI Prudential Nifty 50 Index Fund";
      let link2 = text2.link("https://www.icicipruamc.com/mutual-fund/other-funds/icici-prudential-nifty-index-fund");
      document.getElementById('circle').innerHTML = link2;
      
      let text3 = "SBI Gold Fund";
      let link3 = text3.link("https://www.sbimf.com/sbimf-scheme-details/sbi-gold-fund-202");
      document.getElementById('rectangle').innerHTML = link3;

      let text4 = "Axis Bluechip Fund";
      let link4 = text4.link("https://www.axismf.com/mutual-funds/equity-funds/axis-bluechip-fund/ef-dg/direct");
      document.getElementById('polygon').innerHTML = link4;

      let text5 = "Motilal Oswal Gold and Silver ETFs Fund";
      let link5 = text5.link("https://www.motilaloswalmf.com/mutual-funds/motilal-oswal-gold-and-silver-etfs-fund-of-funds");
      document.getElementById('trap').innerHTML = link5;
    }
    else{
      document.getElementById('entry').innerHTML = "Here are the top funds to invest in -> ";
  //     var hr16 = "HDFC Banking and PSU Debt Fund";
  // var hr17 = "SBI Banking and PSU Debt";
  // var hr18 = "Aditya Birla Sun Life Banking & PSU Debt Fund";
  // var hr19 = "Bandhan Nifty Next 50 Index Fund";
  // var hr20 = "UTI Nifty Next 50 Index Fund";
  let text1 = "HDFC Banking and PSU Debt Fund";
  let link1 = text1.link("https://www.hdfcfund.com/product-solutions/overview/hdfc-banking-and-psu-debt-fund/direct");
  document.getElementById('square').innerHTML = link1;
  
  let text2 = "SBI Banking and PSU Debt";
  let link2 = text2.link("https://www.valueresearchonline.com/funds/10704/sbi-banking-and-psu-fund/");
  document.getElementById('circle').innerHTML = link2;
  
  let text3 = "Aditya Birla Sun Life Banking & PSU Debt Fund";
  let link3 = text3.link("https://mutualfund.adityabirlacapital.com/products/saving-solution/aditya-birla-sun-life-banking-and-psu-debt-fund");
  document.getElementById('rectangle').innerHTML = link3;

  let text4 = "Bandhan Nifty Next 50 Index Fund";
  let link4 = text4.link("https://bandhanmutual.com/mutual-funds/index-funds-and-etfs/bandhan-nifty-50-index-fund/regular");
  document.getElementById('polygon').innerHTML = link4;

  let text5 = "UTI Nifty Next 50 Index Fund";
  let link5 = text5.link("https://www.utimf.com/mutual-funds/uti-nifty-next-50-index-fund");
  document.getElementById('trap').innerHTML = link5;    

    }
  flag = 1;
  }
  else{
    document.getElementById('square').innerHTML = "Please , enter the above required information";
    document.getElementById('circle').innerHTML = "";
  document.getElementById('rectangle').innerHTML = "";
    flag = 1;
  }
  
}}