export const Tooltip = ({ message }: { message: string }) => {
  return (
    <span className="tooltip-text absolute z-50 -mt-20 -ml-2 hidden max-w-sm rounded bg-blue-200 p-3 py-1 px-6 text-center text-xsm opacity-100 group-hover:block">
      {message}
    </span>
  );
};
