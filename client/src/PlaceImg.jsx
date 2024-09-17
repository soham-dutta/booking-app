// import Image from "./Image.jsx";

// export default function PlaceImg({place,index=0,className=null}) {
//   if (!place.photos?.length) {
//     return '';
//   }
//   if (!className) {
//     className = 'object-cover';
//   }
//   return (
//     <Image className={className} src={place.photos[index]} alt=""/>
//   );
// }

import Image from "./Image.jsx";

export default function PlaceImg({ place, index = 0, className = 'object-cover' }) {
  if (!place.photos || !place.photos.length) {
    return null; // Return null instead of an empty string for better React practice
  }

  return (
    <Image className={className} src={place.photos[index]} alt="" />
  );
}
