package com.codigoOtros;

import java.util.Scanner;

public class CodigoOtros5 {
	
	public static void main (String[] args) { // Creamos la clase main para debuggear el código
		Scanner s = new Scanner(System.in); // Faltaba especificar la entrada e importar Scanner
		System.out.print("Introduzca un número: ");
		int c = s.nextInt(); // cambiamos ni por c
		//int c = Integer.parseInt(ni); // pno es necesario parsear, es más óptimo utilizar el scanner para que el usuario ingrese un netero
		
		int afo = 0;
		int noAfo = 0;
		
		while (c > 0) {
			int digito = c % 10;
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afo++;
				c /= 10; // Agregamos esta condición para evitar bucles infinitos cuando se cumpla la condición del if
			} else {
				noAfo++;
				c /= 10;
			}
			if (afo > noAfo) {
				System.out.println("El " + c + " es un número afortunado.");
			} else {
				System.out.println("El " + c + " no es un número afortunado.");
			}
			
		}
	}
	
}
