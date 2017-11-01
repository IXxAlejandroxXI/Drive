/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.dao;

import cr.ac.una.proyecto.navegacion.domain.Chofer;
import cr.ac.una.proyecto.navegacion.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author aleca
 */
public class ChoferDAO extends HibernateUtil implements IBaseDAO<Chofer, String>{

    @Override
    public void save(Chofer o) {
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
    public Chofer merge(Chofer o) throws HibernateException {
        try {
            iniciaOperacion();
            o = (Chofer) getSesion().merge(o);
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
    public void delete(Chofer o) {
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
    public Chofer findById(String id) {
        Chofer choferes = null;

        try {
            iniciaOperacion();
            choferes = (Chofer) getSesion().get(Chofer.class, id);
        } finally {
            getSesion().close();
        }
        return choferes;
    }

    @Override
    public List<Chofer> findAll() {
        List<Chofer> listaChoferes;
        try {
            iniciaOperacion();//HQL
            listaChoferes = getSesion().createQuery("from Chofer").list();
        } finally {
            getSesion().close();
        }

        return listaChoferes;
    }
    
}
