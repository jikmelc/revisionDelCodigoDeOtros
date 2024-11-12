package com.codigoOtros;

import java.util.Arrays;
import java.util.Scanner; //importamos el scanner

public class CodigoOtros4 {
	
	// Creamos la clase main para poder debuggear el código
	public static void main (String[] args) {
		Scanner s = new Scanner(System.in); //Indicamos que la entrada sea por consola
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = s.nextLine();
	    //s.nextLine(); // Para limpiar el buffer
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // modificamos jugador 1 por jugador 2
	    // Scanner s2 = new Scanner(); No se pueden declarar dos Scanner
	    String j2 = s.nextLine();
	    //s.nextLine();
	    
	    String[] opciones = {"piedra", "papel", "tijeras"}; // creamos este Array de Strigns para validar que los jugadores sólo ingresen opciones válidas
	    
	    if ((Arrays.asList(opciones).contains(j1)) && (Arrays.asList(opciones).contains(j2)) && j1.equals(j2)) { //eliminé un paréntesis de cierre que sobraba y verificamos las elecciones de los usuarios
	      System.out.println("Empate");
	    } else if ((Arrays.asList(opciones).contains(j1)) && (Arrays.asList(opciones).contains(j2))){ // verificamos las elecciones de los usuarios
	      int g = 2;
	      switch(j1) {
	        case "piedra":
	          if (j2.equals("tijeras")) { // usamos equals() para comparar Strings
	            g = 1;
	          }
	          break; // agregamos el break para interrumpir el flujo del case

	        case "papel":
	          if (j2.equals("piedra")) { // usamos equals() para comparar Strings
	            g = 1;
	          } //Agregué la llave de cierre
	          break; // agregamos el break para interrumpir el flujo del case
	          
	        case "tijeras": // cambiamos tijera por tijeras, dado que esa es la opción que debe ingresar el usuario
	          if (j2.equals("papel")) {
	            g = 1;
	          }
	          break;
	        default:
	      }
	      System.out.println("Gana el jugador " + g);
	    } else { // Sólo se accede si alguna de las elecciones no es válida
	    	System.out.println("Elije una opción válida");
	    }
	    s.close();	// cerramos el Scanner una vez que ya no sea utilizado
	}
    
  
  
}