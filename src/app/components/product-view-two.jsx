"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductViewTwo({ product }) {
  const images = product?.product_images || [];

  // Default active image is the first one (index 0)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

return (
  <div className="product-imgs flex flex-col w-full">
    {/* Main active image (large, full-width, responsive) */}
    <div className="img-display w-full shadow dark:shadow-gray-800">
      <div className="img-showcase w-full flex justify-center items-center bg-white">
        {images.length > 0 && (
          <Image
            src={images[activeIndex].url}
            alt={`Main product image ${activeIndex + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
            className="block"
          />
        )}
      </div>
    </div>

    {/* Thumbnails grid (responsive, no horizontal scroll) */}
    <div className="mt-4">
      <ul className="
        img-select 
        grid gap-3 list-none 
        grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8
      ">
        {images.map((item, index) => (
          <li key={item.id || index}>
            <button
              type="button"
              onClick={() => handleImageClick(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={`block rounded-md p-px w-full focus:outline-none ${
                index === activeIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <Image
                src={item.url}
                alt={`Product thumbnail ${index + 1}`}
                width={120}
                height={120}
                sizes="120px"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                className="rounded-sm"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


}

// 'use client'
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function ProductViewTwo({product}){
//     let [activeImage, setActiveImage] = useState(1)
//     let image = [
//         {
//             id:1,
//             image:'/images/shop/mens-jecket.jpg'
//         },
//         {
//             id:2,
//             image:'/images/shop/mens-jecket-3.jpg'
//         },
//         {
//             id:3,
//             image:'/images/shop/mens-jecket-left.jpg'
//         },
//         {
//             id:4,
//             image:'/images/shop/mens-jecket-back.jpg'
//         },
//         {
//             id:5,
//             image:'/images/shop/mens-jecket-4.jpg'
//         },
//     ]

//     const imageShow = (index) =>{
//         setActiveImage(index)
//     }
//     return(
//         <ul className="product-imgs flex list-none">
//             <li className="w-1/6">
//                 <ul className="img-select list-none">
//                     {image.map((item,index)=>{
//                         return(
//                             <li className="p-px" key={index}>
//                                 <Link href="#" scroll={false}>
//                                     <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-800 w-full h-auto" alt="" onClick={()=>imageShow(item.id)}/>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </li>

//             <li className="img-display shadow dark:shadow-gray-800 m-px w-5/6">
//                 <div className="img-showcase flex w-full duration-500">
//                     {activeImage === 1 && (
//                         <Image src='/images/shop/mens-jecket.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
//                     )}
//                     {activeImage === 2 && (
//                         <Image src='/images/shop/mens-jecket-3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
//                     )}
//                     {activeImage === 3 && (
//                         <Image src='/images/shop/mens-jecket-left.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
//                     )}
//                     {activeImage === 4 && (
//                         <Image src='/images/shop/mens-jecket-back.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
//                     )}
//                     {activeImage === 5 && (
//                         <Image src='/images/shop/mens-jecket-4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
//                     )}
//                 </div>
//             </li>
//         </ul>
//     )
// }
