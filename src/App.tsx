import React, { useState } from 'react';

export default function FreedomQuiz() {
  const questions = [
    {
      key: 'q1',
      question:
        'Bạn có thể duy trì mức sống hiện tại trong bao lâu nếu ngừng làm việc ngay ngày mai?',
      options: [
        { text: '0–1 tháng', value: 0 },
        { text: '1–6 tháng', value: 3 },
        { text: '6–24 tháng', value: 7 },
        { text: 'Hơn 2 năm hoặc vĩnh viễn', value: 10 },
      ],
    },
    {
      key: 'q2',
      question:
        'Bao nhiêu % thời gian hàng ngày bạn dành cho những công việc bạn thực sự muốn làm?',
      options: [
        { text: 'Dưới 20%', value: 0 },
        { text: '20%–50%', value: 4 },
        { text: '50%–80%', value: 7 },
        { text: 'Trên 80%', value: 10 },
      ],
    },
    {
      key: 'q3',
      question: 'Công việc hiện tại của bạn đem lại cho bạn cảm giác nào?',
      options: [
        { text: 'Làm chỉ để kiếm sống', value: 0 },
        { text: 'Hợp kỹ năng nhưng không yêu thích', value: 4 },
        { text: 'Làm vì đam mê, dù có khó khăn', value: 7 },
        { text: 'Đam mê và được trả công xứng đáng', value: 10 },
      ],
    },
    {
      key: 'q4',
      question: 'Bạn cảm thấy thế nào khi bày tỏ suy nghĩ thật?',
      options: [
        { text: 'Rất sợ, luôn phải giấu kín', value: 0 },
        { text: 'Phải lựa lời cẩn thận mới dám nói', value: 5 },
        { text: 'Tự tin thể hiện ý tưởng', value: 10 },
      ],
    },
  ];

  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((acc, cur) => acc + cur, 0);

  const handleSelect = (key: string, value: number) => {
    setAnswers({ ...answers, [key]: value });
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setSubmitted(true), 300);
    }
  };

  const getFreedomLevel = () => {
    if (totalScore <= 15)
      return {
        level: 'Bị trói buộc',
        message:
          'Hãy bắt đầu giải phóng chính mình, bạn xứng đáng với tự do lớn hơn.',
      };
    if (totalScore <= 30)
      return {
        level: 'Đang trên hành trình',
        message:
          'Bạn đang trên con đường tìm về tự do. Hãy tiếp tục tiến bước!',
      };
    return {
      level: 'Tự do thực sự',
      message:
        'Bạn đã gieo trồng tự do trong cuộc sống mình. Hãy trở thành ánh sáng cho người khác.',
    };
  };

  const result = getFreedomLevel();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        CASSO Freedom Quiz
      </h1>
      {submitted ? (
        <div className="bg-white shadow-xl rounded-xl p-10 max-w-xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-600">{result.level}</h2>
          <p className="text-6xl font-extrabold text-blue-800">
            {totalScore}/40
          </p>
          <p className="text-lg text-gray-700">{result.message}</p>
          <button
            onClick={() => {
              setAnswers({});
              setCurrentQuestion(0);
              setSubmitted(false);
            }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Làm lại bài kiểm tra
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
          <p className="text-2xl font-semibold mb-6">
            Câu {currentQuestion + 1} / {questions.length}
          </p>
          <p className="text-xl font-bold mb-8">
            {questions[currentQuestion].question}
          </p>
          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleSelect(questions[currentQuestion].key, option.value)
                }
                className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
