export default function Header(props) {
    const text = props.text;
	return (
		<>
			<nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">{text}</span>
                </div>
            </nav>
		</>
	);
}
