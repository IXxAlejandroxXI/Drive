/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.bl;

import cr.ac.una.proyecto.navegacion.domain.Vehiculos;
import java.util.List;

/**
 *
 * @author aleca
 */
public class VehiculosBL extends BaseBL implements IBaseBL<Vehiculos, String>{
    
    public VehiculosBL() {
        super();
    }

    @Override
    public void save(Vehiculos o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Vehiculos merge(Vehiculos o) {
        return (Vehiculos) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Vehiculos o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Vehiculos findById(String o) {
        return (Vehiculos) this.getDao(Vehiculos.class.getName()).findById(o);
    }

    @Override
    public List<Vehiculos> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
