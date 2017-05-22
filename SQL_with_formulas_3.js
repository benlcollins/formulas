=ArrayFormula(
  query(
    query(
      indirect(
        regexextract(
          substitute(
            trim(
              lower(
                join(" ",B90:B92)
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
                    join(" ",B90:B92)
                  )
                ),
              ", ",","),
            "select\s(.*)\sfrom"),
          ","),
      lower(productHeaders),0)
        + N("This formula takes regular SQL syntax input and 
          converts for use with the QUERY function in Google Sheets. 
          Created by Ben Collins at benlcollins.com")
      )
    )&
    " "&
      concatenate(
        regexreplace(
          regexextract(
            regexextract(
              substitute(
                trim(
                  lower(
                    join(" ",B90:B92)
                  )
                ),
              ", ",","),
            "where.*"),
          "(.*?)\s(?:and|or)"),
        "\s(.*?)\s",
      " Col"&
      match(
        regexextract(
          regexextract(
            regexextract(
              substitute(
                trim(
                  lower(
                    join(" ",B90:B92)
                  )
                ),
              ", ",","),
            "where.*"),
          "(.*?)\s(?:and|or)"),
        "\s(.*?)\s"),productHeaders,0)
      &" "),
      " ",
      regexreplace(
        regexextract(
          regexextract(
            substitute(
              trim(
                lower(
                  join(" ",B90:B92)
                )
              ),
            ", ",","),
          "where.*"),
        "(?:and|or).*"),
      "\s(.*?)\s",
      " Col"&
      match(
        regexextract(
          regexextract(
            regexextract(
              substitute(
                trim(
                  lower(
                    join(" ",B90:B92)
                  )
                ),
              ", ",","),
            "where.*"),
          "(?:and|or).*"),
        "\s(.*?)\s"),productHeaders,0)
      &" ")
    ),
  1)
)



