package cr.ac.una.proyecto.navegacion.domain;
// Generated 20/10/2017 07:57:09 AM by Hibernate Tools 4.3.1


import java.util.Date;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

/**
 * Clientes generated by hbm2java
 */
public class Clientes  implements java.io.Serializable {


     private String usuario;
     private String contrasena;
     private String nombre;
     private String apellidos;
     private String correo;
     private Date fechaNacimiento;
     private float direccionX;
     private float direccionY;
     private String telefonoTrabajo;
     private String ultimoUsuario;
     private Date fecha;
     private List<Viajes> viajeses = new LinkedList();

    public Clientes() {
    }

	
    public Clientes(String usuario, String contrasena, String nombre, String apellidos, String correo, Date fechaNacimiento, float direccionX, float direccionY, String telefonoTrabajo, String ultimoUsuario, Date fecha) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;
        this.direccionX = direccionX;
        this.direccionY = direccionY;
        this.telefonoTrabajo = telefonoTrabajo;
        this.ultimoUsuario = ultimoUsuario;
        this.fecha = fecha;
    }
    public Clientes(String usuario, String contrasena, String nombre, String apellidos, String correo, Date fechaNacimiento, float direccionX, float direccionY, String telefonoTrabajo, String ultimoUsuario, Date fecha, List viajeses) {
       this.usuario = usuario;
       this.contrasena = contrasena;
       this.nombre = nombre;
       this.apellidos = apellidos;
       this.correo = correo;
       this.fechaNacimiento = fechaNacimiento;
       this.direccionX = direccionX;
       this.direccionY = direccionY;
       this.telefonoTrabajo = telefonoTrabajo;
       this.ultimoUsuario = ultimoUsuario;
       this.fecha = fecha;
       this.viajeses = viajeses;
    }
   
    public String getUsuario() {
        return this.usuario;
    }
    
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getContrasena() {
        return this.contrasena;
    }
    
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getNombre() {
        return this.nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidos() {
        return this.apellidos;
    }
    
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getCorreo() {
        return this.correo;
    }
    
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public Date getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    
    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public float getDireccionX() {
        return this.direccionX;
    }
    
    public void setDireccionX(float direccionX) {
        this.direccionX = direccionX;
    }
    public float getDireccionY() {
        return this.direccionY;
    }
    
    public void setDireccionY(float direccionY) {
        this.direccionY = direccionY;
    }
    public String getTelefonoTrabajo() {
        return this.telefonoTrabajo;
    }
    
    public void setTelefonoTrabajo(String telefonoTrabajo) {
        this.telefonoTrabajo = telefonoTrabajo;
    }
    public String getUltimoUsuario() {
        return this.ultimoUsuario;
    }
    
    public void setUltimoUsuario(String ultimoUsuario) {
        this.ultimoUsuario = ultimoUsuario;
    }
    public Date getFecha() {
        return this.fecha;
    }
    
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public List getViajeses() {
        return this.viajeses;
    }
    
    public void setViajeses(List viajeses) {
        this.viajeses = viajeses;
    }




}

