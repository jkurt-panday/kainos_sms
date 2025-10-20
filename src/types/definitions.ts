// src/types/Teacher.ts
export interface Teachers {
  id: number;
  name: string;
  email: string;
  password: string;
  classes?: Classes[]; // optional relation
}

// src/types/Class.ts
export interface Classes {
  id: number;
  class_name: string;
  grade_level: number;
}
