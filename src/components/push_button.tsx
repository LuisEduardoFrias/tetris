/** @format */

export default function PushButton({
	img,
	action
}: {
	img: string;
	action: (e: any) => void;
}) {
	//
	const _Styles = {
		backgroundImage: `url("../../public/${img}.png")`,
		backgroundRepeat: "none"
	};
	//
	return <button style={_Styles} className='btn'></button>;
}
