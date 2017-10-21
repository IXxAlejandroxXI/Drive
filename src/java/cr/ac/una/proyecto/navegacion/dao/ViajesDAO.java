/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.dao;

import cr.ac.una.proyecto.navegacion.domain.Viajes;
import cr.ac.una.proyecto.navegacion.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author aleca
 */
public class ViajesDAO extends HibernateUtil implements IBaseDAO<Viajes, Integer>{

    @Override
    public void save(Viajes o) {
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
    public Viajes merge(Viajes o) throws HibernateException {
        try {
            iniciaOperacion();
            o = (Viajes) getSesion().merge(o);
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
    public void delete(Viajes o) {
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
    public Viajes findById(Integer id) {
        Viajes viajes = null;

        try {
            iniciaOperacion();
            viajes = (Viajes) getSesion().get(Viajes.class, id);
        } finally {
            getSesion().close();
        }
        return viajes;
    }

    @Override
    public List<Viajes> findAll() {
        List<Viajes> listaViajes;
        try {
            iniciaOperacion();//HQL
            listaViajes = getSesion().createQuery("from Viajes").list();
        } finally {
            getSesion().close();
        }

        return listaViajes;
    }
    
}
