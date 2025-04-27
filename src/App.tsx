import React from "react";
import { useState } from "react";

export default function FreedomQuiz() {
  const questions = [
    {
      key: "q1",
      question: "Bạn có thể duy trì mức sống hiện tại trong bao lâu nếu ngừng làm việc ngay ngày mai?",
      options: [
        { text: "0–1 tháng", value: 0 },
        { text: "1–6 tháng", value: 3 },
        { text: "6–24 tháng", value: 7 },
        { text: "Hơn 2 năm hoặc vĩnh viễn", value: 10 },
      ],
    },
    {
      key: "q2",
      question: "Bao nhiêu % thời gian hàng ngày bạn dành cho những công việc bạn thực sự muốn làm?",
      options: [
        { text: "Dưới 20%", value: 0 },
        { text: "20%–50%", value: 4 },
        { text: "50%–80%", value: 7 },
        { text: "Trên 80%", value: 10 },
      ],
    },
    {
      key: "q3",
      question: "Công việc hiện tại của bạn đem lại cho bạn cảm giác nào?",
      options: [
        { text: "Làm chỉ để kiếm sống", value: 0 },
        { text: "Hợp kỹ năng nhưng không yêu thích", value: 4 },
        { text: "Làm vì đam mê, dù có khó khăn", value: 7 },
        { text: "Đam mê và được trả công xứng đáng", value: 10 },
      ],
    },
    {
      key: "q4",
      question: "Bạn cảm thấy thế nào khi bày tỏ suy nghĩ thật?",
      options: [
        { text: "Rất sợ, luôn phải giấu kín", value: 0 },
        { text: "Phải lựa lời cẩn thận mới dám nói", value: 5 },
        { text: "Tự tin thể hiện ý tưởng", value: 10 },
      ],
    },
    {
      key: "q5",
      question: "Bạn có nguồn thu nhập thụ động nào không?",
      options: [
        { text: "Không có", value: 0 },
        { text: "Một nguồn nhỏ", value: 5 },
        { text: "Nhiều nguồn đáng kể", value: 10 },
      ],
    },
    {
      key: "q6",
      question: "Mức độ tự chủ tài chính của bạn hiện tại?",
      options: [
        { text: "Phụ thuộc hoàn toàn vào công việc", value: 0 },
        { text: "Đang xây dựng tự chủ", value: 5 },
        { text: "Đã tự chủ hoàn toàn", value: 10 },
      ],
    },
    {
      key: "q7",
      question: "Bạn có đang chủ động học hỏi kỹ năng mới?",
      options: [
        { text: "Rất ít hoặc không", value: 0 },
        { text: "Thi thoảng", value: 5 },
        { text: "Liên tục và có kế hoạch", value: 10 },
      ],
    },
    {
      key: "q8",
      question: "Bạn cảm thấy thế nào về việc thử nghiệm những ý tưởng mới?",
      options: [
        { text: "Rất ngại", value: 0 },
        { text: "Cân nhắc kỹ mới thử", value: 5 },
        { text: "Hào hứng đón nhận", value: 10 },
      ],
    },
    {
      key: "q9",
      question: "Mức độ bạn kiểm soát lịch trình làm việc của mình?",
      options: [
        { text: "Không kiểm soát được", value: 0 },
        { text: "Có giới hạn nhất định", value: 5 },
        { text: "Hoàn toàn tự chủ", value: 10 },
      ],
    },
    {
      key: "q10",
      question: "Bạn dành bao nhiêu thời gian mỗi tuần cho sở thích cá nhân?",
      options: [
        { text: "Ít hơn 5 giờ", value: 0 },
        { text: "5–10 giờ", value: 5 },
        { text: "Hơn 10 giờ", value: 10 },
      ],
    },
    {
      key: "q11",
      question: "Bạn có cảm thấy mình đang sống cuộc đời do chính mình chọn không?",
      options: [
        { text: "Hoàn toàn không", value: 0 },
        { text: "Một phần", value: 5 },
        { text: "Rõ ràng là có", value: 10 },
      ],
    },
    {
      key: "q12",
      question: "Bạn đánh giá mức độ tự do trong các mối quan hệ xã hội của mình?",
      options: [
        { text: "Bị chi phối nhiều", value: 0 },
        { text: "Có chọn lọc", value: 5 },
        { text: "Rất tự do", value: 10 },
      ],
    },
    {
      key: "q13",
      question: "Bạn cảm thấy thế nào khi đối diện với rủi ro?",
      options: [
        { text: "Tránh né", value: 0 },
        { text: "Cân nhắc kỹ", value: 5 },
        { text: "Chấp nhận và học hỏi", value: 10 },
      ],
    },
    {
      key: "q14",
      question: "Bạn có thể dễ dàng nghỉ ngơi khi cảm thấy cần thiết không?",
      options: [
        { text: "Không thể", value: 0 },
        { text: "Khó khăn nhưng có thể", value: 5 },
        { text: "Dễ dàng", value: 10 },
      ],
    },
    {
      key: "q15",
      question: "Bạn có xây dựng hệ thống thay thế bản thân trong công việc?",
      options: [
        { text: "Chưa có", value: 0 },
        { text: "Đang xây dựng", value: 5 },
        { text: "Đã có hệ thống hoàn chỉnh", value: 10 },
      ],
    },
    {
      key: "q16",
      question: "Bạn đã từng đạt được mục tiêu lớn tự đặt ra cho bản thân?",
      options: [
        { text: "Chưa bao giờ", value: 0 },
        { text: "Một vài lần", value: 5 },
        { text: "Nhiều lần", value: 10 },
      ],
    },
    {
      key: "q17",
      question: "Bạn đang làm việc vì...",
      options: [
        { text: "Sự sinh tồn", value: 0 },
        { text: "Sự phát triển cá nhân", value: 5 },
        { text: "Sứ mệnh cao cả hơn", value: 10 },
      ],
    },
    {
      key: "q18",
      question: "Bạn có lường trước được hậu quả của các quyết định tài chính lớn?",
      options: [
        { text: "Không rõ", value: 0 },
        { text: "Tương đối", value: 5 },
        { text: "Rất rõ ràng", value: 10 },
      ],
    },
    {
      key: "q19",
      question: "Bạn đang đầu tư bao nhiêu cho bản thân mỗi năm?",
      options: [
        { text: "Ít hơn 2% thu nhập", value: 0 },
        { text: "2–5% thu nhập", value: 5 },
        { text: "Hơn 5% thu nhập", value: 10 },
      ],
    },
    {
      key: "q20",
      question: "Bạn có đang chủ động thiết kế cuộc sống mơ ước của mình không?",
      options: [
        { text: "Không", value: 0 },
        { text: "Đang bắt đầu", value: 5 },
        { text: "Đã thiết kế và đang sống theo", value: 10 },
      ],
    },
  ];
  
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((acc, cur) => acc + cur, 0);
  const maxScore = questions.length * 10;
  const freedomPercentage = Math.round((totalScore / maxScore) * 100);

  const handleSelect = (key: string, value: number) => {
    setAnswers({ ...answers, [key]: value });
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setSubmitted(true), 300);
    }
  };

  const getFreedomLevel = () => {
    if (freedomPercentage <= 30) return { level: "Tự do thấp", message: "Bạn đang ở giai đoạn khởi đầu hành trình tự do. Cần tập trung xây dựng nền tảng tài chính, thời gian và tư duy." };
    if (freedomPercentage <= 70) return { level: "Đang phát triển", message: "Bạn đã có những bước tiến vững chắc trên con đường tự do. Hãy tiếp tục củng cố hệ thống tài chính, kỹ năng và sự tự chủ." };
    return { level: "Tự do cao", message: "Bạn đang sống một cuộc đời tự do đích thực. Hãy trở thành nguồn cảm hứng cho cộng đồng và tiếp tục phát triển mạnh mẽ!" };
  };

  const result = getFreedomLevel();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">CASSO Freedom Quiz</h1>
      {submitted ? (
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600">{result.level}</h2>
          <p className="text-5xl font-extrabold text-blue-800">{freedomPercentage}% Tự do</p>
          <p className="text-md sm:text-lg text-gray-700">{result.message}</p>
          <div className="bg-gray-100 p-4 rounded-xl mt-6 text-left text-sm sm:text-base">
            <h3 className="font-bold mb-2">Phương pháp luận tính toán:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mỗi câu trả lời được chấm từ 0 đến 10 điểm.</li>
              <li>Tổng điểm tối đa: {maxScore} điểm.</li>
              <li>Tự do cá nhân = (Tổng điểm đạt được / Tổng điểm tối đa) × 100%.</li>
              <li>Phân loại tự do dựa trên % tổng điểm:</li>
              <ul className="list-inside ml-4">
                <li>0% – 30%: Tự do thấp.</li>
                <li>31% – 70%: Đang phát triển.</li>
                <li>71% – 100%: Tự do cao.</li>
              </ul>
            </ul>
          </div>
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
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-md text-center animate-fade-in">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">Câu {currentQuestion + 1} / {questions.length}</p>
          <p className="text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8">{questions[currentQuestion].question}</p>
          <div className="flex flex-col space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(questions[currentQuestion].key, option.value)}
                className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-xl hover:bg-blue-600 transition text-sm sm:text-base"
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
