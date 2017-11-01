/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;
import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.ViajesDAO;
import cr.ac.una.proyecto.navegacion.domain.Viajes;
/**
 *
 * @author Linsey
 */
public class ViajesTest {
    
   public static void main(String srg[]) { //La misma duda que en vehiculos
        Viajes vi = new Viajes();
        ViajesDAO viDAO = new ViajesDAO();
        vi.setNumero(1);
        vi.setFecha(new Date());
        vi.setDuracion(1);
        vi.setMonto(950000);
        vi.setCalificacion(10);
        vi.setUltimoUsuario("Linsey");
        vi.setFecha(new Date());

        viDAO.save(vi);

    }
}
