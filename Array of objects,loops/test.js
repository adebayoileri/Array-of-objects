const workers=[
    {firstName:"Vanessa", lastName:"Rogers",salary: 60193,age:19,Gender:"Female"},
    {firstName:"Charlotte",lastName:"Hunt",salary: 92383,age:24 ,Gender:"Female" },
    {firstName:"Marcus",lastName:"Foster",salary: 658760,age:21 ,Gender:"Male"},
    {firstName:"Myra",lastName:"Brooks",salary: 174036,age:21 ,Gender:"Female"},
    {firstName:"Caroline",lastName:"Armstrong",salary: 149879,age:29 ,Gender:"Female"},
    {firstName:"Belinda",lastName:"Carroll",salary: 188935,age:19 ,Gender:"Female"},
    {firstName:"Olivia",lastName:"Armstrong",salary: 34782,age:26 ,Gender:"Female"},
    {firstName:"April",lastName:"Cooper",salary:68263,age:20 ,Gender:"Female"},
    {firstName:"Edith",lastName:"Harrison",salary: 548709,age:23 ,Gender:"Female"},
    {firstName:"Vivian",lastName:"Henderson",salary: 155709,age:20 ,Gender:"Female"},
    {firstName:"Ashton",lastName:"Martin",salary:166647 ,age:27 ,Gender:"Male"},
    {firstName:"Gianna",lastName:"Moore",salary: 191619,age:23 ,Gender:"Female"},
    {firstName:"Camilia",lastName:"Allen",salary: 85567,age:23 ,Gender:"Female"},
    {firstName:"Gianna",lastName:"Morrison",salary: 191509,age:28 ,Gender:"Female"},
    {firstName:"Paul",lastName:"Cooper",salary: 394871,age: 28,Gender:"Male"},
    {firstName:"Tara",lastName:"Mason",salary: 189780,age:19 ,Gender:"Female"},
    {firstName:"Aida",lastName:"Tucker",salary: 143187,age:21 ,Gender:"Female"},
    {firstName:"Richard",lastName:"Cameron",salary: 116644,age:21 ,Gender:"Male"},
    {firstName:"Amy",lastName:"Stewart",salary: 126961,age:29 ,Gender:"Female"},
    {firstName:"Eleanor",lastName:"Thompson",salary: 159003,age:22 ,Gender:"Female"},
    {firstName:"Albert",lastName:"Edwards",salary: 105648,age:21 ,Gender:"Female"},
    {firstName:"Gianna",lastName:"Evans",salary: 183805,age:27 ,Gender:"Female"},
    {firstName:"Florrie",lastName:"Kelley",salary: 180568,age: 24 ,Gender:"Female"},
    {firstName:"Miranda",lastName:"Harris",salary: 185753,age:19 ,Gender:"Female"},
    {firstName:"Henry",lastName:"Davis",salary: 83804,age:18 ,Gender:"Male"},
    {firstName:"Kirsten",lastName:"Barnes",salary: 161833,age:26 ,Gender:"Female"},
    {firstName:"Jack",lastName:"Chapman",salary: 41007,age:19 ,Gender:"Male"},
    {firstName:"Myra",lastName:"Kelly",salary: 118346,age:27 ,Gender:"Female"},
    {firstName:"Emma",lastName:"Evans",salary: 126125,age:23 ,Gender:"Female"},
    {firstName:"Blake",lastName:"Evans",salary: 69702,age:24 ,Gender:"Male"},
    {firstName:"Aldus",lastName:"Armstrong",salary: 132491,age:26 ,Gender:"Male"},
    {firstName:"Adelaide",lastName:"Martin",salary: 175263,age:20 ,Gender:"Female"},
    {firstName:"Victoria",lastName:"Elliot",salary: 111645,age:21 ,Gender:"Female"},
    {firstName:"Nicole",lastName:"Harrison",salary: 54624,age:22 ,Gender:"Female"},
    {firstName:"Edwin",lastName:"Hamilton",salary: 152586,age:18 ,Gender:"Male"},
    {firstName:"Jessica",lastName:"Robinson",salary: 85446,age:29 ,Gender:"Female"},
    {firstName:"Sofia",lastName:"Turner",salary: 131564,age:20 ,Gender:"Female"},
    {firstName:"Cadie",lastName:"Higgins",salary: 138663,age:21 ,Gender:"Female"},
    {firstName:"Jessica",lastName:"Turner",salary: 91319,age: 24,Gender:"Female"},
    {firstName:"Walter",lastName:"Hamilton",salary: 117408,age:25 ,Gender:"Male"},
    {firstName:"Alexander",lastName:"Farrell",salary: 65878,age:26 ,Gender:"Male"},
    {firstName:"Justin",lastName:"Howard",salary: 165575,age:21 ,Gender:"Male"},
    {firstName:"Chelsea",lastName:"Holmes",salary: 32690,age:21 ,Gender:"Female"},
    {firstName:"Alberta",lastName:"Wilson",salary: 143459,age:22 ,Gender:"Female"},
    {firstName:"Miller",lastName:"Murphy",salary:163776 ,age:25,Gender:"Male"},
    {firstName:"Adrianna",lastName:"Hawkins",salary: 64412,age: 23,Gender:"Female"},
    {firstName:"Dominik",lastName:"Reed",salary: 42643,age: 23,Gender:"Male"},
    {firstName:"Gianna",lastName:"Craig",salary: 141944,age: 18,Gender:"Female"},
    {firstName:"Alissa",lastName:"Cameron",salary: 101581,age: 28,Gender:"Female"},
    {firstName:"Aldus",lastName:"Adams",salary: 132894,age:28 ,Gender:"Male"},
];

//first and last name of all workers  
console.log(" First and last name of all workers".toUpperCase());
 for(let i=0; i < workers.length; i++)
 {

     console.log(workers[i].firstName + " " + workers[i].lastName);
 };
 //Total Salary
     console.log(" Total Salary of all workers".toUpperCase());
     let totalSalary =0;
 for (let k = 0; k <workers.length; k++) {
    totalSalary +=workers[k].salary
 };
   console.log(totalSalary);

 //Average Age of workers
 let averageAge = 0;
 for(let j =0; j< workers.length; j++)
 {
    averageAge+= workers[j].age/workers.length
 }
 console.log("average age of all workers".toUpperCase());
 console.log(averageAge);

 //Personal Info Of worker Index 33 
 console.log("Worker at index 33".toUpperCase());
  console.log("FIRST NAME:" + " "+workers[33].firstName);
  console.log("LAST NAME:"+ " "+workers[33].lastName);
  console.log("SALARY:"+" "+ workers[33].salary);
  console.log( "AGE:"+" "+ workers[33].age);
  console.log("GENDER :"+ " "+ workers[33].Gender);

  //Salary of Sofia turner
  console.log("salary of sofia turner".toUpperCase());
  console.log(workers[36].salary);

  //length of array
  console.log("length of arrays".toUpperCase());
  console.log(workers.length);

  //Editing  of workers info
  //Name
  
  console.log("Editing name of worker ".toUpperCase());
  workers[44].firstName ="Milner";
  let fullName = workers[44].firstName +" "+ workers[44].lastName;
  console.log(fullName)
  //Updated Arrays
  console.log("Updated array".toUpperCase());
  console.log(workers);
  // Gender
  console.log("Editing gender of worker ".toUpperCase());
  workers[49].Gender = "Female";
  console.log(workers[49].Gender);
  console.log(workers);
