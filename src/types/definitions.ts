// src/types/Teacher.ts
export interface Teacher {
  id: number;
  name: string;
  email: string;
  password: string;
  classes?: Class[]; // optional relation
}

// src/types/Class.ts
export interface Class {
  id: number;
  class_name: string;
  grade_level: number;
}
