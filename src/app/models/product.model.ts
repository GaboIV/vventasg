export class Product {
    constructor(
        public code: string,
        public altcode: string,
        public description: string,
        public unit_id: string,
        public presentation: string,
        public brand_id: string,
        public almac_id: string,
        public group_id: string,
        public subgroup_id: string,
        public image: string,
        public image_url: string,
        public prize_1: string,
        public prize_2: string,
        public prize_3: string,
        public cost: string,
        public aliquot: string,
        public command?: number,
        public cash?: number,
        public created_at?: string,
        public updated_at?: string,
        public productoscomanda?: any,
        public productocaja?: any,
        public id?: string
    ) { }
}

