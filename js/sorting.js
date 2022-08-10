const sortedZToA = () => {
   console.log(sortedZToA);
   for (let i = 0; i < all_brands.length; i++) {
     for (let j = 0; j < all_brands.length;j++){
       if (all_brands[i].name < all_brands[j].name) {
         let temp = all_brands[i];
         all_brands[i] = all_brands[j];
         all_brands[j] = temp;
       }
     }
   }
   console.log(all_brands);
 };
 // console.log(sortedZToA);

 // console.log("sortedAToZ");
 const sortedAToZ = () => {
   console.log("sortedAToZ");
   // console.log(all_brands);
   for (let i = 0; i < all_brands.length; i++) {
     for (let j = 0; j < all_brands.length;j++){
       if (all_brands[i].name > all_brands[j].name) {
         let temp = all_brands[i];
         all_brands[i] = all_brands[j];
         all_brands[j] = temp;
       }
     }
   }
   // all_brands
   //   .sort((a, b) => {
   //     return a.name < b.name ? 1 : -1;
   //   })
   //   .reverse();
   console.log(all_brands);
 };

 const sortedByPriceAscending = () => {
   // console.log(all_brands);
   console.log("sortedByPriceAscending");
   for (let i = 0; i < all_brands.length; i++) {
     for (let j = 0; j < all_brands.length;j++){
       if (all_brands[i].price < all_brands[j].price) {
         let temp = all_brands[i];
         all_brands[i] = all_brands[j];
         all_brands[j] = temp;
       }
     }
   }

   console.log(all_brands);
 };

 const sortedByPriceDescending = () => {
   // console.log(all_brands);
   console.log("sortedByPriceDescending");
   for (let i = 0; i < all_brands.length; i++) {
     for (let j = 0; j < all_brands.length;j++){
       if (all_brands[i].price > all_brands[j].price) {
         let temp = all_brands[i];
         all_brands[i] = all_brands[j];
         all_brands[j] = temp;
       }
     }
   }
   console.log(all_brands);
 };