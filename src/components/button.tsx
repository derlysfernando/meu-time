interface ButtonProps {
  label: string;
  icon: React.ReactNode;
}

export default function Button({
  label,
  icon,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className="flex w-full">
      <button className="flex w-full items-center justify-center rounded bg-blue-600 py-2 text-sm text-white transition duration-150 ease-in hover:bg-blue-700 focus:outline-none sm:text-base">
        <span className="mr-2 uppercase">{label}</span>
        {icon}
      </button>
    </div>
  );
}
