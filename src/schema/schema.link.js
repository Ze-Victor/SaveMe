module.exports = {
  type: "object",
  properties: {
    id: { type: "integer" },
    link: { type: "string" },
    user_id: { type: "integer" },
    category_id: { type: "integer" },
  },
  required: ["link"],
  additionalProperties: false,
};
