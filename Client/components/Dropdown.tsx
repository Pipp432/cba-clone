import { Menu } from "@headlessui/react";

function Dropdown() {
	return (
		/* Render a `div` instead of no wrapper element */
		<Menu as='div'>
			<Menu.Button>More</Menu.Button>
			{/* Render a `section` instead of a `div` */}
			<Menu.Items as='section'>
				<Menu.Item>
					{({ active }) => (
						<a
							className={`${active && "bg-blue-500"}`}
							href='/account-settings'
						>
							Account settings
						</a>
					)}
				</Menu.Item>

				{/* ... */}
			</Menu.Items>
		</Menu>
	);
}
export default Dropdown;
