=iferror(
  if($E$5="All Payments",
    query(
      if(B59="All Categories",
        filter($X$11:$AD,abs($AB$11:$AB) > $B$60,$Y$11:$Y=(eomonth(today(),-1)+1)),
        filter($X$11:$AD,$AA$11:$AA = $B$59,abs($AB$11:$AB) > $B$60,$Y$11:$Y=(eomonth(today(),-1)+1))
      ),
    "select Col1,Col4,Col5,Col3"),
    query(
      if(B59="All Categories",
        filter($X$11:$AD,abs($AB$11:$AB) > $B$60,$Y$11:$Y=(eomonth(today(),-1)+1),$AD$11:$AD=$E$5),
        filter($X$11:$AD,$AA$11:$AA = $B$59,abs($AB$11:$AB) > $B$60,$Y$11:$Y=(eomonth(today(),-1)+1),$AD$11:$AD=$E$5)
      ),
    "select Col1,Col4,Col5,Col3")),
"No transactions found")