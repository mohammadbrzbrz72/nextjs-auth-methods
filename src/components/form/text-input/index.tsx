import React from "react";

import { ITextInput } from "./types";

export const TextInput = (props: ITextInput) => {
  return <input {...props} />;
};
