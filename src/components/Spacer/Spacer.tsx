import { forwardRef } from "react";

export const Spacer = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, role = "presentation", ...rest }, ref) => {
  return (
    <div role={role} className={className} {...rest} ref={ref}>
      {children}
    </div>
  );
});

// import React from "react";

// export function Spacer(
//   {
//     className,
//     children,
//     role = "presentation",
//     ...rest
//   }: React.ComponentPropsWithoutRef<"div">,
//   ref: React.Ref<HTMLDivElement>
// ) {
//   return (
//     <div role={role} className={className} {...rest} ref={ref}>
//       {children}
//     </div>
//   );
// }

// export default React.forwardRef(Spacer);
