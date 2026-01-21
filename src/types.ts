type Types={
    Ratings:{
            overall:number;
            quality:number;
            value:number;
            delivery:number;
            service:number;
        };
        HoverRatings:{
            overall:number;
            quality:number;
            value:number;
            delivery:number;
            service:number;
        } ;
        FormData:{
        name:string;
        sku:string;
        date:string;
        reviewType:string;
        title:string;
        detail:string;
        tags:string[];
        
        recommend:string;
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
        hoverRatings:{
            overall:number;
            quality:number;
            value:number;
            delivery:number;
            service:number;
        };

        
    };



};
/*const Types:{
    
}={
    FormData:{
        name:"",
        sku:"",
        date:"",
        reviewType:"",
        title:"",
        detail:"",
        tags:[],
        ratings:{
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
        },
        recommend:"",
        wouldBuyAgain:false,
        makeReviewPublic:false,
        agreeToTerms:false,
        hoverRatings:{
            overall:0,
            quality:0,
            value:0,
            delivery:0,
            service:0
        },  


    }
};*/
export type {Types};
