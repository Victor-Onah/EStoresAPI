import crypto from "node:crypto";

export const encrypt = (payload) => {
    try {
        const iv = crypto.randomBytes(16);
        const key = crypto.randomBytes(32);
        const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
        let encryptedText = cipher.update(JSON.stringify(payload), "utf-8", "hex");
        encryptedText += cipher.final("hex");

        return Buffer.from(`${encryptedText}-${iv.toString("hex")}-${key.toString("hex")}`, "utf-8").toString(
            "base64url"
        );
    } catch {
        return null;
    }
};

export const decrypt = (payload) => {
    try {
        const [encryptedText, iv, key] = Buffer.from(payload, "base64url").toString("utf-8").split("-");
        const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
        let decryptedText = decipher.update(encryptedText, "hex", "utf-8");
        decryptedText += decipher.final("utf-8");

        return JSON.parse(decryptedText);
    } catch {
        return null;
    }
};

export const hash = (payload) =>
    crypto.createHash("sha256").update(JSON.stringify(payload), "utf-8").digest("base64url");

hash.verify = (payload, hashed) => hash(payload) === hashed;
