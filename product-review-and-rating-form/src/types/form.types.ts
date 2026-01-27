export const FormTypes={
  data: {} as {
    name:string;
    sku:string;
    date:string;

    title:string;
    detail:string;
    reviewType:string;

    recommend:string;
    tags:string[];

    wouldBuyAgain:boolean;
    makeReviewPublic:boolean;
    agreeToTerms:boolean;
    
    ratings:{
      overall:number;
      quality:number;
      value:number;
      delivery:number;
      service:number;
    };

  },
  errors:{} as Record<string,string>,
}
