import { AddressData, ContactData } from '@/components/FooterTypes';

export const contactInfo = {
  copyright: "Project Office BIOMASS",
  contact: {
    address: {
      company: "Max-Planck Institute for Biogeochemistry",
      street: "Hans-Knöll Str. 10",
      zip: "07745",
      city: "Jena",
      state: "Thuringia",
      country: "Germany"
    } as AddressData,

    data: {
      contacts: [
        {
          name: "Project Office BIOMASS",
          position: "Nuno Carvalhais / Nicole Börner",
          email: "nboerner@bgc-jena.mpg.de"
        },
        // {
        //   name: "Alice",
        //   email: "alice.doe@mpg.de"
        // },
      ],
      // mainEmail: "contact@mpg.de"
    } as ContactData
  }
}