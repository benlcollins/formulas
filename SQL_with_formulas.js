=ArrayFormula(
	query(
		query(
		  indirect(
		   substitute(
		    regexextract(
		    lower(B27&" "&B28)
		    ,"from\s.{1,}\s{0,}"),
		   "from ","") 
		  ),
		"select *",1),
	"select "&
		join(",",
		  ("Col"&match(
		  	split(
		  		substitute(
		  			substitute(
		  				regexextract(
		  					substitute(
		  						trim(
		  							lower(B27&" "&B28)
		  						),
		  					", ",","),
		  				"select\s.{1,}from"),
		  			" from",""),
		  		"select ",""),
		  	","),
		  lower(productHeaders),0)
				+ N("This match function extracts the column numbers for the query function")
			)
		),
	1)
)