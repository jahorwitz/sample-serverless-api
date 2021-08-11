export default {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
} as const;

export interface Params {
  body: {
    name?: string;
  };
}
