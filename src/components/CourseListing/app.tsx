import Image, { StaticImageData } from "next/image";
import {
  CourseCard,
  CourseContent,
  CourseInfo,
  CourseInfoDetails,
} from "./style";

import graduationHatIcon from "@/assets/graduation-hat-icon.svg";
import playIcon from "@/assets/play-icon.svg";
import clockIcon from "@/assets/clock-icon.svg";
import fullstackThumb from "@/assets/fullstack-thumb.png";
import courseThumbPlayGo from "@/assets/playgo-thumb.png";
import courseThumbEnglish from "@/assets/english-thumb.png";
import courseThumbCfe from "@/assets/cfe-thumb.png";

import { ICategory } from "@/interfaces/ICoursesListing";
import { ICourseListingProps } from "@/interfaces/ICourseListingProps";

const CourseListing: React.FC<ICourseListingProps> = ({
  activeTab,
  coursesData,
}) => {
  const courseImages: { [key: string]: StaticImageData } = {
    fullstackThumb,
    courseThumbEnglish,
    courseThumbPlayGo,
    courseThumbCfe,
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
                  <div className="courses-area">
                    {course?.tags?.map((tag) => (
                      <span
                        key={Math.random()}
                        style={{
                          backgroundColor: course.backgroundColor,
                          color: course.textColor,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
                      src={playIcon}
                      width={20}
                      height={20}
                      alt="Ícone de play"
                    />
                    <span>{course.classesQuantity}</span>
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
                    <span>{course.moduleQuantity}</span>
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
