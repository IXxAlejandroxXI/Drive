package cr.ac.una.proyecto.navegacion.domain;
// Generated 20/10/2017 07:57:09 AM by Hibernate Tools 4.3.1


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Vehiculos generated by hbm2java
 */
public class Vehiculos  implements java.io.Serializable {


     private String placa;
     private Chofer chofer;
     private int ano;
     private String modelo;
     private String color;
     private float puntuacion;
     private String estado;
     private float ubicacionActualX;
     private float ubicacionActualY;
     private Date fecha;
     private String ultimoUsuario;
     private Set<Viajes> viajeses = new HashSet<Viajes>(0);

    public Vehiculos() {
    }

	
    public Vehiculos(String placa, Chofer chofer, int ano, String modelo, String color, float puntuacion, String estado, float ubicacionActualX, float ubicacionActualY, Date fecha, String ultimoUsuario) {
        this.placa = placa;
        this.chofer = chofer;
        this.ano = ano;
        this.modelo = modelo;
        this.color = color;
        this.puntuacion = puntuacion;
        this.estado = estado;
        this.ubicacionActualX = ubicacionActualX;
        this.ubicacionActualY = ubicacionActualY;
        this.fecha = fecha;
        this.ultimoUsuario = ultimoUsuario;
    }
    public Vehiculos(String placa, Chofer chofer, int ano, String modelo, String color, float puntuacion, String estado, float ubicacionActualX, float ubicacionActualY, Date fecha, String ultimoUsuario, Set<Viajes> viajeses) {
       this.placa = placa;
       this.chofer = chofer;
       this.ano = ano;
       this.modelo = modelo;
       this.color = color;
       this.puntuacion = puntuacion;
       this.estado = estado;
       this.ubicacionActualX = ubicacionActualX;
       this.ubicacionActualY = ubicacionActualY;
       this.fecha = fecha;
       this.ultimoUsuario = ultimoUsuario;
       this.viajeses = viajeses;
    }
   
    public String getPlaca() {
        return this.placa;
    }
    
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public Chofer getChofer() {
        return this.chofer;
    }
    
    public void setChofer(Chofer chofer) {
        this.chofer = chofer;
    }
    public int getAno() {
        return this.ano;
    }
    
    public void setAno(int ano) {
        this.ano = ano;
    }
    public String getModelo() {
        return this.modelo;
    }
    
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getColor() {
        return this.color;
    }
    
    public void setColor(String color) {
        this.color = color;
    }
    public float getPuntuacion() {
        return this.puntuacion;
    }
    
    public void setPuntuacion(float puntuacion) {
        this.puntuacion = puntuacion;
    }
    public String getEstado() {
        return this.estado;
    }
    
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public float getUbicacionActualX() {
        return this.ubicacionActualX;
    }
    
    public void setUbicacionActualX(float ubicacionActualX) {
        this.ubicacionActualX = ubicacionActualX;
    }
    public float getUbicacionActualY() {
        return this.ubicacionActualY;
    }
    
    public void setUbicacionActualY(float ubicacionActualY) {
        this.ubicacionActualY = ubicacionActualY;
    }
    public Date getFecha() {
        return this.fecha;
    }
    
    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    public String getUltimoUsuario() {
        return this.ultimoUsuario;
    }
    
    public void setUltimoUsuario(String ultimoUsuario) {
        this.ultimoUsuario = ultimoUsuario;
    }
    public Set<Viajes> getViajeses() {
        return this.viajeses;
    }
    
    public void setViajeses(Set<Viajes> viajeses) {
        this.viajeses = viajeses;
    }




}


