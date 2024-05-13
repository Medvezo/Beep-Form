import { GiPalmTree } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Page() {
	const options = [
		{ use: "Hobby", icon: GiPalmTree },
		{ use: "Work", icon: MdWork },
		{ use: "Education", icon: FaGraduationCap },
	];

	return (
		<form className="flex justify-around items-center w-full gap-2">
			{options.map((option, index) => (
				<Label
					key={index}
					className="flex flex-col gap-5 font-bold text-lg justify-center items-center w-1/3 border-2 border-violet-500 rounded-lg py-2 px-10 hover:bg-purple-light transition-all duration-200 ease-in-out "
				>
					<Input
						type="radio"
						className="h-0 w-0 border-0"
						name="use"
						value={option.use}
					/>
					<option.icon className="h-10 w-10" />
					{option.use}
				</Label>
			))}
		</form>
	);
}
