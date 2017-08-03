=ArrayFormula(
  {
    query(A1:D234,"select C, min(D) group by C order by min(D)",1),
    {
      "Country";
      vlookup(query(A1:D234,"select min(D) group by C order by min(D) label min(D) ''",1),{D1:D234,B1:B234},2,0)
    }
  }
)