interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member', 'Travel Agent', 'Administrator'],
  tenantName: 'Provider',
  applicationName: 'Travel with no boundaries',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View provider information'],
  ownerAbilities: ['Manage user information', 'Manage provider information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3b7a6905-9880-43fe-ac63-ca5928c0a939',
};
