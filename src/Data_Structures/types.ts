
export type Type_For_String_or_Null =  string | null;

export type DecodedToken = {
  exp: number; // время истечения токена в секундах
  [key: string]: any;
};
