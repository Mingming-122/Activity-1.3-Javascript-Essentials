/* Create any javscript program with minimum 10 let variables, 10 const variables, 
    5 arrow functions, 10 template literals, 3 destructured arrays, 3 destructured object literals,
    2 arrays using spread operators, 2 object literals using spread operator, 2 arrays using .map(), 
    2 arrays using .filter(), 2 object literals using optional chaining 
*/

// ============================================
// STUDENT MANAGEMENT SYSTEM DEMO
// ============================================

// ----- CONST VARIABLES (10) -----
const SCHOOL_NAME = "Northwest Samar States University";
const PASS_MARK = 75;
const MAX_STUDENTS = 50;
const currentYear = 2026-2027;
const subjects = ["Programming Languages", "Automata Theory and Formal Languages", "Software Engineering 1", "Professional Elective 1", "Reading Visual Art"];
const gradeLevels = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const defaultAddress = { city: "Calbayog City", country: "Philippines" };
const adminUser = { name: "Ms. Mingo", role: "Administrator" };
const bonusPoints = 5;
const today = new Date().toDateString();

// ----- LET VARIABLES (10) -----
let studentCount = 0;
let totalScore = 0;
let averageScore = 0;
let topStudent = "";
let lowestScore = 100;
let highestScore = 0;
let passCount = 0;
let failCount = 0;
let reportLine = "";
let statusMessage = "Pending";

// ----- ARROW FUNCTIONS (5) -----
const createStudent = (name, score, subject) => ({ name, score, subject });

const calculatePercentage = (score, max = 100) => (score / max) * 100;

const getStatus = (score) => (score >= PASS_MARK ? "PASSED" : "FAILED");

const greetStudent = (name) => `Welcome, ${name}, to ${SCHOOL_NAME}!`;

const buildReport = (name, score, status) =>
    `${name} scored ${score} points and has ${status} the course.`;

// ----- STUDENT DATA -----
const students = [
    createStudent("Ana Cruz", 88, "Math"),
    createStudent("Ben Torres", 65, "Science"),
    createStudent("Carla Dizon", 92, "English"),
    createStudent("Dexter Uy", 58, "History"),
    createStudent("Ella Santos", 79, "Math"),
];

// ----- TEMPLATE LITERALS (10) -----
console.log(`===== ${SCHOOL_NAME} - Report for ${currentYear} =====`);
console.log(`   Generated on: ${today}`);
console.log(`   Total subjects offered: ${subjects.length}`);
console.log(`   Admin in charge: ${adminUser.name} (${adminUser.role})`);
console.log(`Pass mark is set at: ${PASS_MARK}%`);
console.log(`Maximum students allowed: ${MAX_STUDENTS}`);
console.log(`_________________________________________________________________________________________________________`);
console.log(greetStudent(students[0].name));
console.log(`School location: ${defaultAddress.city}, ${defaultAddress.country}`);
console.log(`Grade levels available: ${gradeLevels.join(", ")}`);
console.log(`Bonus points awarded per honor roll student: ${bonusPoints}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- PROCESS STUDENTS -----
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let status = getStatus(student.score);
    
    studentCount++;
    totalScore += student.score;
    
    if (student.score > highestScore) {
        highestScore = student.score;
        topStudent = student.name;
    }
    if (student.score < lowestScore) {
        lowestScore = student.score;
    }
    if (status === "PASSED") {
        passCount++;
    } else {
        failCount++;
    }
    
    reportLine = buildReport(student.name, student.score, status);
    console.log(reportLine);
    console.log(`_________________________________________________________________________________________________________`);
}

averageScore = totalScore / studentCount;
statusMessage = averageScore >= PASS_MARK ? "Class performing well" : "Class needs improvement";

console.log(`_________________________________________________________________________________________________________`);
console.log(`Average score for the class: ${averageScore.toFixed(2)}`);
console.log(`Top student is ${topStudent} with a score of ${highestScore}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- DESTRUCTURED ARRAYS (3) -----
const [firstSubject, secondSubject, ...remainingSubjects] = subjects;
const [firstGrade, , thirdGrade] = gradeLevels;
const [bestStudent, secondBestStudent] = [...students].sort((a, b) => b.score - a.score);

console.log(`First subject: ${firstSubject}, Second subject: ${secondSubject}`);
console.log(`Remaining subjects: ${remainingSubjects.join(", ")}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- DESTRUCTURED OBJECT LITERALS (3) -----
const { name: adminName, role: adminRole } = adminUser;
const { city, country } = defaultAddress;
const { name: bestName, score: bestScore } = bestStudent;

console.log(`_________________________________________________________________________________________________________`);
console.log(`Admin: ${adminName} - Role: ${adminRole}`);
console.log(`School is based in ${city}, ${country}`);
console.log(`Best performing student: ${bestName} with ${bestScore} points`);
console.log(`_________________________________________________________________________________________________________`);

// ----- SPREAD OPERATOR: ARRAYS (2) -----
const extendedSubjects = [...subjects, "Computer Science", "Art"];
const combinedGrades = [...gradeLevels, "Graduate"];

console.log(`Extended subject list: ${  extendedSubjects.join(", \n")}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- SPREAD OPERATOR: OBJECT LITERALS (2) -----
const fullStudentProfile = { ...bestStudent, ...defaultAddress, honorRoll: true };
const upgradedAdmin = { ...adminUser, yearsOfService: 8, department: "Academics" };

console.log(`Full profile: ${JSON.stringify(fullStudentProfile)}`);

// ----- ARRAYS USING .map() (2) -----
const studentNames = students.map((s) => s.name);
const scorePercentages = students.map((s) => `${calculatePercentage(s.score)}%`);

console.log(`All student names: ${studentNames.join(", ")}`);
console.log(`Score percentages: ${scorePercentages.join(", ")}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- ARRAYS USING .filter() (2) -----
const passedStudents = students.filter((s) => s.score >= PASS_MARK);
const failedStudents = students.filter((s) => s.score < PASS_MARK);

console.log(`Students who passed: ${passedStudents.length}`);
console.log(`Students who failed: ${failedStudents.length}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- OPTIONAL CHAINING (2 object literals) -----
const teacherInfo = { name: "Ms. Mingo", contact: { email: "mingo@school.edu" } };
const emptyRecord = {};

console.log(`Teacher email: ${teacherInfo.contact?.email ?? "Not available"}`);
console.log(`Missing record phone: ${emptyRecord?.contact?.phone ?? "Not available"}`);
console.log(`_________________________________________________________________________________________________________`);

// ----- FINAL SUMMARY -----
console.log(`----- END OF REPORT -----`);
console.log(`Pass count: ${passCount}, Fail count: ${failCount}`);
console.log(`Overall class status: ${statusMessage}`);