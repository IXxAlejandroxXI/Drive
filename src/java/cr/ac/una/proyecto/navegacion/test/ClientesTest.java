/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;
import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.ClientesDAO;
import cr.ac.una.proyecto.navegacion.domain.Clientes;

/**
 *
 * @author Linsey
 */
public class ClientesTest {

    public static void main(String srg[]) {
        Clientes c = new Clientes();
        ClientesDAO cDAO = new ClientesDAO();
        c.setUsuario("Juan");
        c.setContrasena("contrasena");
        c.setNombre("Juan");
        c.setApellidos("Perez");
        c.setCorreo("juanperez@hotmail.com");
        c.setFechaNacimiento(new Date());
        c.setDireccionX(1.1f);
        c.setDireccionY(2.3f);
        c.setTelefonoTrabajo("22598159");
        c.setUltimoUsuario("Linsey");
        c.setFecha(new Date());

        cDAO.merge(c);

    }
}
