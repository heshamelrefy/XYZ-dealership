export interface ILead {
  first_name: string;
  last_name: string;
  email: string;
  cell_phone: string;
  home_phone: string;
    lead_id: string;
    duplicate_of: string | null; 
    source: string;
  }