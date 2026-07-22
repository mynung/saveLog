import { TransactionContext } from "../context/TransactionContext";
import Button from "./Button";
import "./DashBoard.css";
import { useContext, useState } from "react";

export function getWeekRange(date) {
  const current = date;

  const day = current.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  const start = new Date(current);
  start.setDate(current.getDate() + diff);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
}

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const DashBoard = () => {
  const { state } = useContext(TransactionContext);
  const [date, setDate] = useState("일간");

  const today = new Date();
  let filteredTransactions = [];
  switch (date) {
    case "일간":
      filteredTransactions = state.transactions.filter((transaction) => {
        return transaction.date === formatDate(today);
      });
      break;
    case "주간":
      filteredTransactions = state.transactions.filter((transaction) => {
        const transDate = new Date(transaction.date);
        const { start, end } = getWeekRange(today);
        return start <= transDate && transDate <= end;
      });
      break;
    case "월간":
      filteredTransactions = state.transactions.filter((transaction) => {
        const transDate = new Date(transaction.date);
        return (
          transDate.getFullYear() === today.getFullYear() &&
          transDate.getMonth() === today.getMonth()
        );
      });
      break;
    default:
      filteredTransactions = state.transactions;
  }

  const filteredIncome = filteredTransactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);
  const filteredExpense = filteredTransactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);
  const currentAmount = state.transactions.reduce((sum, item) => {
    return item.type === "expense"
      ? sum - Number(item.amount)
      : sum + Number(item.amount);
  }, 0);
  const recentTransactions = [...state.transactions].reverse().slice(0, 5);
  const formatMoney = (amount) => amount.toLocaleString("ko-KR");

  return (
    <div className="dashBoard_wrapper">
      <div className="dash_header">
        <div>
          <p className="dash_label">오늘의 기록</p>
          <h1>SaveLog 대시보드</h1>
        </div>
        <div className="dash_right">
          <div className="period_tabs">
            <Button text={"일간"}  className={date==="일간" ?"active" : ""}event={() => setDate("일간")} />
            <Button text={"주간"} className={date==="주간" ?"active" : ""} event={() => setDate("주간")} />
            <Button text={"월간"} className={date==="월간" ?"active" : ""} event={() => setDate("월간")} />
          </div>
          <p className="dash_date">{formatDate(today)}</p>
        </div>
      </div>

      <div className="dash_summary">
        <section className="summary_card balance">
          <span>현재 잔액</span>
          <strong>{formatMoney(currentAmount)}원</strong>
        </section>
        <section className="summary_card income">
          <span>{date} 수입</span>
          <strong>{formatMoney(filteredIncome)}원</strong>
        </section>
        <section className="summary_card expense">
          <span>{date} 지출</span>
          <strong>{formatMoney(filteredExpense)}원</strong>
        </section>
      </div>

      <div className="dash_bottom">
        <div className="section_title">
          <h2>최근 거래</h2>
          <span>{recentTransactions.length}건</span>
        </div>

        <div className="transaction_list">
          {recentTransactions.map((item) => (
            <div className="transaction_item" key={item.id}>
              <div className={`type_badge ${item.type}`}>
                {item.type === "income" ? "수입" : "지출"}
              </div>
              <div className="transaction_info">
                <strong>{item.title}</strong>
                <span>
                  {item.category} · {item.date}
                </span>
              </div>
              <p className={`transaction_amount ${item.type}`}>
                {item.type === "income" ? "+" : "-"}
                {formatMoney(item.amount)}원
              </p>
            </div>
          ))}
        </div>

        {recentTransactions.length === 0 && (
          <p className="empty_message">아직 기록된 거래가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
