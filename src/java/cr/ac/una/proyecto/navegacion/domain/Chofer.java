package cr.ac.una.proyecto.navegacion.domain;
// Generated 20/10/2017 07:57:09 AM by Hibernate Tools 4.3.1


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Chofer generated by hbm2java
 */
public class Chofer  implements java.io.Serializable {


     private String cedula;
     private String tipoLicencia;
     private Date fechaNacimiento;
     private Date fechaVencimientoLicencia;
     private boolean choferActual;
     private String ultimoUsuario;
     private Date fecha;
     private boolean administrador;
     private Set<Vehiculos> vehiculoses = new HashSet<Vehiculos>(0);
     private Set<Viajes> viajeses = new HashSet<Viajes>(0);

    public Chofer() {
    }

	
    public Chofer(String cedula, String tipoLicencia, Date fechaNacimiento, Date fechaVencimientoLicencia, boolean choferActual, String ultimoUsuario, Date fecha, boolean administrador) {
        this.cedula = cedula;
        this.tipoLicencia = tipoLicencia;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaVencimientoLicencia = fechaVencimientoLicencia;
        this.choferActual = choferActual;
        this.ultimoUsuario = ultimoUsuario;
        this.fecha = fecha;
        this.administrador = administrador;
    }
    public Chofer(String cedula, String tipoLicencia, Date fechaNacimiento, Date fechaVencimientoLicencia, boolean choferActual, String ultimoUsuario, Date fecha, boolean administrador, Set<Vehiculos> vehiculoses, Set<Viajes> viajeses) {
       this.cedula = cedula;
       this.tipoLicencia = tipoLicencia;
       this.fechaNacimiento = fechaNacimiento;
       this.fechaVencimientoLicencia = fechaVencimientoLicencia;
       this.choferActual = choferActual;
       this.ultimoUsuario = ultimoUsuario;
       this.fecha = fecha;
       this.administrador = administrador;
       this.vehiculoses = vehiculoses;
       this.viajeses = viajeses;
    }
   
    public String getCedula() {
        return this.cedula;
    }
    
    public void setCedula(String cedula) {
        this.cedula = cedula;
    }
    public String getTipoLicencia() {
        return this.tipoLicencia;
    }
    
    public void setTipoLicencia(String tipoLicencia) {
        this.tipoLicencia = tipoLicencia;
    }
    public Date getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    
    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public Date getFechaVencimientoLicencia() {
        return this.fechaVencimientoLicencia;
    }
    
    public void setFechaVencimientoLicencia(Date fechaVencimientoLicencia) {
        this.fechaVencimientoLicencia = fechaVencimientoLicencia;
    }
    public boolean isChoferActual() {
        return this.choferActual;
    }
    
    public void setChoferActual(boolean choferActual) {
        this.choferActual = choferActual;
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
    public boolean isAdministrador() {
        return this.administrador;
    }
    
    public void setAdministrador(boolean administrador) {
        this.administrador = administrador;
    }
    public Set<Vehiculos> getVehiculoses() {
        return this.vehiculoses;
    }
    
    public void setVehiculoses(Set<Vehiculos> vehiculoses) {
        this.vehiculoses = vehiculoses;
    }
    public Set<Viajes> getViajeses() {
        return this.viajeses;
    }
    
    public void setViajeses(Set<Viajes> viajeses) {
        this.viajeses = viajeses;
    }




}

