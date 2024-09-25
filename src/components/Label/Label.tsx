import classnames from "classnames";

interface LabelProps {
  children: string;
  size?: "small" | "medium" | "large";
  background?: "ad-brown-800" | "ad-gray-100" | "ad-black";
}

export default function Label({ children, size, background }: LabelProps) {
  // TODO: large 추가해야함
  return size === "small" ? (
    <div>
      <span
        className={classnames(
          "text-caption2 rounded-2xl px-8 py-4",
          background ? `bg-${background} text-black` : "border"
          // TODO: background가 brown이랑 black일때는 글자색을 하얀색으로
        )}
      >
        {children}
      </span>
    </div>
  ) : (
    <div>
      <span
        className={classnames(
          "border text-caption1 rounded-2xl px-16 py-8",
          background ? `bg-${background} text-black` : "border"
        )}
      >
        {children}
      </span>
    </div>
  );
}
