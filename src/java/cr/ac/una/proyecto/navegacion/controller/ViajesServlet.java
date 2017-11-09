/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.controller;

import com.google.gson.Gson;
import cr.ac.una.proyecto.navegacion.bl.ViajesBL;
import cr.ac.una.proyecto.navegacion.domain.Viajes;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
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
public class ViajesServlet extends HttpServlet {
    
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
            Viajes v = new Viajes();

            //Se crea el objeto de la logica de negocio
            ViajesBL vBL = new ViajesBL();

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
                case "consultarViajes":
                    List<Viajes> l = vBL.findAll(Viajes.class.getName());
                    for(int i=0; i<l.size();i++){
                        l.get(i).setCedula(l.get(i).getChofer().getCedula());
                        l.get(i).setUsuario(l.get(i).getClientes().getUsuario());
                        l.get(i).setPlaca(l.get(i).getVehiculos().getPlaca());
                        l.get(i).setChofer(null);
                        l.get(i).setClientes(null);
                        l.get(i).setVehiculos(null);
                    }
                    
                    json = new Gson().toJson(l);
                    out.print(json);         
                    break;
                    
                case "consultarViajesByNumero":
                    //se consulta la persona por ID
                    v = vBL.findById(Integer.parseInt(request.getParameter("idViaje")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(v);
                    out.print(json);
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

    


    

