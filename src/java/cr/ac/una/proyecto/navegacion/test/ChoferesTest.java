/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.test;

import java.util.Date;
import cr.ac.una.proyecto.navegacion.dao.ChoferDAO;
import cr.ac.una.proyecto.navegacion.domain.Chofer;

/**
 *
 * @author Linsey
 */
public class ChoferesTest {
    
    public static void main(String srg[]){
        Chofer ch= new Chofer();
        ChoferDAO chDAO= new ChoferDAO();
        ch.setCedula("123456");
        ch.setTipoLicencia("B1");
        ch.setFechaNacimiento(new Date());
        ch.setFechaVencimientoLicencia(new Date());
        ch.setChoferActual(false);
        ch.setUltimoUsuario("Linsey");
        ch.setFecha(new Date());
        ch.setAdministrador(true);
     
        
        chDAO.save(ch);
        
        
    }
}
    

