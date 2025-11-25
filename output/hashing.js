//password123;
//jkdjdhjhf 
const crypto = require("crypto");

console.log("\n SHA256 Hash:");
const snearaHash = crypto.createHash("sha256").update("password123").digest("hex");
const sneara5Hash = crypto.createHash("sha256").update("password123").digest("hex");

console.log("input: password123");
console.log("Sneara Password:", snearaHash);
console.log("Sneara1 Password:", sneara5Hash);

const sneara234Hash = crypto.createHash("sha256").update("password123").digest("hex");
console.log("input: password123");
console.log("sneara234 password:", sneara234Hash);

console.log(2**32 / 10**9);
