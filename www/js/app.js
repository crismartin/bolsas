var campos = "MarketCapitalization,EBITDA,Name,PERatio,PEGRatio,Symbol,EUR";
var empresas = "'AAPL', 'XOM', 'MSFT', 'GOOG', 'GE', 'CVX', 'IBM', 'PFE'";



$(document).ready(function(){

	console.log("aaaa");
  	$("#acordeon").accordion({
  		active: false,
  		header: "a",
  		collapsible: "true"
  	});

	app.initialize();

	var link = "http://query.yahooapis.com/v1/public/yql?q=select%20"+ campos +
		"%20from yahoo.finance.quotes where symbol in ("+ empresas +
		") order byMarketCapitalization&format=json&env=http://datatables.org/alltables.env";

	var datos = $.getJSON(link, function() {
  		format: "json";
	});

  	datos.done(function(data){
    	console.log( "success" );
    	objeto = data.query.results.quote[0];
    	cuerpo = "<p> EBITDA: " + objeto.EBITDA + "<br>" + 
    			"MarketCapitalization: "+ objeto.MarketCapitalization + "</p>";
    	$("#dato1").html(cuerpo);
  	});

  	datos.fail(function(){
  		console.log("nooooor");
  	});


});