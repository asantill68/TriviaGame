$("#start").on("click",function(){
    $("#start").remove()
    for(var i=0; i<questions.length; i++){
        $("#subMains").append("<h2>"+questions[i].question+"</h2>");
        for(var j = 0; j<questions[i].answers.length; j++){
            $("#subMains").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        }
    }
});
//Create Variable for questions
var questions = [{
    question:  "How many Super Bowl wins do the Steelers have in their historic existance?",
    answers: ["Zero", "Four", "Two", "Six"],
    rightAnswer: "Six"
},  {
    question: "This player wore #32, was named a Super Bowl MVP, and caught The Immaculate Reception.",
    answers: ["Rocky Blier", "Lynn Swann", "Franco Harris", "Hines Ward"],
    rightAnswer: "Franco Harris"
},  {
    question: "This Steeler was an undrafted free agent in 2002. He attended Kent State University and had a 100-yard interception return in Super Bowl XLIII. What is the name of this outside linebacker who is nicknamed Silverback?",
    answers: ["Jack Ham", "James Harrison", "Levon Kirkland", "Greg Lloyd"],
    rightAnswer: "James Harrison"
},  {
    question: "In the Steelers first Super Bowl appearance, who did they defeat?",
    answers: ["Dallas Cowgirls", "LA Lambs", "Arizona Cardinals", "Minnesotta Vikings"],
    rightAnswer: "Minnesotta Vikings"
},  {
    question: "What year did the Pittsburgh Steelers win their first Super Bowl?",
    answers: ["1986", "1991", "1974", "1979"],
    rightAnswer: "1974"
},  {
    question: " After the 2006 season, which Steeler head coach stepped down after 15 seasons?",
    answers: ["Bill Cowher", "Chuck Noll", "Bum Phillips", "Mike Tomlin"],
    rightAnswer:  "Bill Cowher"
},  {
    question: "What team and in what year did the Steelers get their first ever post-season win?",
    answers: ["Cowgirls-1974", "Raiders-1981", "Raiders-1972", "Browns-1968"],
    rightAnswer:  "Raiders-1972"
},  {
    question: "Which of these four, in 1987, broke the record for the most receiving yards in a career for the Steelers?",
    answers: ["Lynn Swann", "Yancey Thigpen", "Santonio Holmes", "John Stallworth"],
    rightAnswer:  "John Stallworth"
},  {
    question: "Who coached the Steelers to four Super Bowl wins in the 1970s seasons?",
    answers: ["Chuck Noll", "Bill Cowher", "Terry Bradshaw", "Vince Lombardi"],
    rightAnswer:  "Chuck Noll"
},  {
    question: "More than one Steeler wide receiver was named Super Bowl MVP. Some of them are in the Hall of Fame. Number 86 was worn by which Dancing With the Stars champion?",
    answers: ["Hines Ward", "Emmitt Smith", "Terrell Owens", "Antwan Randle-El"],
    rightAnswer:  "Hines Ward"
}];










 
 



// <img src="assets\images\PicP1.png" alt="flag">
