"use client"
import Image from "next/image";
import "./page.css";
import bgImage from "@/faq-accordion-main/assets/images/background-pattern-desktop.svg"
import starIcon from "@/faq-accordion-main/assets/images/icon-star.svg"
import { useState } from "react";
const questionsData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    response: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. lt's suitable for all levels and ideal for portfolio building."
  }, {
    question: "Is Frontend Mentor free?",
    response: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  }, {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    response: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  }, {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    response: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  },
]
export default function Home() {
  const [questionDataState, setQuestionDataState] = useState(questionsData)

  const RenderQuestions = (props) => {
    const { id, question, response } = props
    return (
      <details key={id}>
        <summary>
          <p>{question}</p>
          <span className="summary-icon-container">
            <span className="summary-icon icon-1"></span>
            <span className="summary-icon icon-2"></span>
          </span>
        </summary>
        <div>
          <p>{response}</p>
        </div>
      </details>
    )
  }

  function insertFAQ() {
    let questionP = prompt("What's the question?")
    let responseP = prompt("What's the Response?")

    if (!questionP || !responseP) {
      return
    }

    let newData = { question: questionP, response: responseP }
    setQuestionDataState((prevState) => [...prevState, newData])
  }

  return (
    <main>
      <span className="bg-background">
        <Image
          src={bgImage}
        />
      </span>
      <div className="container-item">
        <div className="title-container">
          <Image
            src={starIcon}
          />
          <h1>FAQs</h1>
        </div>
        <div className="questions-container">
          {questionDataState.map((qData, index) => (
            <RenderQuestions
              id={index}
              question={qData.question}
              response={qData.response}
            />
          ))}
        </div>
      </div>


      <button 
        onClick={() => insertFAQ()}
        className="add-your-question-btn"
      >
        Add Your FAQ
      </button>
    </main>
  );
}
