export class LocationModel {
    // Properties of the ServiceModel
    public nlcCode: string;
    public crsCode: string;
    public description: string;
selected: any;
  
    constructor(nlcCode: string, crsCode: string, description: string) {
      this.nlcCode = nlcCode;
      this.crsCode = crsCode;
      this.description = description;
    }
  }
  