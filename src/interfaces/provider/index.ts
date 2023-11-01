import { GetQueryInterface } from 'interfaces';

export interface ProviderInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;

  _count?: {};
}

export interface ProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  tenant_id?: string;
}
