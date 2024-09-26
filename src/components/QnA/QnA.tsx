import Header from "../Header/Header";
import List from "../List/List";
import { Spacer } from "../Spacer/Spacer";
import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";

const POPULAR_QUESTIONS = 3;
const QNA_LIST = 5;

export default function QnA() {
  return (
    <div className="w-full h-full">
      <Header title="질문하다" items={["search", "noti"]} />
      <section className="px-16 pt-16 flex-col flex gap-16">
        <p className="text-subtitle1">🙋🏻 오늘의 질문</p>
        {Array.from({ length: POPULAR_QUESTIONS }).map((_, index) => (
          <Popular key={index} index={index + 1} comments={3} views={900} />
        ))}
      </section>
      <Spacer className="h-32" />
      <div className="px-16">
        <Banner />
      </div>
      <Spacer className="h-32" />
      <section className="px-16 pt-16 flex-col flex gap-16">
        <p className="text-subtitle1">🔥 새로운 질문</p>
        {Array.from({ length: QNA_LIST }).map((_, index) => (
          <List
            key={index}
            title="사업자 등록증 신고할 때 궁금한 점"
            label="자유"
            description="이번에 배민이랑 인스타 광고 돌리는데 비용이 너무 많이 나와서 고민이네요 다른 분들은 어떻게 얼마나 나오시..."
            comments={3}
            views={900}
            imageUrl="/images/1.jpg"
          />
        ))}
      </section>
    </div>
  );
}
