import Header from "../Header/Header";
import { Spacer } from "../Spacer/Spacer";
import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";

const POPULAR_QUESTIONS = 3;

export default function QnA() {
  return (
    <div className="w-full h-full">
      <Header title="질문하다" items={["search", "noti"]} />
      <section className="px-16 pt-16 flex-col flex gap-16">
        <p className="text-subtitle1">🙋🏻 오늘의 질문</p>
        {Array.from({ length: POPULAR_QUESTIONS }).map((_, index) => (
          <Popular key={index} />
        ))}
      </section>
      <Spacer className="h-32" />
      <div className="px-16">
        <Banner />
      </div>
    </div>
  );
}
