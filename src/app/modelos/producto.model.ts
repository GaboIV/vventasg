export class Producto {
    constructor(
        public codigo: string,
        public codigoAlt: string,
        public descripcion: string,
        public unidad_id: string,
        public presentacion: string,
        public marca_id: string,
        public almacen_id: string,
        public grupo_id: string,
        public subgrupo_id: string,
        public imagen: string,
        public imagen_url: string,
        public precio1: string,
        public precio2: string,
        public precio3: string,
        public costo: string,
        public alicuota: string,
        public created_at: string,
        public updated_at: string,
        public id?: string
    ) { }
}

