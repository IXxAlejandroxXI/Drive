/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.controller;

import com.google.gson.Gson;
import cr.ac.una.proyecto.navegacion.bl.VehiculosBL;
import cr.ac.una.proyecto.navegacion.domain.Vehiculos;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Linsey
 */
public class VehiculosServlet extends HttpServlet{
    
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
            Vehiculos v = new Vehiculos();

            //Se crea el objeto de la logica de negocio
            VehiculosBL vBL = new VehiculosBL();

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
                case "consultarVehiculos":
                    json = new Gson().toJson(vBL.findAll(Vehiculos.class.getName()));
                    out.print(json);         
                    break;
                case "eliminarVehiculos":
                    
                        v.setPlaca(request.getParameter("idVehiculo"));
                    
                        //Se elimina el objeto
                        vBL.delete(v);

                        //Se imprime la respuesta con el response
                        out.print("El vehiculo fue eliminado correctamente");
                 
                    break;
                    
                case "consultarVehiculosByPlaca":
                    //se consulta la persona por ID
                    v = vBL.findById(request.getParameter("idVehiculo"));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(v);
                    out.print(json);
                    break;
                    
                    
                case "agregarVehiculo": case "modificarVehiculo":

                    //Se llena el objeto con los datos enviados por AJAX por el metodo post
                    v.setAno(Integer.parseInt(request.getParameter("ano")));
                    v.setModelo(request.getParameter("modelo"));
                    v.setPlaca(request.getParameter("placa"));
                    v.setColor(request.getParameter("color"));
                    v.setPuntuacion(Float.parseFloat(request.getParameter("puntuacion")+"f"));
                    v.setEstado(request.getParameter("estado"));
                    v.setUbicacionActualX(Float.parseFloat(request.getParameter("ubicacionActualX")+"f"));
                    v.setUbicacionActualY(Float.parseFloat(request.getParameter("ubicacionActualY")+"f"));
                    v.setCedula(request.getParameter("cedula"));
                    
                     //Guardar Correctamente en la base de datos la fecha
                    v.setFecha(new Date());
                    String aux= request.getParameter("ultimoUsuario");
                    v.setUltimoUsuario(request.getParameter("ultimoUsuario"));
                   

                    if(accion.equals("agregarVehiculo")){ //es insertar personas
                        //Se guarda el objeto
                        vBL.save(v);

                        //Se imprime la respuesta con el response
                        out.print("C~El vehiculo fue ingresado correctamente");
                        
                    }else{//es modificar persona
                        //Se guarda el objeto
                        vBL.merge(v);

                        //Se imprime la respuesta con el response
                        out.print("C~El vehiculo fue modificado correctamente");
                    }
                    
                    break;
                    
                default:
                    out.print("E~No se indico la acción que se desea realizarze");
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

    

