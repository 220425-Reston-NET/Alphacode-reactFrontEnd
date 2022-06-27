export interface Results {
  skip: number;
  limit: number;
  total: number;
}

export interface Meta {
  disclaimer: string;
  terms: string;
  license: string;
  last_updated: string;
  results: Results;
}

export interface Reportduplicate {
  duplicatesource: string;
  duplicatenumb: string;
}

export interface Primarysource {
  reportercountry: string;
  qualification: string;
}

export interface Sender {
  sendertype: string;
  senderorganization: string;
}

export interface Receiver {
  receivertype: string;
  receiverorganization: string;
}

export interface Reaction {
  reactionmeddraversionpt: string;
  reactionmeddrapt: string;
  reactionoutcome: string;
}

export interface Activesubstance {
  activesubstancename: string;
}

export interface Openfda {
  application_number: string[];
  brand_name: string[];
  generic_name: string[];
  manufacturer_name: string[];
  product_ndc: string[];
  product_type: string[];
  route: string[];
  substance_name: string[];
  rxcui: string[];
  spl_id: string[];
  spl_set_id: string[];
  package_ndc: string[];
  unii: string[];
}

export interface Drug {
  drugcharacterization: string;
  medicinalproduct: string;
  drugauthorizationnumb: string;
  drugdosagetext: string;
  drugdosageform: string;
  drugadministrationroute: string;
  drugindication: string;
  drugstartdateformat: string;
  drugstartdate: string;
  drugenddateformat: string;
  drugenddate: string;
  actiondrug: string;
  activesubstance: Activesubstance;
  openfda: Openfda;
}

export interface Summary {
  narrativeincludeclinical: string;
}

export interface Patient {
  patientweight: string;
  patientsex: string;
  reaction: Reaction[];
  drug: [
      {
        drugcharacterization: string;
        medicinalproduct: string;
        drugauthorizationnumb: string;
        drugdosagetext: string;
        drugdosageform: string;
        drugadministrationroute: string;
        drugindication: string;
        drugstartdateformat: string;
        drugstartdate: string;
        drugenddateformat: string;
        drugenddate: string;
        actiondrug: string;
        activesubstance: Activesubstance;
      },
      {
        openfda: Openfda;
      }
  ];
  summary: Summary;
}

export interface Result {
  safetyreportversion: string;
  safetyreportid: string;
  primarysourcecountry: string;
  occurcountry: string;
  transmissiondateformat: string;
  transmissiondate: string;
  reporttype: string;
  serious: string;
  seriousnessdeath: string;
  seriousnesshospitalization: string;
  seriousnessother: string;
  receivedateformat: string;
  receivedate: string;
  receiptdateformat: string;
  receiptdate: string;
  fulfillexpeditecriteria: string;
  companynumb: string;
  duplicate: string;
  reportduplicate: Reportduplicate;
  primarysource: Primarysource;
  sender: Sender;
  receiver: Receiver;
  patient: Patient;
}

export interface RootObject {
  meta: Meta;
  results: Result[];
}
