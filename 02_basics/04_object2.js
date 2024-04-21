// const tinderUser = new Object() // that is the singleton..
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // all assign in {} from obj1,obj2..... 

const obj3 = {...obj1, ...obj2} // spread operator to assign the another obj;
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]                      // it is the database strure which provide the information in the fiorm of array of object;

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// return keys in the form of array..
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));// return in the form of key value pairs of array..

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// questioning to check key value present or not..


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // to call courseins.. to inst.. called destructuring..

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } //                            json form..............

[
    {},
    {},
    {}
]         //json form
