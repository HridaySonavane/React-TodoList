import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Spinner() {
	return (
		// <InfinitySpin
		// 	className="block animate-spin w-[200px]"
		// 	ariaLabel="infinity-spin-loading"
		// 	strokeWidth={8}
		// 	color="black"
		// />

		<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
	);
}

export default Spinner;
