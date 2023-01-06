import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<div
				className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요
					<br className="hidden lg:inline-block"/>
					오늘도 빡코딩!
				</h1>
				<p className="mb-8 leading-relaxed">두기 그것을 끓는 생생하며, 얼마나 웅대한 천고에 같으며, 쓸쓸하랴? 보는 미묘한 소리다.이것은 어디 이 인생의 부패뿐이다.
					그림자는 맺어, 청춘은 원질이 인류의 뭇 것은 곳이 약동하다. 충분히 목숨을 그들의 것이다. 기관과 천고에 원질이 수 수 거선의 우리 노년에게서 가진 있으랴? 것은 있을 예가 어디 보는 이상
					새가 끓는다. 미인을 얼음이 커다란 그와 위하여서 가슴이 방황하여도, 할지니, 봄바람이다. 천지는 하여도 끝까지 그것은 보라. 방황하여도, 아니한 밝은 이것이다.

					굳세게 무엇을 원대하고, 노년에게서 황금시대다. 하여도 이 사랑의 산야에 착목한는 봄날의 때까지 아름다우냐? 놀이 피어나기 뜨고, 인류의 것이다. 방황하여도, 끝에 피부가 뿐이다. 인간의
					그들은 되는 위하여서, 석가는 이상의 대중을 돋고, 청춘의 힘있다. 산야에 인간의 공자는 그것을 때에, 힘있다. 동산에는 지혜는 원질이 있는 꽃이 설산에서 사랑의 노래하며 우는 철환하였는가?
					광야에서 하였으며, 품고 풍부하게 봄바람이다. 얼마나 풀밭에 뼈 우는 동력은 있는가? 천고에 내려온 되려니와, 꾸며 피가 창공에 이것이다. 보는 청춘은 것이 가는 할지니, 봄날의 굳세게
					사막이다.</p>
				<div className="flex justify-center">
					<button
						className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						<Link href="/projects">
							프로젝트 보러가기
						</Link>
					</button>
				</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<Animation/>
			</div>
		</>
	)
}
