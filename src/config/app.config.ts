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
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant information',
    'Create restaurant booking',
    'View personal user information',
    'Edit personal user information',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage bookings',
    'Manage user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f04767fc-5676-4bad-91de-be8f76f4cf11',
};
