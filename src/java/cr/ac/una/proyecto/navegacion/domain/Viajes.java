package cr.ac.una.proyecto.navegacion.domain;
// Generated 20/10/2017 07:57:09 AM by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Viajes generated by hbm2java
 */
public class Viajes  implements java.io.Serializable {


     private Integer numero;
     private Chofer chofer;
     private Clientes clientes;
     private Vehiculos vehiculos;
     private Date fecha;
     private float puntoInicioX;
     private float puntoInicioY;
     private int duracion;
     private double monto;
     private int calificacion;
     private String ultimoUsuario;
     private Date fechaMod;
     private float puntoFinalX;
     private float puntoFinalY;
     private String usuario;
     private String placa;
     private String cedula;

    public Viajes() {
        this.numero = 0;
    }

    public Viajes(Chofer chofer, Clientes clientes, Vehiculos vehiculos, Date fecha, float puntoInicioX, float puntoInicioY, int duracion, double monto, int calificacion, String ultimoUsuario, Date fechaMod, float puntoFinalX, float puntoFinalY, String usuario, String cedula, String placa) {
       this.chofer = chofer;
       this.clientes = clientes;
       this.vehiculos = vehiculos;
       this.fecha = fecha;
       this.puntoInicioX = puntoInicioX;
       this.puntoInicioY = puntoInicioY;
       this.duracion = duracion;
       this.monto = monto;
       this.calificacion = calificacion;
       this.ultimoUsuario = ultimoUsuario;
       this.fechaMod = fechaMod;
       this.puntoFinalX = puntoFinalX;
       this.puntoFinalY = puntoFinalY;
       this.usuario=usuario;
       this.cedula=cedula;
       this.placa=placa;
    }
   
    public Integer getNumero() {
        return this.numero;
    }
    
    public void setNumero(Integer numero) {
        this.numero = numero;
    }
    public Chofer getChofer() {
        return this.chofer;
    }
    
    public void setChofer(Chofer chofer) {
        this.chofer = chofer;
    }
    public Clientes getClientes() {
        return this.clientes;
    }
    
    public void setClientes(Clientes clientes) {
        this.clientes = clientes;
    }
    public Vehiculos getVehiculos() {
        return this.vehiculos;
    }
    
    public void setVehiculos(Vehiculos vehiculos) {
        this.vehiculos = vehiculos;
    }
    public Date getFecha() {
        return this.fecha;
    }
    
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public float getPuntoInicioX() {
        return this.puntoInicioX;
    }
    
    public void setPuntoInicioX(float puntoInicioX) {
        this.puntoInicioX = puntoInicioX;
    }
    public float getPuntoInicioY() {
        return this.puntoInicioY;
    }
    
    public void setPuntoInicioY(float puntoInicioY) {
        this.puntoInicioY = puntoInicioY;
    }
    public int getDuracion() {
        return this.duracion;
    }
    
    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }
    public double getMonto() {
        return this.monto;
    }
    
    public void setMonto(double monto) {
        this.monto = monto;
    }
    public int getCalificacion() {
        return this.calificacion;
    }
    
    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }
    public String getUltimoUsuario() {
        return this.ultimoUsuario;
    }
    
    public void setUltimoUsuario(String ultimoUsuario) {
        this.ultimoUsuario = ultimoUsuario;
    }
    public Date getFechaMod() {
        return this.fechaMod;
    }
    
    public void setFechaMod(Date fechaMod) {
        this.fechaMod = fechaMod;
    }
    public float getPuntoFinalX() {
        return this.puntoFinalX;
    }
    
    public void setPuntoFinalX(float puntoFinalX) {
        this.puntoFinalX = puntoFinalX;
    }
    public float getPuntoFinalY() {
        return this.puntoFinalY;
    }
    
    public void setPuntoFinalY(float puntoFinalY) {
        this.puntoFinalY = puntoFinalY;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }




}


