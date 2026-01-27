export interface Ratings{
            overall:number;
            quality:number;
            value:number;
            delivery:number;
            service:number;
};
export interface HoverRatings{
            overall:number;
            quality:number;
            value:number;
            delivery:number;
            service:number;
} ;
export interface FormData{
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

        ratings:Ratings;
}
export interface FormErrors{
    [key:string]:string;
}