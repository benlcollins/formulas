=ArrayFormula(
  query(
    query(
      indirect(
        regexextract(
          substitute(
            trim(
              lower(
                join(" ",B44:B46)
              )
            ),
          ", ",",")
        ,"from\s(.*?)\s") 
      ),
    "select *",1),
  "select "&
    join(",",
      ("Col"&
        match(
          split(
            regexextract(
              substitute(
                trim(
                  lower(
                    join(" ",B44:B46)
                  )
                ),
              ", ",","),
            "select\s(.*)\sfrom"),
          ","),
      lower(productHeaders),0)
        + N("This formula takes regular SQL syntax and converts for use in Google Sheets. Created by Ben Collins at benlcollins.com")
      )
    )&
    " "&
      regexreplace(
        regexextract(
          substitute(
            trim(
              lower(
                join(" ",B44:B46)
              )
            ),
          ", ",","),
        "where.*"),
      "\s(.*?)\s",
    " Col"&
    match(
      regexextract(
        regexextract(
          substitute(
            trim(
              lower(
                join(" ",B44:B46)
              )
            ),
          ", ",","),
        "where.*"),
      "\s(.*?)\s"),
      productHeaders,0)&" "
    ),
  1)
)





