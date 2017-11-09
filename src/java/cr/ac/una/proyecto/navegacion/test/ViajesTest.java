/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;
import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.ViajesDAO;
import cr.ac.una.proyecto.navegacion.domain.Chofer;
import cr.ac.una.proyecto.navegacion.domain.Clientes;
import cr.ac.una.proyecto.navegacion.domain.Vehiculos;
import cr.ac.una.proyecto.navegacion.domain.Viajes;
import java.util.List;
/**
 *
 * @author Linsey
 */
public class ViajesTest {
    
   public static void main(String srg[]) { 
        Viajes vi = new Viajes();
        Chofer ch= new Chofer();
        Clientes ci= new Clientes();
        Vehiculos v= new Vehiculos();
        ViajesDAO viDAO = new ViajesDAO();
        ch.setCedula("123456");
        v.setPlaca("589203");
        ci.setUsuario("Juan");
        vi.setChofer(ch);
        vi.setVehiculos(v);
        vi.setClientes(ci);
        vi.setFecha(new Date());
        vi.setPuntoInicioX(2.3f);
        vi.setPuntoInicioY(2.1f);
        vi.setDuracion(1);
        vi.setMonto(950000);
        vi.setCalificacion(10);
        vi.setUltimoUsuario("Linsey");
        vi.setFechaMod(new Date());
        vi.setPuntoFinalX(2.3f);
        vi.setPuntoFinalY(2.1f);

        viDAO.save(vi);


    }
}
