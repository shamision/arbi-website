interface SectionLabelProps {
  text: string;
  center?: boolean;
}

export default function SectionLabel({ text, center }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
      <div className="w-8 h-0.5 bg-[#4845A5]" />
      <span className="text-sm font-bold text-[#17153B] tracking-[2px] uppercase">
        {text}
      </span>
    </div>
  );
}
