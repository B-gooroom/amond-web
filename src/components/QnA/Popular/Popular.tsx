export default function Popular() {
  return (
    <div className="flex gap-14 border px-16 py-24 rounded-2xl">
      <div className="text-subtitle1">1</div>
      <div className="flex-col gap-8 flex">
        <p className="text-body2">사업자 등록증 신고할 때 궁금한 점</p>
        <p className="text-caption1">
          {/* 답변{comment} ･ 조회수{view} */}
          답변{3} ･ 조회수{900}
        </p>
      </div>
    </div>
  );
}
