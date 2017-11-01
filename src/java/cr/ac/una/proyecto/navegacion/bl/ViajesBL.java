/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.bl;

import cr.ac.una.proyecto.navegacion.domain.Viajes;
import java.util.List;

/**
 *
 * @author aleca
 */
public class ViajesBL extends BaseBL implements IBaseBL<Viajes, Integer>{
    
    public ViajesBL() {
        super();
    }

    @Override
    public void save(Viajes o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Viajes merge(Viajes o) {
        return (Viajes) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Viajes o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Viajes findById(Integer o) {
        return (Viajes) this.getDao(Viajes.class.getName()).findById(o);
    }

    @Override
    public List<Viajes> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
