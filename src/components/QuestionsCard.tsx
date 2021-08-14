import React from "react";

type Props = {
  question: string;
  answers: string[];
  callBack: any;
  userAnswer: any; // its string but any for now
  questionNr: number;
  totalQuestions: number;
};

const QuestionsCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      {answers.map((answer) => (
        <div>
          {/* <button disabled={userAnswer} onClick={callBack}></button> */}
          <button disabled={userAnswer} value={answer} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionsCard;
