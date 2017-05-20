=ArrayFormula(
	{
		query(
			(
				{
					sort(A2:A1000,1,true),
					row(2:1000)-1
				}
			),
			"select Col1, count(Col2), max(Col2) group by Col1 offset 1 label max(Col2) 'cumulative' ",
			0
		);
		{
			"Total:",COUNTA(A2:A),""
		}
	}
)