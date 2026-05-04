const course={
    coursename: "Js in Hindi",
    price: 999,
    courseInstructor: "Hitesh",
}

// console.log(course.courseInstructor)

//Another syntax
//courses {curly braces(konsi value extract krni hai)} = kaha se value extract krni hai
const {courseInstructor : Instructor} = course
console.log(Instructor)

