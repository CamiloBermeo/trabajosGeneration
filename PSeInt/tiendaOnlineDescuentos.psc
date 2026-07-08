Algoritmo tiendaOnlineDescuentos
	
	Escribir "Ingrese el monto a pagar";
	Leer  monto;
	
	si monto > 500000 Entonces
		montoFinal = monto * 0.85;
		Escribir "a tu coompra se le aplica un descuento del 15%";
		Escribir "Tu monto final es de $" montoFinal;
	FinSi
	si monto >= 200000 y monto <= 500000 Entonces
		montoFinal = monto * 0.90;
		Escribir "a tu coompra se le aplica un descuento del 10%";
		Escribir "Tu monto final es de $" montoFinal;
	SiNo
		Escribir "Para compras menores a $200.000 no aplica descuento";
	FinSi
	
FinAlgoritmo
