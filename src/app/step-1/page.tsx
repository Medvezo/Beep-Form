import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
	return (
		<form className="space-y-5">
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="name" className="font-bold">
					First Name:
				</Label>
				<Input placeholder="John" id="name" type="text" />
			</div>
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="last-name" className="font-bold">
					Last Name:
				</Label>
				<Input placeholder="Doe" id="last-name" type="text" />
			</div>
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="date" className="font-bold">
					Birthdate:
				</Label>
				<Input id="date" type="date" />
			</div>
		</form>
	);
}
