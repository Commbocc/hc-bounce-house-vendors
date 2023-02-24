interface Vendor {
  id: string;
  fields: {
    Name: string;
    PhoneNumber: string;
    ExpirationDate: Date;
    Section: any;
    Status: string;
  };
}
