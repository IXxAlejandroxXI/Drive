/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.dao;

import cr.ac.una.proyecto.navegacion.domain.Clientes;
import cr.ac.una.proyecto.navegacion.utils.HibernateUtil;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.hibernate.HibernateException;

/**
 *
 * @author aleca
 */
public class ClientesDAO extends HibernateUtil implements IBaseDAO<Clientes, String>{

    @Override
    public void save(Clientes o) {
        try {
                iniciaOperacion();
                getSesion().save(o);
                getTransac().commit();
                Thread.sleep(5000);
            } catch (HibernateException he) {
                manejaExcepcion(he);
                throw he;
            } catch (InterruptedException ex) {
            Logger.getLogger(ClientesDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
                getSesion().close();
            }
    }

    @Override
    public Clientes merge(Clientes o) throws HibernateException {
        try {
            iniciaOperacion();
            o = (Clientes) getSesion().merge(o);
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
    public void delete(Clientes o) {
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
    public Clientes findById(String id) {
        Clientes clientes = null;

        try {
            iniciaOperacion();
            clientes = (Clientes) getSesion().get(Clientes.class, id);
        } finally {
            getSesion().close();
        }
        return clientes;
    }

    @Override
    public List<Clientes> findAll() {
        List<Clientes> listaClientes;
        try {
            iniciaOperacion();//HQL
            listaClientes = getSesion().createQuery("from Clientes").list();
        } finally {
            getSesion().close();
        }

        return listaClientes;
    }
    
}
