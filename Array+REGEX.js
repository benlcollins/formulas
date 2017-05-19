// this is actually a formula from Google Sheets to go into a single cell, B2
// it splits up and manipulates objects in JSON-esque format, in cell A2

=split(
 ArrayFormula( 
  regexextract(
   join(",",
    query(split(transpose(split(A2,"}{")),","),"select * where Col1='Owner=Ben Collins' order by Col2 desc limit 1") 
   ),
  "[A-Z][a-z]{1,}\s[A-Z][a-z]{1,}")
 )&"/"&
 ArrayFormula( 
  regexextract( 
   join(",",
    query(split(transpose(split(A2,"}{")),","),"select * where Col1='Owner=Ben Collins' order by Col2 desc limit 1")   
   ),
  "\d{1,2}\s[A-Z][a-z]{1,}\s\d{4}")
 )&"/"&
 ArrayFormula( 
  mid(
   regexextract(
    join(",",
     query(split(transpose(split(A2,"}{")),","),"select * where Col1='Owner=Ben Collins' order by Col2 desc limit 1")
    ),
   "Status.{1,}")
  ,8,20)
 ),
"/")