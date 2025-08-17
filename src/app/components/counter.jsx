"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useCartActions } from "ecom-user-sdk/cart";

export default function Counter({ qtn, cartId, onQuantityChange }) {
  const [count, setCount] = useState(qtn);
  const { updateQuantity } = useCartActions();
  // Debounced update function
  const debouncedUpdate = useCallback(
    debounce(async (newCount) => {
      const { success, error } = await updateQuantity({
        cart_id: cartId,
        quantity: newCount,
      });

      if (!success) {
        console.error("Failed to update quantity:", error);
        // Optionally: show error message to user
      }
    }, 500), // wait 500ms after last click
    [cartId]
  );

  const changeQuantity = (newCount) => {
    setCount(newCount);
    onQuantityChange?.(newCount);
    debouncedUpdate(newCount);
  };

  const increment = () => changeQuantity(count + 1);
  const decrement = () => {
    if (count > 0) changeQuantity(count - 1);
  };

  return (
    <div className="qty-icons">
      <button
        onClick={decrement}
        className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white minus"
      >
        -
      </button>
      <input
        min="0"
        name="quantity"
        value={count}
        type="number"
        readOnly
        className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1"
      />
      <button
        onClick={increment}
        className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white plus"
      >
        +
      </button>
    </div>
  );
}

/**
 * Simple debounce helper
 */
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// "use client";
// import React, { useState } from "react";

// export default function Counter({ qtn }) {
//   let [count, setCount] = useState(qtn);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <>
//       <div className="qty-icons">
//         <button
//           onClick={() => decrement()}
//           className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white minus"
//         >
//           -
//         </button>
//         <input
//           min="0"
//           name="quantity"
//           value={count}
//           type="number"
//           readOnly
//           className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1"
//         />
//         <button
//           onClick={() => increment()}
//           className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white plus"
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }
