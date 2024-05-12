export interface IFood {
   id: string;
   label: string;
   _id: string;
   name: string;
   coordinates: {
      type: string;
      coordinates: number[];
   };
   lstImgs: string[];
   address: string | undefined;
   description: string | undefined;
   rangePrice: number[];
   createdAt: Date;
   distanceInfo?: {
      distanceKiloMetres: {
         value: number;
         text: string;
      };
      estimateTime: {
         value: number;
         text: string;
      };
   } | null;
}
