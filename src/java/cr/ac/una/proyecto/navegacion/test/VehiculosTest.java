/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;
import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.VehiculosDAO;
import cr.ac.una.proyecto.navegacion.domain.Vehiculos;

/**
 *
 * @author Linsey
 */
public class VehiculosTest {
    
       public static void main(String srg[]) {
        Vehiculos v = new Vehiculos();
        VehiculosDAO vDAO = new VehiculosDAO();
        v.setPlaca("111111");
     //   v.setChofer("123456"); Averiguar esto
        v.setAno(1996);
        v.setModelo("Sportage");
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

    
