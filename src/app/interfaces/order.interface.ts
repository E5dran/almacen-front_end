export interface Order {

    id: number;
    status: string;
    destinatario: string;
    descripcion: string;
    cantidad_items: number;
    direccion_entrega: string;
    fecha_creacion: Date;
    fecha_salida: Date;
    fecha_entrada: Date;
    matricula_camion: string;
    categoria: string;


}
