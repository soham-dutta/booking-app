// export default function Image({src,...rest}) {
//   src = src && src.includes('https://')
//     ? src
//     : 'http://localhost:4000/uploads/'+src;
//   return (
//     <img {...rest} src={src} alt={''} />
//   );
// }

export default function Image({ src, ...rest }) {
  // Check if the src includes a complete URL, otherwise prepend the localhost URL
  src = src?.includes('https://') ? src : `http://localhost:4000/uploads/${src}`;
  
  return (
    <img {...rest} src={src} alt="" />
  );
}
