import { j as jsx } from "./index.b82aed19.js";
const btn = "_btn_1sriz_1";
const styles = {
  btn
};
function Button({
  children,
  className
}) {
  return /* @__PURE__ */ jsx("button", {
    className: `${styles.btn} ${className}`,
    type: "button",
    children
  });
}
export {
  Button as B
};
