/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.controller;

import com.google.gson.Gson;
import cr.ac.una.proyecto.navegacion.bl.ChoferBL;
import cr.ac.una.proyecto.navegacion.domain.Chofer;
import cr.ac.una.proyecto.navegacion.domain.Vehiculos;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Laura
 */
public class ChoferesServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;
            
            //Se crea el objeto Persona
            Chofer p = new Chofer();

            //Se crea el objeto de la logica de negocio
            ChoferBL pBL = new ChoferBL();

            //Se hace una pausa para ver el modal
            Thread.sleep(1000);
            
            
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();
            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {
                case "consultarChoferes":
                     List<Chofer>   x =  pBL.findAll(Chofer.class.getName());
                     for(Chofer e: x){
                         
                         e.setVehiculoses(new LinkedList());
                         e.setViajeses(new LinkedList());
                     }
                    json = new Gson().toJson(x);
                    out.print(json);
                    break;
                case "eliminarChoferes":
                    
                        p.setCedula(request.getParameter("cedula"));
                    
                        //Se elimina el objeto
                        pBL.delete(p);

                        //Se imprime la respuesta con el response
                        out.print("El chofer fue eliminado correctamente");
                 
                    break;
                    
                case "consultarChoferesByID":
                    //se consulta la persona por ID
                    p = pBL.findById(request.getParameter("cedula"));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(p);
                    out.print(json);
                    break;
                    
                    
                case "agregarChofer": case "modificarChofer":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    p.setCedula(request.getParameter("cedula"));
                    p.setTipoLicencia(request.getParameter("tipoLicencia"));
                    p.setFechaNacimiento(new Date());
                    p.setFechaVencimientoLicencia(new Date());
                    
                    String aux = request.getParameter("choferActual");
                    if(aux.equals("Si"))
                        p.setChoferActual(true);
                    else
                        p.setChoferActual(false);
                    
                    p.setUltimoUsuario(request.getParameter("ultimoUsuario"));
                    p.setFecha(new Date());
                    
                    String aux1 = request.getParameter("administrador");
                    if(aux1.equals("Si"))
                        p.setAdministrador(true);
                    else
                            p.setAdministrador(false);

                    //Guardar Correctamente en la base de datos
//                    String fechatxt = request.getParameter("fechanacimiento");
//                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
//                    Date date = format.parse(fechatxt);


                    if(accion.equals("agregarChofer")){ //es insertar personas
                        //Se guarda el objeto
                        pBL.save(p);

                        //Se imprime la respuesta con el response
                        out.print("C~El Chofer fue ingresado correctamente");
                        
                    }else{//es modificar persona
                        //Se guarda el objeto
                        pBL.merge(p);

                        //Se imprime la respuesta con el response
                        out.print("C~El Chofer fue modificado correctamente");
                    }
                    
                    break;
                    
                default:
                    out.print("E~No se indico la acción que se desea realizar");
                    break;
            }

        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
