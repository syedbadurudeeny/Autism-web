import { useState } from "react";
import { testDatas } from "./TestDatas";
import { Link } from "react-router-dom";

function TestModule(){


    const [quizDatas,setQuizdatas] = useState(testDatas);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);


    function quizFunc(selectedAnswer){
       if(selectedAnswer === quizDatas[currentQuestion].correctAnswer){
        setScore(score => score+1);
       }
       let nextQuestion = currentQuestion +1;
       if(nextQuestion < quizDatas.length){
        setCurrentQuestion(nextQuestion);
       }else{
        console.log("quiz completed");
       }
    }

    return(
        <>
       <header>
       <h2>Study Module Page</h2>
       <br/>
       <nav>
            <ul>
                <li><Link to={"/register"} >Register</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
                <li><Link to={"/"} >Dashboard</Link></li>
                <li><Link to={"/awareness"} >Awareness</Link></li>
                <li><Link to={"/survey"} >Survey</Link></li>
                <li><Link to={"/study/module"} >StudyModule</Link></li>
                <li><Link to={"/communication/low/module"} >CommunicationLowModule</Link></li>
                <li><Link to={"/communication/high/module"} >CommunicationHighModule</Link></li>
                <li><Link to={"/test/module"} >TestModule</Link></li>
            </ul>
        </nav>
       </header>
       <br/>
       <main>
        <section>
                <div>
                    <h3>{`${currentQuestion+1} / ${quizDatas.length}`}</h3>
                    <h3>{`Score : ${score}`}</h3>
                    <h3>{quizDatas[currentQuestion].question}</h3>
                    <h3 onClick={() => quizFunc(quizDatas[currentQuestion].options.answer1)}>{quizDatas[currentQuestion].options.answer1}</h3>
                    <h3 onClick={() => quizFunc(quizDatas[currentQuestion].options.answer2)}>{quizDatas[currentQuestion].options.answer2}</h3>
                    <h3 onClick={() => quizFunc(quizDatas[currentQuestion].options.answer3)}>{quizDatas[currentQuestion].options.answer3}</h3>
                    <h3 onClick={() => quizFunc(quizDatas[currentQuestion].options.answer4)}>{quizDatas[currentQuestion].options.answer4}</h3>
                 </div>
        </section>
       </main>
        </>
    )
}

export default TestModule;