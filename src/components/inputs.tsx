interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  icon: React.ReactNode;
}

export default function Input({
  label,
  type,
  id,
  name,
  placeholder,
  icon,
}: React.PropsWithChildren<InputProps>) {
  return (
    <div className="mb-6 flex flex-col">
      <label
        htmlFor="api-key"
        className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          name={name}
          className="w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none sm:text-base"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
