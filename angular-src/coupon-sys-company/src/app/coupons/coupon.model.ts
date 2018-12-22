export class Coupon {

    constructor( 
        public title? : string, public startDate? : Date, public endDate? : Date,
         public amount? : number, public type?: String, public message?: String,
          public price?: number, public image?: String,public id?: number ) {
        }
}