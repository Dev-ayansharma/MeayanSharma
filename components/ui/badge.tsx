export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'secondary';
}) {
  const base =
    'inline-block px-3 py-1 text-xs font-medium rounded-full transition-all';
  const variants = {
    default: 'bg-blue-600 text-white',
    secondary: 'bg-black border border-gray-700 text-white',
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
