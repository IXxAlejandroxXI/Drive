/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.bl;

import cr.ac.una.proyecto.navegacion.domain.Chofer;
import java.util.List;

/**
 *
 * @author aleca
 */
public class ChoferBL extends BaseBL implements IBaseBL<Chofer, String>{
    
    public ChoferBL() {
        super();
    }

    @Override
    public void save(Chofer o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Chofer merge(Chofer o) {
        return (Chofer) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Chofer o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Chofer findById(String o) {
        return (Chofer) this.getDao(Chofer.class.getName()).findById(o);
    }

    @Override
    public List<Chofer> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
