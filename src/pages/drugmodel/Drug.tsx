export interface Drug{
    name : string;
    // id: number;
    drugcharacterization : string;
    medicinalproduct: string;
    actiondrug: string
    product_type : []
    route :[]
    brand_name : []
    manufacturer_name : []
    drugdosagetext: []

    // -----
    safetyreportversion : string;
    drug : {
        medicinalproduct: string,
        drugdosagetext: string,

    }
    informations: {
        drug_dose : string,
        published: string
    };
    primarysource:{
        reportercountry: string
    }
    types: {
        type: {
            name: string
        }
    }[]
}