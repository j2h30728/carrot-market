interface InterProps {
  errorMsg?: string;
}

export default function ErrorMsg({ errorMsg }: InterProps) {
  return (
    <div>
      <span className="mb-2 text-xs font-semibold text-red-700">test</span>
    </div>
  );
}
