interface HoursProps {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export default function Hours({ day, open, close, closed }: HoursProps) {
  return (
    <div className="flex items-center text-slate-400">
      <span className="whitespace-nowrap pr-2">{day}</span>
      <span className="grow border-b border-dotted border-slate-600 mx-2 h-px" />
      <span className={`whitespace-nowrap pl-2 ${closed ? 'text-slate-500' : 'text-slate-200'}`}>
        {closed ? "Closed" : [open, close].filter(Boolean).join(" - ")}
      </span>
    </div>
  );
}