/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.dao;

import cr.ac.una.proyecto.navegacion.domain.Vehiculos;
import cr.ac.una.proyecto.navegacion.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author aleca
 */
public class VehiculosDAO extends HibernateUtil implements IBaseDAO<Vehiculos, String>{

    @Override
    public void save(Vehiculos o) {
        try {
                iniciaOperacion();
                getSesion().save(o);
                getTransac().commit();
            } catch (HibernateException he) {
                manejaExcepcion(he);
                throw he;
            } finally {
                getSesion().close();
            }
    }

    @Override
    public Vehiculos merge(Vehiculos o) throws HibernateException {
        try {
            iniciaOperacion();
            o = (Vehiculos) getSesion().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Vehiculos o) {
        try {
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        } catch (HibernateException he) {
            manejaExcepcion(he);
            throw he;
        } finally {
            getSesion().close();
        }
    }

    @Override
    public Vehiculos findById(String id) {
        Vehiculos vehiculos = null;

        try {
            iniciaOperacion();
            vehiculos = (Vehiculos) getSesion().get(Vehiculos.class, id);
        } finally {
            getSesion().close();
        }
        return vehiculos;
    }

    @Override
    public List<Vehiculos> findAll() {
        List<Vehiculos> listaVehiculos;
        try {
            iniciaOperacion();//HQL
            listaVehiculos = getSesion().createQuery("from Vehiculos").list();
        } finally {
            getSesion().close();
        }

        return listaVehiculos;
    }
    
}
