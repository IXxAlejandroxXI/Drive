/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.bl;


import cr.ac.una.proyecto.navegacion.dao.ChoferDAO;
import cr.ac.una.proyecto.navegacion.dao.ClientesDAO;
import cr.ac.una.proyecto.navegacion.dao.IBaseDAO;
import cr.ac.una.proyecto.navegacion.dao.VehiculosDAO;
import cr.ac.una.proyecto.navegacion.dao.ViajesDAO;
import java.util.LinkedHashMap;

/**
 *
 * @author chgari
 */
public class BaseBL {
    private final LinkedHashMap<String, IBaseDAO> daos;

    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.proyecto.navegacion.domain.Chofer", new ChoferDAO());
        daos.put("cr.ac.una.proyecto.navegacion.domain.Clientes", new ClientesDAO());
        daos.put("cr.ac.una.proyecto.navegacion.domain.Vehiculos", new VehiculosDAO());
        daos.put("cr.ac.una.proyecto.navegacion.domain.Viajes", new ViajesDAO());
    }
    
    public IBaseDAO getDao(String className){
        return daos.get(className);
    }
}
