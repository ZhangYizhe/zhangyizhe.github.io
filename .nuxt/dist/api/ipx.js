import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Users/yizhezhang/Developer/Web/zhangyizhe.github.io/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
