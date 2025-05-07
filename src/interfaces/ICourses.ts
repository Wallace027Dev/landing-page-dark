export interface ICourse {
  id: number;
  name: string;
  categoryId: string;
  thumbImagePath: string;
  thumbTextAlt: string;
  reviewRating: number;
  moduleQuantity: number;
  hoursQuantity: number;
  classesQuantity: number;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ICoursesData {
  categories: ICategory[];
  courses: ICourse[];
}
