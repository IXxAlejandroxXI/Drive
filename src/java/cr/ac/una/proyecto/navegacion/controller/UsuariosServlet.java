/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.proyecto.navegacion.controller;

import com.google.gson.Gson;
import cr.ac.una.proyecto.navegacion.bl.ChoferBL;
import cr.ac.una.proyecto.navegacion.bl.ClientesBL;
import cr.ac.una.proyecto.navegacion.domain.Chofer;
import cr.ac.una.proyecto.navegacion.domain.Clientes;
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
 * @author chgari
 */
public class UsuariosServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            String json;
            
            //Se crea el objeto Persona
            Clientes c = new Clientes();

            //Se crea el objeto de la logica de negocio
            ClientesBL cBL = new ClientesBL();
            
            Chofer p = new Chofer();

            //Se crea el objeto de la logica de negocio
            ChoferBL pBL = new ChoferBL();
            //Se hace una pausa para ver el modal
            Thread.sleep(1000);
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            String usuario, password;
            switch (accion) {
                case "validarUsuario":
                    usuario = request.getParameter("usuario");
                    password = request.getParameter("password");
                    
                    c = cBL.findById(usuario);
                    p = pBL.findById(usuario);
                    if (c.getUsuario().equals(usuario) || p.getCedula().equals(usuario)) {
                        if ((c.getUsuario().equals(usuario)&& c.getContrasena().equals(password)) || (p.getCedula().equals(usuario) && password.equals("contraseña"))) {
                            HttpSession session=request.getSession(true); 
                            session.setAttribute("usuario", usuario); 
                            session.setAttribute("loginStatus", "login"); 
                            if (c.getUsuario().equals(usuario)) {
                                session.setAttribute("tipo", "Administrador"); 
                            }else{
                                session.setAttribute("tipo", "Normal"); 
                            }
                            out.print("C~Validación correcta... espere esta siendo redireccionado");
                        }else{
                            out.print("E~Usuario o contraseña invalidos");
                        }
                    }else{
                        out.print("E~Usuario o contraseña invalidos");
                    }
                    break;
                    
                default:
                    out.print("E~No se indico la acción que se desea realizare");
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
