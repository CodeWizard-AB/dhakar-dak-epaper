export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">{children}</main>;
}
