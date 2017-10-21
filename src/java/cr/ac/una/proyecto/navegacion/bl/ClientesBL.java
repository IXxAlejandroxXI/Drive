/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.bl;

import cr.ac.una.proyecto.navegacion.domain.Clientes;
import java.util.List;

/**
 *
 * @author aleca
 */
public class ClientesBL extends BaseBL implements IBaseBL<Clientes, String>{
    
    public ClientesBL() {
        super();
    }

    @Override
    public void save(Clientes o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Clientes merge(Clientes o) {
        return (Clientes) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Clientes o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Clientes findById(String o) {
        return (Clientes) this.getDao(Clientes.class.getName()).findById(o);
    }

    @Override
    public List<Clientes> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
