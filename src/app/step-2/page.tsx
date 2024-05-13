import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
	return (
		<form className="space-y-5">
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="email" className="font-bold">
					E-mail:
				</Label>
				<Input type="email" id="email" placeholder="example@gmail.com" />
			</div>

			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="password" className="font-bold">
					Password:
				</Label>
				<Input type="password" id="password" placeholder="***********" />
			</div>

			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="repeat-password" className="font-bold">
					Repeat Password:
				</Label>
				<Input type="password" id="repeat-password" placeholder="***********" />
			</div>
		</form>
	);
}
