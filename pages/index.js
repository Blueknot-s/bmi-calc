import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";  // 스타일 import

export default function Home() {
  const [height, setHeight] = useState(""); // 키 상태
  const [weight, setWeight] = useState(""); // 몸무게 상태
  const [bmi, setBmi] = useState(null); // BMI 값 상태
  const [category, setCategory] = useState(""); // BMI 범주 상태

  // BMI 계산 함수
  const calculateBMI = () => {
    const heightInMeters = height / 100; // cm를 m로 변환
    const bmiValue = weight / (heightInMeters * heightInMeters); // BMI 계산
    setBmi(bmiValue);

    // BMI 범주 판별
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="BMI 계산기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>BMI Calculator</h1>

        {/* 입력 필드: 키 (cm) */}
        <input
          type="number"
          placeholder="Enter your height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={styles.inputField}  // 스타일 클래스 적용
        />
        {/* 입력 필드: 몸무게 (kg) */}
        <input
          type="number"
          placeholder="Enter your weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={styles.inputField}  // 스타일 클래스 적용
        />
        {/* BMI 계산 버튼 */}
        <button
          onClick={calculateBMI}
          className={styles.submitButton}  // 스타일 클래스 적용
        >
          Calculate BMI
        </button>

        {/* 결과 출력 */}
        {bmi && (
          <div>
            <h3>Your BMI: {bmi.toFixed(2)}</h3>
            <h4>Category: {category}</h4>
          </div>
        )}
      </main>

      {/* 푸터에 클래스 적용 */}
      <footer className={styles.footer}>
        <p>Quick and easy BMI calculation.</p>
      </footer>
    </div>
  );
}


