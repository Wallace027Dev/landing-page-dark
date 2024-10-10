import Image, { StaticImageData } from "next/image";
import {
  CourseCard,
  CourseContent,
  CourseInfo,
  CourseInfoDetails,
} from "./style";

import graduationHatIcon from "@/public/assets/graduation-hat-icon.svg";
import bookIcon from "@/public/assets/book-icon.svg";
import clockIcon from "@/public/assets/clock-icon.svg";
import courseThumbFinancial from "@/public/assets/course-thumb-financial.png";
import courseThumbIllustrator from "@/public/assets/course-thumb-illustrator.png";
import courseThumbLaravel from "@/public/assets/course-thumb-laravel.png";
import courseThumbMarketing from "@/public/assets/course-thumb-marketing.png";

import { ICategory } from "@/app/interfaces/ICourses";
import { ICourseListingProps } from "@/app/interfaces/ICourseListingProps";

const CourseListing: React.FC<ICourseListingProps> = ({
  activeTab,
  coursesData,
}) => {
  const courseImages: { [key: string]: StaticImageData } = {
    courseThumbFinancial,
    courseThumbMarketing,
    courseThumbIllustrator,
    courseThumbLaravel,
  };

  return (
    <>
      {coursesData.categories.map((categoryCourse: ICategory) => (
        <CourseContent
          key={categoryCourse.id}
          active={activeTab === categoryCourse.id}
        >
          {coursesData.courses
            .filter((course) => course.categoryId === categoryCourse.id)
            .map((course) => (
              <CourseCard key={course.id}>
                <Image
                  src={courseImages[course.thumbImagePath]}
                  alt={course.thumbTextAlt}
                  width={280}
                  height={190}
                />
                <CourseInfo>
                  <span>{categoryCourse.name}</span>
                  <h3>{course.name}</h3>
                  <div className="card-reviews">
                    <i className="star-icon">&#9733;</i>
                    <span>({course.reviewRating} reviews)</span>
                  </div>
                </CourseInfo>
                <hr />
                <CourseInfoDetails>
                  <div>
                    <Image
                      src={bookIcon}
                      width={20}
                      height={20}
                      alt="Ícone de livro"
                    />
                    <span>{course.moduleQuantity}</span>
                  </div>
                  <div>
                    <Image
                      src={clockIcon}
                      width={20}
                      height={20}
                      alt="Ícone de relógio"
                    />
                    <span>{course.hoursQuantity}h</span>
                  </div>
                  <div>
                    <Image
                      src={graduationHatIcon}
                      width={20}
                      height={20}
                      alt="Ícone de chapéu de graduação"
                    />
                    <span>{course.classesQuantity}</span>
                  </div>
                </CourseInfoDetails>
              </CourseCard>
            ))}
        </CourseContent>
      ))}
    </>
  );
};

export default CourseListing;
