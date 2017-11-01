/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;
import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.VehiculosDAO;
import cr.ac.una.proyecto.navegacion.domain.Chofer;
import cr.ac.una.proyecto.navegacion.domain.Vehiculos;

/**
 *
 * @author Linsey
 */
public class VehiculosTest {
    
       public static void main(String srg[]) {
        Chofer ch= new Chofer();
        ch.setCedula("123456");
        Vehiculos v = new Vehiculos();
        VehiculosDAO vDAO = new VehiculosDAO();
        v.setPlaca("444444");
        v.setAno(1996);
        v.setCedula("123456");
        v.setModelo("PRUEBA");
        v.setColor("Gris");
        v.setPuntuacion(5.0f);
        v.setEstado("Genial");
        v.setUbicacionActualX(1.1f);
        v.setUbicacionActualY(2.1f);
        v.setFecha(new Date());
        v.setUltimoUsuario("Linsey");
      
        vDAO.save(v);

    }
}

    
