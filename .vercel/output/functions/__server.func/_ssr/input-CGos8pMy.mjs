import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as cn } from "./router-DsqIUCUT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-CGos8pMy.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-sm bg-paper px-3.5 text-sm text-body shadow-[var(--shadow-border)] placeholder:text-muted/80", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle", "disabled:opacity-50", className),
		...props
	});
}
//#endregion
export { Input as t };
