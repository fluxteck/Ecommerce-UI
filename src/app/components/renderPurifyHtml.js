// import DOMPurify from "dompurify";

// export const RenderSafeHTML = ({ html }) => {
//   const cleanHTML = DOMPurify.sanitize(html);
//   return (
//     <p
//       className="text-slate-400 mt-2"
//       dangerouslySetInnerHTML={{ __html: cleanHTML }}
//     />
//   );
// };

import DOMPurify from "isomorphic-dompurify";

export const RenderSafeHTML = ({ html }) => {
  const cleanHTML = DOMPurify.sanitize(html || "");
  return (
    <p
      className="text-slate-400 mt-2"
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
};
